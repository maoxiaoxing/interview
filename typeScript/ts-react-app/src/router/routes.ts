import Hello from '../pages/test/hello'


const routes = [
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
    ],
  },
]

export default routes
