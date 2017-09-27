import { Menu } from 'electron'

export default function() {
  const template = [
    {
      label: 'File',
      submenu: [{ role: 'quit' }]
    },
    {
      label: 'Edit',
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
      label: 'Playback',
      submenu: [
        {
          label: 'Next',
          accelerator: 'CmdOrCtrl+Right'
        },
        {
          label: 'Previous',
          accelerator: 'CmdOrCtrl+Left'
        },
        { type: 'separator' },
        {
          label: 'Shuffle',
          accelerator: 'CmdOrCtrl+S'
        },
        {
          label: 'Repeat',
          accelerator: 'CmdOrCtrl+R'
        },
        { type: 'separator' },
        {
          label: 'Volume Up',
          accelerator: 'CmdOrCtrl+Up'
        },
        {
          label: 'Volume Up',
          accelerator: 'CmdOrCtrl+Down'
        }
      ]
    },
    {
      label: 'View',
      submenu: [{ role: 'zoomin' }, { role: 'zoomout' }, { role: 'resetzoom' }]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More'
        }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}
