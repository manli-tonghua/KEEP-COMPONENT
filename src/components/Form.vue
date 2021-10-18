<template>
  <Form :model="value"
        :class="formClass"
        v-bind="attrs"
        ref="moForm">
    <slot>
      <Row v-if="isRow" :gutter="8">
        <template v-for="(item,idx) in schema">
          <Col :key="idx"
                 :span="item.colSpan===undefined?colSpan:item.colSpan"
                 :offset="item.offset===undefined?offset:item.offset">
            <template v-if="item.slot">
              <mo-slot :root="root"
                       :name="item.slot"
                       :data="{item,value}" />
            </template>
            <template v-else>
              <v-form-item :item="item"
                           v-model="value[item.key]" />
            </template>
          </Col>
        </template>
      </Row>
      <template v-else>
        <template v-for="(item,idx) in schema">
          <template v-if="item.slot">
              <mo-slot :root="root"
                       :name="item.slot"
                       :key="idx"
                       :data="{item,value}" />
          </template>
          <template v-else>
              <v-form-item :item="item"
                           :key="idx"
                           v-model="value[item.key]" />
          </template>
        </template>
      </template>
    </slot>
  </Form>
</template>

<script>
import moMixin from '../mixins/moMixin.js'
import comMap from './comMap.js'
import VFormItem from './FormItem'
export default {
  mixins: [moMixin],
  components: { VFormItem },
  props: {
    schema: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: Object,
      default() {
        return {}
      }
    },
    attrs: {
      type: Object,
      default() {
        return {}
      }
    },
    colSpan: {
      type: [Number, String],
      default: 4
    },
    isRow: {
      type: Boolean,
      default: true
    },
    offset: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    formClass () {
      return {
        [`${this.prefixCls}-form`]: true,
        [`${this.prefixCls}-form-inline`]: this.attrs && this.attrs.inline
      }
    }
  },
  methods: {
    resetFields () {
      return this.$refs.moForm.resetFields()
    },
    validate () {
      return this.$refs.moForm.validate()
    },
    validateField (prop, callback) {
      return this.$refs.moForm.validateField(prop, callback)
    },
  }
}
</script>