export default [
  {
    path: '/detail',
    name: 'detail',
    component: require('./pages/Detail'),
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
