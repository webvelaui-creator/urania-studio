'use client';

import type { SyntheticEvent } from 'react';
import { useState } from 'react';
import { contactTypes, services, spaces } from '@/data/site-content';

type Status = { kind: 'idle' | 'loading' | 'success' | 'error'; message: string };

type ContactFormProps = {
  initialType?: string;
  initialInterest?: string;
};

export function ContactForm({ initialType = '', initialInterest = '' }: ContactFormProps) {
  const safeInitialType = contactTypes.some((item) => item.value === initialType) ? initialType : '';
  const [type, setType] = useState(safeInitialType);
  const [interest, setInterest] = useState(initialInterest);
  const [status, setStatus] = useState<Status>({ kind: 'idle', message: '' });

  const options = type === 'spatiu' ? spaces : type === 'serviciu' ? services : [];

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus({ kind: 'loading', message: 'Trimitem solicitarea…' });
    try {
      const response = await fetch('/api/contact', { method: 'POST', body: new FormData(form) });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? 'Solicitarea nu a putut fi trimisă.');
      setStatus({ kind: 'success', message: result.message ?? 'Solicitarea a fost trimisă.' });
      form.reset();
      setType('');
      setInterest('');
    } catch (error) {
      setStatus({ kind: 'error', message: error instanceof Error ? error.message : 'A apărut o eroare.' });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-grid">
        <label>
          <span>Nume <b aria-hidden="true">*</b></span>
          <input name="name" type="text" autoComplete="name" required minLength={2} />
        </label>
        <label>
          <span>Email <b aria-hidden="true">*</b></span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Telefon</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>Tip solicitare <b aria-hidden="true">*</b></span>
          <select name="type" value={type} onChange={(event) => { setType(event.target.value); setInterest(''); }} required>
            <option value="">Selectează</option>
            {contactTypes.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}
          </select>
        </label>
        {options.length ? (
          <label className="form-wide">
            <span>{type === 'spatiu' ? 'Spațiul dorit' : 'Serviciul dorit'} <b aria-hidden="true">*</b></span>
            <select name="interest" value={interest} onChange={(event) => setInterest(event.target.value)} required>
              <option value="">Selectează</option>
              {options.map((item) => <option value={item.slug} key={item.slug}>{item.title}</option>)}
            </select>
          </label>
        ) : (
          <label className="form-wide">
            <span>Subiect</span>
            <input name="interest" type="text" value={interest} onChange={(event) => setInterest(event.target.value)} />
          </label>
        )}
        {type === 'spatiu' ? (
          <>
            <label>
              <span>Data / perioada dorită</span>
              <input name="period" type="text" placeholder="Ex. 12–14 octombrie" />
            </label>
            <label>
              <span>Număr estimativ de persoane</span>
              <input name="people" type="number" min="1" inputMode="numeric" />
            </label>
          </>
        ) : null}
        <label className="form-wide">
          <span>Mesaj <b aria-hidden="true">*</b></span>
          <textarea name="message" rows={7} required minLength={10} />
        </label>
      </div>
      <div className="form-actions">
        <button className="button" type="submit" disabled={status.kind === 'loading'}>
          {status.kind === 'loading' ? 'Se trimite…' : 'Trimite solicitarea'}
        </button>
        <output className={`form-status status-${status.kind}`} aria-live="polite">{status.message}</output>
      </div>
    </form>
  );
}
