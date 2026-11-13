import React from 'react';

export default function SectionTitle({ children, id }: { children: React.ReactNode, id?: string }) {
  return (
    <h2
      id={id}
      className="mb-8 text-3xl font-medium tracking-[-0.03em] text-foreground md:mb-10 md:text-4xl"
    >
      {children}
    </h2>
  );
}
