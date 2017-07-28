export default [
  {
    path: '/',
    name: 'home',
    component: require('./pages/Home'),
  },
  {
    path: '*',
    redirect: '/',
  },
];
