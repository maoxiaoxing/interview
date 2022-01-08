import React from 'react';
import Hello from '../pages/demo/hello'
import Test from '../pages/demo/test'
import Employee from '../pages/employee'

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
  {
    path: '/employee',
    name: 'Employee',
    title: 'Employee',
    descriptions: 'Employee',
    component: Employee,
  }
]

export default routes
