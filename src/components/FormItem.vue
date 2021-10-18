<template>
  <FormItem :label="model.label"
            :prop="model.key"
            :rules="model.rules"
            v-show="model.show!==false"
            :class="formItemPrefixCls"
            v-bind="model.attrs">
    <component :is="model.component"
               v-bind="model.options"
               v-model="newVal"
               :class="`${formItemPrefixCls}-field`" />
  </FormItem>
</template>
<script>
import moMixin from '../mixins/moMixin'
import comMap from './comMap.js'
export default {
  mixins: [moMixin],
  props: ['item','value'],
  data() {
    return {
      model: {}
    }
  },
  computed: {
    formItemPrefixCls () {
      return `${this.prefixCls}-form-item`
    },
    newVal: {
      get () { return this.value },
      set (val) { this.$emit('input', val) }
    }
  },
  methods: {
    init () {
      let com = comMap[this.item.type] || comMap.default
      let attrs = this.item.options ? this.item.options.attrs : {}
      this.model = {
        ...this.item,
        component: com.component,
        options: {
          ...com.defaultOptions,
          ...this.item.options,
          attrs: Object.assign({}, com.defaultOptions.attrs, attrs)
        }
      }
    }
  },
  watch: {
    item: {
      deep: true,
      immediate: true,
      handler () {
        this.init()
      }
    }
  }
}
</script>