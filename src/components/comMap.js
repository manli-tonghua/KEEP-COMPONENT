import BaseComponent from './baseComponent'
import VCheckbox from './Checkbox'
import VSelect from './Select'
import VRadio from './Radio'
import VDatePicker from './DatePicker'  

const defaultCom = {
  component: BaseComponent,
  defaultOptions: {
    comType: 'Input',
    attrs: {
      clearable: true
    }
  }
}

export default {
  input: defaultCom,
  number: {
    component: BaseComponent,
    defaultOptions: {
      comType: 'InputNumber',
      attrs: {
        'active-change': false
      }
    }
  },
  cascader: {
    component: BaseComponent,
    defaultOptions: {
      items: [],
      comType: 'Cascader',
      attrs: {
        clearable: true,
        filterable: true,
        trigger: 'click',
        'change-on-select': true
      }
    }
  },
  switch: {
    component: BaseComponent,
    defaultOptions: {
      comType: 'Switch',
      attrs: {}
    }
  },
  checkbox: {
    component: VCheckbox,
    defaultOptions: {
      attrs: {},
      items: []
    }
  },
  select: {
    component: VSelect,
    defaultOptions: {
      attrs: {
        clearable: true,
        filterable: true
      },
      items: []
    }
  },
  radio: {
    component: VRadio,
    defaultOptions: {
      attrs: {},
      items: []
    }
  },
  date: {
    component: VDatePicker,
    defaultOptions: {
      attrs: {
        clearable: true,
      }
    }
  },
  daterange: {
    component: VDatePicker,
    defaultOptions: {
      attrs: {
        clearable: true,
        type: 'daterange'
      }
    }
  },
  datetime: {
    component: VDatePicker,
    defaultOptions: {
      attrs: {
        clearable: true,
        type: 'datetime'
      }
    }
  },
  datetimerange: {
    component: VDatePicker,
    defaultOptions: {
      attrs: {
        clearable: true,
        type: 'datetimerange'
      }
    }
  },
  year: {
    component: VDatePicker,
    defaultOptions: {
      attrs: {
        clearable: true,
        type: 'year'
      }
    }
  },
  month: {
    component: VDatePicker,
    defaultOptions: {
      attrs: {
        clearable: true,
        type: 'month'
      }
    }
  },

}