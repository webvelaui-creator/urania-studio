'use client';

import { ContactForm } from '@/components/contact-form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

type ContactDialogProps = {
  initialType?: string;
  initialInterest?: string;
};

export function ContactDialog({ initialType, initialInterest }: ContactDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className="button contact-page__cta">Trimite o solicitare</DialogTrigger>
      <DialogContent className="contact-dialog" showCloseButton>
        <DialogHeader>
          <DialogTitle>Începe conversația</DialogTitle>
          <DialogDescription>
            Spune-ne câteva lucruri despre proiectul tău, iar noi revenim către tine.
          </DialogDescription>
        </DialogHeader>
        <ContactForm initialType={initialType} initialInterest={initialInterest} />
      </DialogContent>
    </Dialog>
  );
}
