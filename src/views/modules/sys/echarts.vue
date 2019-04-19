<template>
  <div class="mod-demo-echarts">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card>
          <div id="J_chartLineBox" class="chart-box"></div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card>
          <div id="J_chartBarBox" class="chart-box"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div id="J_chartPieBox" class="chart-box"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div id="J_chartScatterBox" class="chart-box"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  // import echarts from 'echarts'
  import cs from '../../../data/index'

  export default {
    data () {
      return {
        chartLine: null,
        chartBar: null,
        chartPie: null,
        chartScatter: null,
        captchaPath: '',
        charts: '',
        dataAxis: ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'],
        data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220],
        yMax: 500,
        dataShadow: [],
        option: undefined,
        ordinaryDate: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他'],
        ordinaryXDate: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    },
    mounted () {
      this.initChartLine()
      this.initChartBar()
      this.initChartPie()
      // this.initChartScatter()
    },
    activated () {
      // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
      if (this.chartLine) {
        this.chartLine.resize()
      }
      if (this.chartBar) {
        this.chartBar.resize()
      }
      if (this.chartPie) {
        this.chartPie.resize()
      }
      if (this.chartScatter) {
        this.chartScatter.resize()
      }
    },
    methods: {
      // 柱状图
      initChartLine () {
        cs.chartBar('J_chartLineBox', this.charts, this.dataShadow, this.yMax, this.data, this.dataAxis, this.option)
      },
      // 柱状图(bar),折线图(line)
      initChartBar () {
        const m = []
        m[0] = {name: '直接访问', type: 'bar', data: [320, 332, 301, 334, 390, 330, 320]}
        m[1] = {name: '邮件营销', type: 'bar', data: [120, 132, 101, 134, 90, 230, 210]}
        m[2] = {name: '联盟广告', type: 'bar', data: [220, 182, 191, 234, 290, 330, 310]}
        m[3] = {name: '视频广告', type: 'bar', data: [150, 232, 201, 154, 190, 330, 410]}
        m[4] = {name: '百度', type: 'bar', data: [620, 732, 701, 734, 1090, 1130, 1120]}
        m[5] = {name: '谷歌', type: 'bar', data: [120, 132, 101, 134, 290, 230, 220]}
        const t = new Map()
        t.set('id', 'J_chartBarBox')
        t.set('charts', this.charts)
        t.set('ordinaryDate', this.ordinaryDate)
        t.set('ordinaryXDate', this.ordinaryXDate)
        t.set('option', this.option)
        t.set('type', 'bar')
        cs.ordinaryChartBar(t, m)
      },
      // 饼状图
      initChartPie () {
        const t = new Map()
        t.set('id', 'J_chartPieBox')
        t.set('charts', this.charts)
        t.set('type', 'pie')
        cs.ordinaryChartBar(t)
      }
    }
  }
</script>

<style lang="scss">
  .mod-demo-echarts {
    > .el-alert {
      margin-bottom: 10px;
    }
    > .el-row {
      margin-top: -10px;
      margin-bottom: -10px;
      .el-col {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    .chart-box {
      min-height: 400px;
    }
  }
</style>
