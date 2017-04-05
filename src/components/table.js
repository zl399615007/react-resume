import React from 'react'
import {Table, Icon} from 'antd'

export default class myTable extends React.Component {


    render() {
        const columns = [{
            title: '姓名',
            width: '20%',
            dataIndex: 'name'
        }, {
            title: '年龄',
            width: '20%',
            dataIndex: 'age',
        }, {
            title: '学历',
            width: '20%',
            dataIndex: 'education'
        }, {
            title: '个人博客',
            width: '20%',
            dataIndex: 'blog',
            render(text) {
                return <a href={text} target="_blank">博客</a>
            }
        }, {
            title: '目前状态',
            width: '20%',
            dataIndex: 'nowstate'
        }];
        const data = [{
            name:'郑龙',
            age:25,
            education:'本科',
            blog:'http://www.zlongblog.online:3000',
            nowstate:'就职于软通动力'

        }]

        

        

        

        return (
            <Table columns={columns} dataSource={data} bordered  pagination={false} />

        )
    }
}
