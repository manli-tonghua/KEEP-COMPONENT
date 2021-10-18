<template>
  <div class="listpage">
    <mo-list :columns="columns" :data="data1">
      <template #age="{row}">{{row.age+ '___hhh'}}</template>
    </mo-list>
    <!-- <mo-list-page :listOption='listOption'></mo-list-page> -->
  </div>
</template>
<script>
export default {
  data(){
    return {
      columns: [{
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        slot: 'age'
                    },
                    {
                        title: 'Address',
                        type: 'action',
                        actions: [
                          {
                            name: '操作1',
                            attrs: {
                              type: 'success'
                            }
                          },{
                            name: '操作1',
                            attrs: {
                              type: 'success'
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
    handle() {
      console.log('ddd')
    }
  }
}
</script>