import { contactTypes, services, spaces } from '@/data/site-content';

const allowedTypes = new Set(contactTypes.map(({ value }) => value));
const allowedInterests = new Set([...services, ...spaces].map(({ slug }) => slug));

function read(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  const formData = await request.formData();
  if (read(formData, 'website')) return Response.json({ message: 'Solicitarea a fost trimisă.' });

  const payload = {
    name: read(formData, 'name'),
    email: read(formData, 'email'),
    phone: read(formData, 'phone'),
    type: read(formData, 'type'),
    interest: read(formData, 'interest'),
    period: read(formData, 'period'),
    people: read(formData, 'people'),
    message: read(formData, 'message'),
  };

  if (payload.name.length < 2 || !/^\S+@\S+\.\S+$/.test(payload.email) || payload.message.length < 10) {
    return Response.json({ message: 'Verifică numele, adresa de email și mesajul.' }, { status: 400 });
  }
  if (!allowedTypes.has(payload.type)) {
    return Response.json({ message: 'Selectează un tip valid de solicitare.' }, { status: 400 });
  }
  if ((payload.type === 'spatiu' || payload.type === 'serviciu') && !allowedInterests.has(payload.interest)) {
    return Response.json({ message: 'Selectează un spațiu sau serviciu valid.' }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return Response.json(
      { message: 'Formularul este pregătit, dar destinația de contact nu a fost încă configurată. Te rugăm să ne suni.' },
      { status: 503 },
    );
  }

  const response = await fetch(webhook, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ ...payload, source: 'urania-studio-website' }),
  });

  if (!response.ok) {
    return Response.json({ message: 'Nu am putut trimite solicitarea. Încearcă din nou sau sună-ne.' }, { status: 502 });
  }

  return Response.json({ message: 'Mulțumim. Solicitarea ta a fost trimisă.' });
}
