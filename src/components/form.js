import React from 'react'
import { Carousel,Tag} from 'antd'
const Mywork =[{
    name:'在线个人简历',
    projectDescription:'基于react及antd的单页面个人简历，使用react-router管理路由，webpack打包文件,运用Es6语法开发,通过node的npm管理包文件',
    responsibilityDescription:'',
    summary:'能基本应用React开发项目，对commonjs规范和Es6特性有一定了解'
},{
    name:'无锡海岸城、华宇集团微信公众号',
    projectDescription:'该项目包括后台系统和微信公众号，实现了商场的大部分营销功能，包括登录、签到、商城、积分等。项目兼容苹果和安卓系统，适配大部分主流机型。',
    responsibilityDescription:'主要负责项目组微信端页面的制作，利用HTML+CSS完成页面适配和兼容，利用Zepto插件实现抽红包、刮刮乐、大转盘等前端功能，以及部分列表数据展示',
    summary:'通过微信公众号开发对移动端项目有比较深的了解，特别是页面性能、设备兼容问题。通过动态初始化iscroll来解决一个页面多次初始化iscroll失效的问题。了解asp.net的MVC开发模式，熟悉Razor语法'
},{
    name:'无锡海岸城BI系统',
    projectDescription:'BI系统主要用于向客户展示数据，帮助客户对各种信息汇总分析。使用的主要技术是通过ajax向后台请求数据，然后用echarts库完成数据展示，使用的图表类型有：实时热力图、实时折线图、饼图、柱状图。',
    responsibilityDescription:'负责图形图表制作，数据动态展示。',
    summary:'通过大量使用echarts对前后台数据交互和页面可维护性有一定了解，利用延迟按需加载的方式解决页面加载速度慢的问题'
},{
    name:'爱卡汽车-用车服务',
    projectDescription:'该项目是爱卡汽车网站的主要功能模块之一，主要内容是给用户提供汽车使用方面的常识。使用git进行多人开发，用gulp打包压缩文件，使用jquery实现页面动态效果，保证页面在ie8的兼容性。',
    responsibilityDescription:'与产品和后台人员协同合作，进行页面开发，包括静态样式和动态js效果，数据交互，完成图形图表制作，实现数据可视化等。',
    summary:'通过多人协同开发对代码命名规范，代码管理和代码可维护性有一定了解，对PC端各个浏览器的兼容特别是IE的兼容性问题有一定了解。'
}]


class myForm extends React.Component {
    

    render() {
        return (
            <Carousel effect="fade" autoplay>
            {Mywork.map(function(index){
                return <div>
                    <ul className="projectList">
                        <li>
                            <Tag>项目名称</Tag><span>{index.name}</span>
                        </li>
                        <li>
                            <Tag>项目描述</Tag><span>{index.projectDescription}</span>
                        </li>
                        <li>
                            <Tag>项目职责</Tag><span>{index.responsibilityDescription}</span>
                        </li>
                        <li>
                            <Tag>项目总结</Tag><span>{index.summary}</span>
                        </li>
                    </ul>
                </div>
    })}
    
    
    
  </Carousel>

        )
    }
}

export default myForm

