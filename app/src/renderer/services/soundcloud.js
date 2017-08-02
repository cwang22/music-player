import axios from 'axios';
const clientId = 'yhZSOFUtSUGz5OxWpiOhRi065lcrlAqI';

export default {
  init() {
    return axios.get(`https://api.soundcloud.com/playlists/209262931?client_id=${clientId}`);
  },
};
