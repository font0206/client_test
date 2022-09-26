
import { Row, Col, Avatar, Button } from 'antd';
import React from 'react';
import {
  UserOutlined, UsergroupAddOutlined, SplitCellsOutlined, EditOutlined,VideoCameraOutlined
} from "@ant-design/icons";
import '../ChatWindow/index.css'

export default function ChatWindowTop() {
  return (

    <div className='chat-window-top__bao'>
      <div style={{ padding: '15px 15px 15px 0px' }}>
        <Row type='flex' align='middle'>
          <Col type='flex' align='middle' span={2}>
            <div>
              <Avatar.Group maxCount={2} size='small'>
                <Avatar size={25} src={"https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"} />
                <Avatar size={25} src={"https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"} />
                <Avatar size={25} src={"https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"} />
                <Avatar size={25} src={"https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"} />
              </Avatar.Group>
            </div>


          </Col>
          <Col span={12}>
            <div className='name-chat__bao' style={{ display: 'flex', alignItems: 'center' }}>
              <h3 style={{ marginBottom: '0px', marginRight: '5px' }}>Name chat</h3>
              <div style={{ position: 'relative' }}>
                <Button className='btn-edit-name-chat' style={{borderWidth:'0px'}} size='small' icon={<EditOutlined />} />
              </div>

            </div>

            <div>
              <UserOutlined />
              <a>member</a>
            </div>
          </Col>
          <Col span={10}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ paddingRight: '10px' }}>
                <Button className='btn-tran' icon={<UsergroupAddOutlined />} />
              </div>
              <div style={{ paddingRight: '10px' }}>
                <Button className='btn-tran' icon={<VideoCameraOutlined />} />

              </div>
              <div style={{ paddingRight: '10px' }}>
                <Button className='btn-tran btn-infochat' icon={<SplitCellsOutlined />} />

              </div>

            </div>

          </Col>
        </Row>
      </div>


    </div>

  );
}