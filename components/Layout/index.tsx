import React, { FC } from 'react';

import { Nav } from '../Nav';
import { Footer } from '../Footer';

export const Layout: FC = ({ children }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
);
