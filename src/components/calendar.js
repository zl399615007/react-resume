import React from 'react'
import {Icon} from 'antd'


export default class myCalendar extends React.Component {
   
    render() {
        return (
            <div className="callMe">
            <div><img src='src/assets/images/MetroUI_Comodo_Dragon.png' width="50" id="logo"/></div>
            <div>
                <div><Icon type="phone"/><span>18710212139</span></div>
                <div><Icon type="mail"/><span>13545834757@163.com</span></div>
                <div><Icon type="github"/><span>github.com/zl399615007</span></div>
            </div>
            </div>
        )
    }
}