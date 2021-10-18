<template>
  <Select v-model="val"
          v-bind="attrs"
          v-on="events">
    <Option v-for="(item,index) in items"
            :value="item.code"
            :key="index">{{ item.name }}</Option>
  </Select>
</template>

<script>
export default {
  name: 'VSelect',
  props: {
    items: {
      type: Array
    },
    attrs: {
      type: Object
    },
    value: {
      type: [String, Number, Array]
    },
    events: {
      type: Object
    }
  },
  computed: {
    val: {
      get () { return this.value },
      set (val) { this.$emit('input',val)}
    }
  }
}
</script>