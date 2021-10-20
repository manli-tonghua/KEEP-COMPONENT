<template>
  <div class="listpage">
    <mo-list :columns="columns" :data="data1" :paging="paging" @on-page-size-change="changePageSize" @on-change="changePage">
      <template #age="{row}">{{row.age+ '___hhh'}}</template>
    </mo-list>
    <!-- <mo-list-page :listOption='listOption'></mo-list-page> -->
  </div>
</template>
<script>
export default {
  data(){
    return {
      paging: {
        total: 100,
        pageNo: 1,
        pageSize: 10,
      },
      columns: [{
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        slot: 'age'
                    },
                    {
                        title: '操作',
                        type: 'action',
                        actions: [
                          {
                            name: '操作1',
                            handler: this.handle,
                            show: (row) => row.age === 18,
                            attrs: {
                              type: 'success'
                            }
                          },{
                            name: '操作2',
                            attrs: {
                              type: 'primary'
                            }
                          }
                        ],
                        
                    }],
       data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
      listOption: {
        actions: {
          TR: [{
            name:'下载',
            handler:this.handle,
            options:{
              attrs:{
                type: 'primary',
                icon: 'md-download'
              }
        },},{
            name:'导出'}
          ]
        }
      }
    }
  },
  methods: {
    handle(source,data) {
      console.log(source,data)
    },
    changePageSize(pageSize) {
      console.log(pageSize)
    },
    changePage(page) {
      console.log(page)
    }
  }
}
</script>