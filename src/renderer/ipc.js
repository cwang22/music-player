import { ipcRenderer } from 'electron'

export default function(vue) {
  ['next','previous', 'shuffle', 'volumeUp', 'volumeDown'].map(event =>{
      ipcRenderer.on(event, () => {
          vue.$store.commit(event)
      })
  })
}

