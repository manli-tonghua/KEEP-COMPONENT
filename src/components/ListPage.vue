<template>
  <Card>
    <Row type="flex" justify="space-between" align="middle" :class="`${prefixCls}-list-page-head`">
      <Col :class="`${prefixCls}-list-page-title`">{{ listOption.pageTitle }}</Col>
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
    <list v-bind="listOpts"
          @on-page-size-change="changePageSize" 
          @on-change="changePage"
          ></list>
     
  </Card>
</template>

<script>
import mixins from '../mixins/moMixin'
import QueryForm from './QueryForm.vue'
import List from './List.vue'
import moment from 'moment'
export default {
  components: { QueryForm, List},
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
  data () {
    return {
      realPageSize: 10
    }
  },
  computed: {
    listOpts () {
      return Object.assign({
        actions: {},
        data: [],
        columns: []
      }, this.listOption)
    }
  },
  mounted() {
    this.realPageSize = this.listOpts.paging.pageSize
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
      if(this.listOpts.paging) {
        this.queryParams.pageSize = this.realPageSize
        this.queryParams.pageNo = pageNo
        this.listOpts.paging.current = pageNo
      }
      if(this.queryVal.time){
        this.queryParams.timeFormat = moment(this.queryVal.time).valueOf()
      }
      if(this.queryVal.timeRange && this.queryVal.timeRange.length === 2 && this.queryVal.timeRange[0] !== '') {
        this.queryParams.startTime = moment(this.queryVal.timeRange[0]).valueOf()
        this.queryParams.endTime = moment(this.queryVal.timeRange[1]).valueOf()
      }
      this.$emit('on-query', this.queryParams)
    },
    changePage (page) {
      this.query(page)
    },
    changePageSize (pageNum) {
      this.realPageSize = pageNum
      this.query(1)
    }
  }
}
</script>