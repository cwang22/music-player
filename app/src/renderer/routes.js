export default [
  {
    path: '/home',
    name: 'home',
    component: require('./pages/Home'),
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: require('./pages/Playlist'),
  },
  {
    path: '*',
    redirect: '/playlist',
  },
];
