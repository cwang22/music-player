import axios from 'axios'

export default axios.create({
  baseURL: 'http://api.soundcloud.com/',
  params: {
    client_id: 'yhZSOFUtSUGz5OxWpiOhRi065lcrlAqI'
  }
})
