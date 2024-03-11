'use client';

import React, { FC, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface NextAuthProviderProps {
  children: ReactNode;
}

const NextAuthProvider: FC<NextAuthProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
