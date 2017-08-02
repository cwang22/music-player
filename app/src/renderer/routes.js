export default [
  {
    path: '/nowplaying',
    name: 'nowplaying',
    component: require('./pages/Nowplaying'),
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: require('./pages/Playlist'),
  },
  {
    path: '/search',
    name: 'search',
    component: require('./pages/Search'),
  },
  {
    path: '*',
    redirect: '/playlist',
  },
];
