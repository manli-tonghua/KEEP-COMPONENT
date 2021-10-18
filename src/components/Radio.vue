<template>
  <RadioGroup v-model="val"
              v-bind="attrs"
              v-on="events">
    <Radio v-for="(item,index) in items"
            :key="index"
            :label="item.name"
            v-bind="item.attrs">{{ item.name }}</Radio>
  </RadioGroup>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    },
    value: {
      type: [String, Number]
    },
    attrs: {
      type: Object
    },
    events: {
      tyep: Object
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