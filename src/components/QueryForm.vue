<template>
  <v-form  :schema="newSchema"
            :attrs="attrs"
            v-model="value"
            :root="root"
            ref="queryForm">
    <template #query_btns>
      <FormItem :class="`${prefixCls}-action`" v-if="!hideQueryBtn || !hideResetBtn">
        <Button :class="`${prefixCls}-action-item`" 
                type="primary"
                @click="queryHandle"
                icon="ios-search"
                v-if="!hideQueryBtn">查询</Button>    
        <Button :class="`${prefixCls}-action-item`" 
                type="primary"
                @click="resetQuery"
                icon="md-refresh"
                v-if="!hideResetBtn">重置</Button>
      </FormItem>
    </template>        
  </v-form>
</template>

<script>
import VForm from './Form'
import mixins from '../mixins/moMixin'
export default {
  mixins: [mixins],
  components: { VForm },
  props: {
    schema: {
      type: Array
    },
    attrs: {
      type: Object
    },
    value: {
      type: Object,
      default() {
        return {}
      }
    },
    hideQueryBtn: {
      type: Boolean,
      default: false
    },
    hideResetBtn: {
      type: Boolean,
      defautl: false
    }
  },
  computed: {
    newSchema() {
      return [
        ...this.schema,
        {
          slot: 'query_btns'
        }
      ]
    }
  },
  methods: {
    async queryHandle() {
      let valid = await this.$refs.queryForm.validate()
      if(valid) {
        this.$emit('on-query',this.value)
      }
    },
    resetQuery() {
      console.log(this.$refs['queryForm'])
      this.$refs['queryForm'].resetFields()
      for (let sc of this.schema) {
        if(Array.isArray(this.value[sc.key])){
          this.value[sc.key] = []
        }else {
          this.value[sc.key] = null
        }
      }
      this.$emit('on-reset')
    }
  },
}
</script>