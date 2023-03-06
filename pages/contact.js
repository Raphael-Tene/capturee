import Form from '@/components/Contact';
import Hero from '@/components/Hero';
import React from 'react';

export default function Contact() {
  return (
    <div>
      <Hero
        heading='Get In Touch'
        message='Let me capture your favorite moments.'
      />
      <Form />
    </div>
  );
}
