import { FC } from 'react';
import { NextSeo } from 'next-seo';

import { Nav } from '../Nav';
import { Footer } from '../Footer';

import { meta } from '../../helpers/metaData';

import { LayoutType } from './types';

export const Layout: FC<LayoutType> = ({ children, pageName }) => (
  <>
    <NextSeo title={pageName && `${pageName} | ${meta.title}`} />
    <Nav />
    {children}
    <Footer />
  </>
);
