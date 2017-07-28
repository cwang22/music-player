import axios from 'axiois';
const clientId = 'yhZSOFUtSUGz5OxWpiOhRi065lcrlAqI';
const baseURL = 'https://api.soundcloud.com/tracks';
export default {
  search(query) {
    return axios.get(`${baseURL}?client_id=${clientId}&q=${query}`);
  },
};
