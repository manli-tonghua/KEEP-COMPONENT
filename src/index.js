import './styles/index.scss'

import MoCheckbox from './components/Checkbox'
import MoFormItem from './components/FormItem'
import MoForm from './components/Form'
import MoQueryForm from './components/QueryForm'
import MoListPage from './components/ListPage'
import MoList from './components/List'

const vui = {
  MoCheckbox,
  MoFormItem,
  MoForm,
  MoQueryForm,
  MoListPage,
  MoList
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