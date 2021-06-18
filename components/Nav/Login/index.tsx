import React, { FC } from 'react';
import { signIn } from 'next-auth/client';
import classNames from 'classnames';

import { SelectivelyVisibleElementType } from '../../../types/global';

export const Login: FC<SelectivelyVisibleElementType> = ({ visibleOnClassName }) => (
  <button
    className={classNames('flex alignCenter opacity cursorPointer', visibleOnClassName)}
    onClick={() => signIn()}
  >
    sign in
  </button>
);
