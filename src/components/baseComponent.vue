<template>
  <component :is="comType" v-bind="attrs" v-on="events" v-model="val" />
</template>
<script>
export default {
  name: 'VBaseComponent',
  props: {
    comType: {
      type: String,
      default: 'Input'
    },
    value: {
      type: [Array, String, Number, Date]
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
      get () { return this.value },
      set (val) { this.$emit('input', val)}
    }
  }
}
</script>