<template>
  <FormItem :label="model.label"
            :prop="model.key"
            :rules="mmodel.rules"
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
  }
}
</script>