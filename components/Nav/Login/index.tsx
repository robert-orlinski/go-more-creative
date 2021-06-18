import React from 'react';
import { signIn } from 'next-auth/client';
import classNames from 'classnames';

export const Login = () => (
  <button className={classNames('flex alignCenter opacity cursorPointer')} onClick={() => signIn()}>
    sign in
  </button>
);
