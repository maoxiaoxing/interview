import React from 'react';
import Hello from '../pages/test/hello'
import Test from '../pages/test/test'

export interface MxxRouter {
  path: string;
  name: string;
  title: string;
  descriptions: string;
  children?: MxxRouter[];
  component?: React.FC;
}

const routes: MxxRouter[] = [
  {
    path: '/test',
    name: 'Test',
    title: 'Test',
    descriptions: 'Test',
    children: [
      {
        path: '/test/hello',
        name: 'Hello',
        title: 'Hello',
        descriptions: 'Hello',
        component: Hello,
      },
      {
        path: '/test/test',
        name: 'Test',
        title: 'Test',
        descriptions: 'Test',
        component: Test,
      },
    ],
  },
]

export default routes
