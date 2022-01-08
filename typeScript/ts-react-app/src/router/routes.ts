import React from 'react';
import Hello from '../pages/demo/hello'
import Test from '../pages/demo/test'

export interface MxxRouter {
  path: string;
  name: string;
  title: string;
  descriptions: string;
  children?: MxxRouter[];
  component?: any;
}

const routes: MxxRouter[] = [
  {
    path: '/demo',
    name: 'Demo',
    title: 'Demo',
    descriptions: 'Demo',
    children: [
      {
        path: '/demo/hello',
        name: 'Hello',
        title: 'Hello',
        descriptions: 'Hello',
        component: Hello,
      },
      {
        path: '/demo/test',
        name: 'Test',
        title: 'Test',
        descriptions: 'Test',
        component: Test,
      },
    ],
  },
]

export default routes
