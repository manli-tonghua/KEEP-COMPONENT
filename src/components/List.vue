<template>
  <div :class="listCls">
    <Table v-bind="attrs" :columns="listCols" :data="rowData">
      <template v-for="col in slotCols" v-slot:[col.slot]="{row,index}">
        <mo-slot :name="col.slot"
                 :root="root"
                 :data="{row, index, col}"
                 :key="col.slot"></mo-slot>
      </template>
      <template v-for="acCol in actionsCols" v-slot:[acCol.slot]="{row,index}">
        <template v-for="(item,index) in acCol.actions">
          <template v-if="row[item._key]">
            <mo-slot v-if="item.slot"
                    :name="item.slot"
                    :root="root"
                    :data="{row, index, item}"
                    :key="index">
            </mo-slot>
            <template v-else>
              <Button :class="`${listCls}-action`"
                      :key="index"
                      size="small"
                      v-bind="item.attrs"
                      @click="actionHandle(item,row)">{{ item.name }}</Button>
            </template>
          </template>
        </template>
      </template>
    </Table>
    <div :class="`${listCls}-page`" v-if="paging">
      <Page
        v-bind="paging"
        :current.sync="pageNo"
        :page-size-opts="pageSizeOpt"
        show-total
        show-sizer
        show-elevator
        @on-change="changePage"
        @on-page-size-change="changePageSize">
      </Page>
    </div>
  </div>
</template>

<script>
import moMixin from '../mixins/moMixin'
export default {
  mixins: [moMixin],
  props: {
   attrs: Object,
   columns: {
     type: Array
   },
   data: {
     type: Array
   },
   actions: Object,
   paging: {},
   pageSizeOpt: {
     type: Array,
     default(){
       return [10, 20, 50, 100]
     }
   }
  },
  data () {
    return {
      listCols: [],
      actionsCols: [],
      slotCols: [],
      rowData: []
    }
  },
  computed: {
    listCls () { return `${this.prefixCls}-list` },
    listData () { return this.data || [] },
    listActions () { return this.actions || {} },
    pageNo: {
      get () { return this.current || 1},
      set (val) { this.$emit('update:current',val)}
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init () {
      this.initColumns()
      this.initData()
    },
    initColumns () {
      this.listCols = []
      this.actionsCols = []
      if(!this.columns || !this.columns.length) return
      this.columns.forEach((col,index) => {
        let c = { ...col }
        if (c.slot) {
          this.slotCols.push(c)
        } else if (c.type === 'action') {
          c.actions.forEach((ac,acIdx) => {
            ac._key = `listAct_${index}_${acIdx}`
          })
          c.slot = `listAct_${index}`
          this.actionsCols.push(c)
        }
        this.listCols.push(c)
      })
    },
    initData () {
      this.rowData = []
      this.listData.forEach((row,i) => {
        let data = { ...row }
        this.actionsCols.forEach(async col => {
          col.actions.forEach(async ac => {
            data[ac._key] = false
            data[ac._key] = await this.showAction(ac, row)
          })
        })
        this.rowData.push(data)
      })
    },
    showAction (item, row) {
      if (item.show === undefined) return true
      if (item.show instanceof Function) {
        return item.show(row, item)
      }
      return !!item.show
    },
    actionHandle (source, data) {
      let type = Object.prototype.toString.apply(source.handler)
      if (type === '[object Function]') {
        return source.handler(data, source)
      } else if (type === '[object String]') {
        return this.$emit(source.handler, { source, data })
      }
    },
    changePage (page) {
      this.pageNo = page
      this.$emit('on-change',page)
    },
    changePageSize (pageNum) {
      this.$emit('on-page-size-change',pageNum)
    }
  }
}
</script>