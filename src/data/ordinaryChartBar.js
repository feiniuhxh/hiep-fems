import echarts from 'echarts'

/**
 * 折现type('line'),柱状('bar')
 * @param id
 * @param charts
 * @param data
 * @param XData
 * @param option
 * @param m
 */
let test = {
  // 订阅集合
  subscribes: [],
  chartBzrLine: function (id, charts, data, XData, option, m) {
    charts = echarts.init(document.getElementById(id))
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      legend: {
        data: data
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: XData
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: seriesData(m)
    }
    charts = echarts.init(document.getElementById(id))
    charts.setOption(option)
    window.addEventListener('resize', () => {
      charts.resize()
    })
  },
  chartBzrPie: function (id, charts, data, XData, option, m) {
    charts = echarts.init(document.getElementById(id))
    option = {
      title: {
        text: 'text',
        subtext: 'subtext',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 234, name: '联盟广告'},
            {value: 135, name: '视频广告'},
            {value: 1548, name: '搜索引擎'}
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    charts = echarts.init(document.getElementById(id))
    charts.setOption(option)
    window.addEventListener('resize', () => {
      charts.resize()
    })
  }
}
export default function (t, m) {
  console.log(t)
  if (t.get('type') === 'bar') {
    test.chartBzrLine(t.get('id'), t.get('charts'), t.get('ordinaryDate'), t.get('ordinaryXDate'), t.get('option'), m)
  } else if (t.get('type') === 'pie') {
    test.chartBzrPie(t.get('id'), t.get('charts'), t.get('ordinaryDate'), t.get('ordinaryXDate'), t.get('option'), m)
  }
}

function seriesData (m) {
  let item = []
  m.forEach((data, index, array) => {
    item.push({name: data.name, type: data.type, data: data.data})
  })
  // item = []
  return item
}
