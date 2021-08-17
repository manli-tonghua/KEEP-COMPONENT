import { prefixCls } from '../config'
import MoSlot from '../components/slot'

export default {
  props: {
    root: {
      type: Object
    }
  },
  components: {
    MoSlot
  },
  data () {
    return {
      prefixCls
    }
  }
}