import React, { FC } from 'react';
import type { Metadata } from 'next';

interface SignUpPageProps {}

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Generated by create next app',
};

const SignUpPage: FC<SignUpPageProps> = ({}) => {
  return <div>SignUpPage</div>;
};

export default SignUpPage;