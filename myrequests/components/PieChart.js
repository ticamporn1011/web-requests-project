import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: {
    piechartdata: {
      type: Object,
      default: null
    },
    piechartoptions: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.piechartdata, this.piechartoptions)
  }
}