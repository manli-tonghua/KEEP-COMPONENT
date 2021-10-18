<template>
  <DatePicker v-model="val"
              v-bind="attrs"
              v-on="events"></DatePicker>
</template>

<script>
export default {
  name: 'VDatePicker',
  props: {
    value: {
      type: [Date, String, Array]
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
      set (val) { this.$emit('input',val) }
    }
  }
}
</script>