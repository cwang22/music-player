import { Menu } from 'electron'

export default function(window) {
  const template = [
    {
      label: '&File',
      submenu: [{ role: 'quit' }]
    },
    {
      label: '&Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'delete' },
        { role: 'selectall' }
      ]
    },
    {
      label: '&Playback',
      submenu: [
        {
          label: 'Next',
          accelerator: 'CmdOrCtrl+Right',
          click() {
            window.webContents.send('next')
          }
        },
        {
          label: 'Previous',
          accelerator: 'CmdOrCtrl+Left',
          click() {
            window.webContents.send('previous')
          }

        },
        { type: 'separator' },
        {
          label: 'Shuffle',
          accelerator: 'CmdOrCtrl+S',
          click() {
            window.webContents.send('shuffle')
          }
        },
        {
          label: 'Repeat',
          accelerator: 'CmdOrCtrl+R',
          click() {
            window.webContents.send('repeat')
          }
        },
        { type: 'separator' },
        {
          label: 'Volume Up',
          accelerator: 'CmdOrCtrl+Up',
          click() {
            window.webContents.send('volumeUp')
          }
        },
        {
          label: 'Volume Down',
          accelerator: 'CmdOrCtrl+Down',
          click() {
            window.webContents.send('volumeDown')
          }
        }
      ]
    },
    {
      label: '&View',
      submenu: [{ role: 'zoomin' }, { role: 'zoomout' }, { role: 'resetzoom' }]
    },
    {
      label: '&Help',
      role: 'help',
      submenu: [
        {
          label: 'About'
        }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}
