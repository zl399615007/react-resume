import React from 'react'
import { Carousel } from 'antd';
const Mywork =[{
    name:'无锡海岸城、华宇集团微信公众号',
    projectDescription:'该项目包括后台系统和微信公众号，实现了商场的大部分营销功能，包括登录、签到、商城、积分等。项目兼容苹果和安卓系统，适配大部分主流机型',
    responsibilityDescription:'主要负责项目组微信端页面的制作，前端功能实现，数据交互、手机兼容问题等。',
    summary:'总结'
},{
    name:'无锡海岸城BI系统',
    projectDescription:'BI系统主要使用ajax向后台请求数据，然后用echarts库完成数据展示，使用的图表类型有：实时热力图、实时折线图、饼图、柱状图。',
    responsibilityDescription:'负责BI系统前端页面展示',
    summary:'总结'
},{
    name:'爱卡汽车-用车服务',
    projectDescription:'该项目是爱卡汽车网站的主要功能模块之一，主要内容是给用户提供汽车使用方面的常识。使用git进行多人开发，用gulp打包压缩文件，使用jquery实现页面动态效果，保证页面在ie8的兼容性。',
    responsibilityDescription:'与产品和后台人员协同合作，进行页面开发，包括静态样式和动态js效果，数据交互，完成图形图表制作，实现数据可视化等。',
    summary:'总结'
}]


class myForm extends React.Component {
    

    render() {
        return (
            <Carousel effect="fade">
            {Mywork.map(function(index){
                return <div>
                    <ul className="projectList">
                        <li>
                            <span>项目名称：</span><span>{index.name}</span>
                        </li>
                        <li>
                            <span>项目描述：</span><span>{index.projectDescription}</span>
                        </li>
                        <li>
                            <span>项目职责：</span><span>{index.responsibilityDescription}</span>
                        </li>
                        <li>
                            <span>项目总结：</span><span>{index.summary}</span>
                        </li>
                    </ul>
                </div>
    })}
    
    
    
  </Carousel>

        )
    }
}

export default myForm

