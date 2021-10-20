export default {
  name: 'moSlot',
  functional: true,
  props: {
    name: String,
    root: Object,
    data: Object
  },
  render: (h, ctx) => {
    if(ctx.props.name==='query_btns'){
      console.log(ctx,444)
    }
    if (ctx.props.root && ctx.props.root.$scopedSlots[ctx.props.name]) {
      return ctx.props.root.$scopedSlots[ctx.props.name](ctx.props.data)
    } else if (ctx.parent.$scopedSlots[ctx.props.name]) {
      return ctx.parent.$scopedSlots[ctx.props.name](ctx.props.data)
    } else {
      return ctx.children
    }
  }
}
