import React, { ReactNode } from 'react';
import Link from 'next/link';

type SimpleLinkProps = {
  children: ReactNode;
  href?: string;
};

const SimpleLink: React.FC<SimpleLinkProps> = ({ children, href }) => {
  const linkHref = href ?? `/${React.Children.toArray(children).join('').toString().toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <Link href={linkHref} style={{textDecoration: 'underline'}}>{children}</Link>
  );
};

export default SimpleLink;