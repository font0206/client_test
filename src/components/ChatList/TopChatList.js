
import React from 'react';
import { Row, Col, Button, Input } from 'antd'

import './ChatList.css';
import {
   SearchOutlined,UserAddOutlined,UsergroupAddOutlined
} from "@ant-design/icons";



export default function TopChatList() {
    return (

        <div className='chatlist__top'>
            <div className='chatlist__top-bao'>
            {/* <Avatar src={"https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"}/> */}

            <Row>
                {/* <Col className='menu' span={4}><MenuOutlined style={{fontSize:'150%'}} /></Col> */}
                <Col style={{paddingLeft:'15px'}} span={24}>
                    <Input style={{width:'70%'}} status="search" prefix={<SearchOutlined />} placeholder="search chat" />
                    <Button className='btn-tran' icon={<UserAddOutlined />}/>
                    <Button className='btn-tran' icon={<UsergroupAddOutlined />}/>
                </Col>
            </Row>

            
            </div>
        </div>

    );
}