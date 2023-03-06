import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import React from 'react';

export default function Work() {
  return (
    <div>
      <Hero message='Some of my most recent photos' heading='My Work' />
      <Portfolio />
    </div>
  );
}
