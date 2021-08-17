<template>
  <CheckboxGroup v-model="val"
                 v-bind="attrs"
                 v-on="events">
    <Checkbox v-for="(item,index) in items"
              :key="index"
              :label="item.value"
              v-bind="item.attrs">{{ item.label }}</Checkbox>
  </CheckboxGroup>
</template>
<script>
export default {
  name: 'VCheckbox',
  props: {
    items: {
      type: Array
    },
    value: {
      type: Array
    },
    attrs: {
      type: Object
    },
    events: {
      type: Object
    }
  },
  computed: {
    val: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>