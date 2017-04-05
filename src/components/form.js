import React from 'react'
import { Carousel } from 'antd';
const Mywork =[{
    name:'项目一',
    projectDescription:'项目描述',
    responsibilityDescription:'职责描述'
},{
    name:'项目二',
    projectDescription:'项目描述',
    responsibilityDescription:'职责描述'
}]


class myForm extends React.Component {
    

    render() {
        return (
            <Carousel effect="fade">
    
    
    {Mywork.map(function(index){
        return <div><h3>{index.name}</h3></div>
            
            
    })}
    
    
    
  </Carousel>

        )
    }
}

export default myForm

