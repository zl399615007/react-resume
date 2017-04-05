import React from 'react'
import echarts from 'ECharts'

export default class myChart extends React.Component {
    randerChart = () => {
        var charts=echarts.init(document.getElementById('container'));
        var option = {
     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
       title:{
        text: "个人技能分析",
        subtext: "技能关系",
        top: "top",
        left: "center"
    },
      tooltip: {},
     
      
      animationDuration: 3000,
      animationEasingUpdate: 'quinticInOut',
      series: [{
          name: '技术栈',
          type: 'graph',
          layout: 'force',

          force: {
              repulsion: 50
          },
          data: [{
              "name": "HTML",
              "category": "HTML",
              "symbolSize": 50,
              "draggable": "true",
              "value": 27

          }, {
              "name": "CSS",
              "symbolSize": 50,
              "category": "CSS",
              "draggable": "true",
              "value": 1
          },{
              "name": "JavaScript",
              "symbolSize": 50,
               "category": "JavaScript",
              "draggable": "true",
              "value": 1
          },{
              "name": "标签语义化",
              "category": "HTML",
              "symbolSize": 10,
              "draggable": "true",
              "value": 1
          },{
              "name": "html5",
              "category": "HTML",
              "symbolSize": 3,
              "draggable": "true",
              "value": 1
          },{
              "name": "flex布局",
              "category": "CSS",
              "symbolSize": 3,
              "draggable": "true",
              "value": 1
          },{
              "name": "css3",
              "category": "CSS",
              "symbolSize": 3,
              "draggable": "true",
              "value": 1
          },{
              "name": "jQuery",
               "category": "JavaScript",
              "symbolSize": 3,
              "draggable": "true",
              "value": 1
          },{
              "name": "react",
               "category": "JavaScript",
              "symbolSize": 3,
              "draggable": "true",
              "value": 1
          }],
          links: [{
              "source": "标签语义化",
              "target": "HTML"
          },  {
              "source": "CSS",
              "target": "css3"
          }, {
              "source": "jQuery",
              "target": "JavaScript"
          },{
              "source": "react",
              "target": "JavaScript"
          },{
              "source": "html5",
              "target": "HTML"
          },{
              "source": "CSS",
              "target": "flex布局"
          }],
          categories:[{
               'name': 'JavaScript'
          }, {
              'name': 'HTML'
          }, {
              'name': 'CSS'
          }],
          focusNodeAdjacency: true,
          roam: true,
          label: {
              normal: {

                  show: true,
                  position: 'top',

              }
          },
          lineStyle: {
              normal: {
                  color: 'source',
                  curveness: 0,
                  type: "solid"
              }
          }
      }]
  };
  charts.setOption(option);
    }

    componentDidMount() {
        this.randerChart()
    }

    render() {
        return (
            <div id="container" className="chart-box">

            </div>
        )
    }
}