import echarts from 'echarts'

export default function (id, charts, dataShadow, yMax, data, dataAxis, option) {
  charts = echarts.init(document.getElementById(id))
  for (let i = 0; i < data.length; i++) {
    dataShadow.push(yMax)
  }
  option = {
    title: {
      text: '名称',
      subtext: 'test'
    },
    xAxis: {
      data: dataAxis,
      axisLabel: {
        inside: false,
        textStyle: {
          color: '#ff7f90'
        }
      },
      axisTick: {
        show: true
      },
      axisLine: {
        show: true
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#999'
        }
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      { // For shadow
        type: 'bar',
        itemStyle: {
          normal: {color: 'rgba(0,0,0,0.05)'}
        },
        barGap: '-100%',
        barCategoryGap: '40%',
        data: dataShadow,
        animation: false
      },
      {
        type: 'bar',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#83bff6'},
                {offset: 0.5, color: '#188df0'},
                {offset: 1, color: '#188df0'}
              ]
            )
          },
          emphasis: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#2378f7'},
                {offset: 0.7, color: '#2378f7'},
                {offset: 1, color: '#83bff6'}
              ]
            )
          }
        },
        data: data
      }
    ]
  }
  charts.setOption(option)
  let myChart = echarts.init(document.getElementById(id))

  let zoomSize = 6
  myChart.on('click', function (params) {
    myChart.dispatchAction({
      type: 'dataZoom',
      startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    })
  })
}
