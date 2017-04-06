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
    legend: [{
          formatter: function (name) {
        return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
    },
    tooltip: {
        show: true
    },
          selectedMode: 'false',
          bottom: 20,
          data: ['熟练掌握', '基本应用', '开发工具', '常用类库']
      }],
       title:{
        text: "技能关系图",
        subtext: "",
        top: "top",
        left: "center"
    },
    
      
     
      
      animationDuration: 3000,
      animationEasingUpdate: 'quinticInOut',
      series: [{
          name: '',
          type: 'graph',
          layout: 'force',

          force: {
              repulsion: 200
          },
          data: [{
              "name": "熟练掌握",
              "category": "熟练掌握",
              "symbolSize": 60,
              "draggable": "true",
              "value": 27

          }, {
              "name": "基本应用",
              "symbolSize": 60,
              "category": "基本应用",
              "draggable": "true",
              "value": 1
          },{
              "name": "开发工具",
              "symbolSize": 60,
               "category": "开发工具",
              "draggable": "true",
              "value": 1
          },{
              "name": "常用类库",
              "category": "常用类库",
              "symbolSize": 60,
              "draggable": "true",
              "value": 1
          },{
              "name": "HTML5",
              "category": "熟练掌握",
              "symbolSize": 10,
              "draggable": "true",
              
          },{
              "name": "CSS3",
              "category": "熟练掌握",
              "symbolSize": 10,
              "draggable": "true",
              
          },{
              "name": "JavaScript",
              "category": "熟练掌握",
              "symbolSize": 10,
              "draggable": "true",
              
          },{
              "name": "photoShop",
               "category": "熟练掌握",
              "symbolSize": 10,
              "draggable": "true",
              
          },{
              "name": "React",
               "category": "基本应用",
              "symbolSize": 10,
              "draggable": "true",
              
          },{
              "name": "Es6",
               "category": "基本应用",
              "symbolSize": 10,
              "draggable": "true",
             
          },{
              "name": "Webpack",
               "category": "基本应用",
              "symbolSize": 10,
              "draggable": "true",
              
          },{
              "name": "nodeJs",
               "category": "基本应用",
              "symbolSize": 10,
              "draggable": "true",
              
          },{
              "name": "Git",
               "category": "开发工具",
              "symbolSize": 10,
              "draggable": "true",
              
          },{
              "name": "SVN",
               "category": "开发工具",
              "symbolSize": 10,
              "draggable": "true",
              
          },{
              "name": "Fiddler",
               "category": "开发工具",
              "symbolSize": 10,
              "draggable": "true",
              
          },{
              "name": "VSCode",
               "category": "开发工具",
              "symbolSize": 10,
              "draggable": "true",
              
          },{
              "name": "WebStorm",
               "category": "开发工具",
              "symbolSize": 10,
              "draggable": "true",
              
          },{
              "name": "Chrome",
               "category": "开发工具",
              "symbolSize": 10,
              "draggable": "true",
              
          },{
              "name": "Bootstrap",
               "category": "常用类库",
              "symbolSize": 10,
              "draggable": "true",
              
          },{
              "name": "jQuery",
               "category": "常用类库",
              "symbolSize": 10,
              "draggable": "true",
              
          },{
              "name": "Zepto",
               "category": "常用类库",
              "symbolSize": 10,
              "draggable": "true",
              
          },{
              "name": "Echarts",
               "category": "常用类库",
              "symbolSize": 10,
              "draggable": "true",
              
          }],
          links: [{
              "source": "HTML5",
              "target": "熟练掌握"
          },  {
              "source": "CSS3",
              "target": "熟练掌握"
          }, {
              "source": "JavaScript",
              "target": "熟练掌握"
          },{
              "source": "React",
              "target": "基本应用"
          },{
              "source": "Es6",
              "target": "基本应用"
          },{
              "source": "Webpack",
              "target": "基本应用"
          },{
              "source": "nodeJs",
              "target": "基本应用"
          },{
              "source": "Git",
              "target": "开发工具"
          },{
              "source": "SVN",
              "target": "开发工具"
          },{
              "source": "Fiddler",
              "target": "开发工具"
          },{
              "source": "VSCode",
              "target": "开发工具"
          },{
              "source": "WebStorm",
              "target": "开发工具"
          },{
              "source": "Chrome",
              "target": "开发工具"
          },{
              "source": "Bootstrap",
              "target": "常用类库"
          },{
              "source": "jQuery",
              "target": "常用类库"
          },{
              "source": "Zepto",
              "target": "常用类库"
          },{
              "source": "Echarts",
              "target": "常用类库"
          },{
              "source": "photoShop",
              "target": "熟练掌握"
          }],
          categories:[{
               'name': '熟练掌握'
          }, {
              'name': '基本应用'
          }, {
              'name': '开发工具'
          },{
              'name':'常用类库'
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
            <div className="chartCount">
                <div id="container" className="chart-box" style={{width:'700px',height:'700px'}}></div>
                <ul className="chartRight">
                <li>
                    <span>熟练掌握：</span><span>htmhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmll</span>
                </li>
                <li>
                    <span>基本应用：</span><span>html</span>
                </li>
                <li>
                    <span>开发工具：</span><span>html</span>
                </li>
                <li>
                    <span>常用类库：</span><span>html</span>
                </li>
            </ul>
            </div>
        )
    }
}