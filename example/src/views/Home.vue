<template>
  <div class="home">
    <div>
      <h2>checkbox demo</h2>
      <mo-checkbox
        :items="items"
        v-model="values"
      ></mo-checkbox>
      {{ values }}
    </div>
    <div>
      <h2>formitem demo</h2>
      <Form :model="formInline">
        <mo-form-item
          :item="item"
          v-model="formInline['skuId']"
        ></mo-form-item>
        <mo-form-item
          :item="inputItem"
          v-model="formInline['skuName']">
        </mo-form-item>
        <mo-form-item
          :item="selectItem"
          v-model="formInline['shop']"
        ></mo-form-item>
        <mo-form-item :item="radioItem"
                      v-model="formInline['radio']"
        ></mo-form-item>
        <mo-form-item :item="timeItem"
                      v-model="formInline['time']">
        </mo-form-item>
        <mo-form-item :item="cascaderItem"
                      v-model="formInline['cascader']"></mo-form-item>
      </Form>
      {{ formInline.time }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      items: [{
        label: '手环',
        value: '0'
      },{
        label: '跳绳',
        value: '1'
      }],
      values: [],
      attrs: {

      },
      formInline: {
        skuId: [{
        label: '手环',
        value: '0'
        },{
          label: '跳绳',
          value: '1'
        }],
        'skuName': '',
        'shop':'',
        'radio': '',
        'time': null,
        'cascader': []
      },
      item: {
            key: 'skuId',
            label: '瑜伽垫',
            type: 'checkbox'
          },
      inputItem: {
        key: 'skuName',
        label: '输入框',
        type: 'input',
        options: {
          clearable: false
        }
      },
      selectItem: {
        key: 'shop',
        label: '店铺:',
        type: 'select',
        options: {
            items: [{
            code: '1',
            name: 'keep自有渠道'
          }]
        }
      },
      radioItem: {
        key: 'radio',
        label: '单选',
        type: 'radio',
        options: {
          items: [{
            name: '计步器'
          },{
            name: '单车'
          }]
        }
      },
      timeItem: {
        key: 'time',
        label: '合同交期',
        type: 'month',
        options: {
          attrs: {
            'format': 'MM'
          },
          events: {
            'on-change': this.handleChange
          }
        }
      },
      cascaderItem: {
        label: "jilian",
        key: 'cascader',
        type: 'cascader',
        options: {
          attrs: {
            data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                  }]
          }
        }
      }
    }
  },
  mounted() {
    console.log()
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>
