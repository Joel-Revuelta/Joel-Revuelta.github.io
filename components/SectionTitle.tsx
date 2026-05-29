import React from 'react';

export default function SectionTitle({ children, id }: { children: React.ReactNode, id?: string }) {
  return (
    <h1 id={id} className="text-4xl md:text-5xl font-bold mt-40 mb-10 scroll-mt-24">
      {children}
    </h1>
  );
}
