<template>
  <div class="listpage">
    <mo-list-page
      :listOption="listOption"
      :queryOption="queryOption"
      :queryVal="queryVal"
      @on-query="query"
    >
      <template #test><Input type="text" v-model="queryVal.slotVal" placeholder="哈哈哈哈"/></template>
      <template #age="{row}">{{ row.age + 'aaa' }}</template>
      <template #rightActions>hhhhh</template>
    </mo-list-page>
    {{ queryVal }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      queryVal: {},
      paging: {
        total: 100,
        pageNo: 1,
        pageSize: 10,
      },
      listOption: {
        pageTitle: "页面标题",
        actions: {
          TR: [
            {
              name: "下载",
              handler: this.handle,
              options: {
                attrs: {
                  type: "primary",
                  icon: "md-download",
                },
              },
            },
            {
              name: "导出",
            },
          ],
        },
        paging: {
          pageNo: 1,
          pageSize: 10,
          total: 100,
        },
        columns: [
          {
            title: "Name",
            key: "name",
          },
          {
            title: "Age",
            slot: "age",
          },
          {
            title: "操作",
            type: "action",
            actions: [
              {
                name: "操作1",
                handler: this.handle,
                show: (row) => row.age === 18,
                attrs: {
                  type: "success",
                },
              },
              {
                name: "操作2",
                isConfirm: true,
                handler: this.handle,
                attrs: {
                  type: "primary",
                },
              },
            ],
          },
        ],
        data: [
          {
            name: "John Brown",
            age: 18,
            address: "New York No. 1 Lake Park",
            date: "2016-10-03",
          },
          {
            name: "Jim Green",
            age: 24,
            address: "London No. 1 Lake Park",
            date: "2016-10-01",
          },
          {
            name: "Joe Black",
            age: 30,
            address: "Sydney No. 1 Lake Park",
            date: "2016-10-02",
          },
          {
            name: "Jon Snow",
            age: 26,
            address: "Ottawa No. 2 Lake Park",
            date: "2016-10-04",
          },
        ],
      },
      queryOption: {
        schema: [
          {
            key: "skuName",
            // label: '输入框',
            type: "input",
            // attrs: {
            //   labelWidth:140,
            // },
            options: {
              attrs: {
                clearable: false,
                placeholder: "请输入商品名称",
              },
            },
          },
          {
            key: "skuName2",
            // label: '输入框2',
            type: "input",
            options: {
              clearable: false,
            },
          },
          {
            key: "skuName3",
            // label: '输入框',
            type: "input",
            options: {
              clearable: false,
            },
          },
          {
            key: "skuName3",
            // label: '输入框',
            type: "input",
            options: {
              clearable: false,
            },
          },
          {
            key: "skuName3",
            // label: '输入框',
            type: "input",
            options: {
              clearable: false,
            },
          },
          {
            key: "shop",
            // label: '店铺:',
            type: "select",
            options: {
              items: [
                {
                  code: "1",
                  name: "keep自有渠道",
                },
              ],
            },
          },
          {
            key: "shop",
            // label: '店铺:',
            type: "select",
            options: {
              items: [
                {
                  code: "1",
                  name: "keep自有渠道",
                },
              ],
            },
          },
          {
            key: "time",
            type: "date",
            options: {
              attrs: {
                placeholder: "时间",
                // clearable: false
              },
            },
          },
          {
            key: "timeRange",
            type: "daterange",
            options: {
              attrs: {
                placeholder: "时间起始",
                // clearable: false
              },
            },
          },
          {
            label: "slot",
            slot: "test",
          },
        ],
      },
    };
  },
  methods: {
    handle(row) {
      console.log(row)
    },
    query(queryParams) {
      console.log(queryParams, "q");
    },
  },
};
</script>
