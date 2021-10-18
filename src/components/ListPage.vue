<template>
  <Card>
    <Row type="flex" justify="space-between" align="middle" :class="`${prefixCls}-list-page-head`">
      <Col :class="`${prefixCls}-list-page-title`">店铺管理</Col>
      <Col>
        <mo-slot name="rightActions" :root="root" v-if="listOption.actions.TR">
          <template v-for="(item,index) in listOption.actions.TR">
            <Button :key="index" 
                    :class="`${prefixCls}-list-page-btn`" 
                    @click="actionHandle(item)"
                    v-bind="item.options?item.options.attrs:{}">{{ item.name }}
            </Button>
          </template>
        </mo-slot>
      </Col>
    </Row>
    <query-form v-bind="queryOption"
                v-model="queryVal"
                @on-query="query(1)"></query-form>
     <Page :current.sync="pageIndex"
           :page-size="pageSize"
           :total="total"
           v-bind="attrs"
           @on-page-size-change="changePageSize"
           @on-change="pageChange"/>
  </Card>
</template>

<script>
import mixins from '../mixins/moMixin'
import QueryForm from './QueryForm.vue'
export default {
  components: { QueryForm },
  mixins: [mixins],
  props: {
    attrs: {
      type: Object,
      default: () => ({})
    },
    queryVal: Object,
    queryOption: Object,
    listOption: Object,
  },
  methods: {
    actionHandle(source) {
      let type = Object.prototype.toString.apply(source.handler)
      if(type === '[object Function]') {
        return source.handler()
      }else if(type === '[object String]') {
        return this.$emit(source.handler)
      }
    },
    query(pageNo) {
      this.queryParams = Object.assign({}, this.queryVal)

    }
  }
}
</script>