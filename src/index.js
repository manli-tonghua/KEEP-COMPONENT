import './styles/index.scss'

import MoCheckbox from './components/Checkbox'

const vui = {
  MoCheckbox
}

const install = (Vue) => {
  if (install.installed) return
  Object.keys(vui).forEach(key => {
    Vue.component(key, vui[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...vui
}