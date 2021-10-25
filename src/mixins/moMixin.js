import { prefixCls } from "../config";
import MoSlot from "../components/slot";

export default {
  props: {
    root: {
      type: Object,
      default() {
        return this;
      },
    },
  },
  components: {
    MoSlot,
  },
  data() {
    return {
      prefixCls,
    };
  },
  computed: {
    rootCom() {
      console.log('dddddddddd')
      return this.root || this;
    },
  },
};
