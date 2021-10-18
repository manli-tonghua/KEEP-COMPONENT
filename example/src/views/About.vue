<template>
  <div class="about">
    <!-- <mo-form :schema="schema"
             :attrs="attrs"
            v-model="value"> -->
      <!-- <template #test>
         这是一个slot:<Select v-model="value.city" style="width:200px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      </template> -->
    <!-- </mo-form> -->
    <!-- {{value}} -->
    <mo-query-form :schema="schema"
                   @on-query="search"
                    :attrs="attrs"
                    v-model="value"
    ></mo-query-form>
    {{value}}
  </div>
</template>

<script>
export default {
  name: 'demo',
  data() {
    return {
      attrs: {
        // inline: true,
        // labelWidth:80
      },
      cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
      ],
      value: {
        skuName: '',
        shop: '',
        city: ''
      },
      schema: [
        {key: 'skuName',
        // label: '输入框',
        type: 'input',
        // attrs: {
        //   labelWidth:140,
        // },
        options: {
            attrs: {
              clearable: false,
              placeholder: '请输入商品名称',
            }
          }
        },
        {key: 'skuName2',
        // label: '输入框2',
        type: 'input',
        options: {
            clearable: false
          }
        },
        {key: 'skuName3',
        // label: '输入框',
        type: 'input',
        options: {
            clearable: false
          }
        },
        {key: 'skuName3',
        // label: '输入框',
        type: 'input',
        options: {
            clearable: false
          }
        },
        {key: 'skuName3',
        // label: '输入框',
        type: 'input',
        options: {
            clearable: false
          }
        },
        {
          key: 'shop',
          // label: '店铺:',
          type: 'select',
          options: {
              items: [{
              code: '1',
              name: 'keep自有渠道'
            }]
          }
        },{
          key: 'shop',
          // label: '店铺:',
          type: 'select',
          options: {
              items: [{
              code: '1',
              name: 'keep自有渠道'
            }]
          }
        },{
          key: 'time',
          type: 'daterange',
          options: {
            attrs: {
              placeholder: '时间',
              // clearable: false
            }
          }
        }

        // {
        //   key: 'slot',
        //   slot: 'test'
        // }
      ]
    }
  },
  methods: {
    search() {
      console.log('api request')
    }
  }
}
</script>
