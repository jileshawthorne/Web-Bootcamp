import Dashboard from './containers/dashboard.js'

export default class App {
  constructor() {
    document.body.style.background = 'url("/images/shield.jpg") no-repeat center center fixed'
    document.body.style.backgroundSize = 'cover'
    document.body.style.height = '100%'
    document.body.style.margin = '0'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'

    let content = document.getElementById('content')

    let dashboard = new Dashboard()

    dashboard.getData().then((data) => {
      content.append(dashboard.getContent(data))
      dashboard.animate()
    })
  }
}

let app = new App()
window.app = app

