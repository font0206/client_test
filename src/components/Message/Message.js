
import { Avatar, Button } from 'antd';
import React from 'react';
import {
  DoubleRightOutlined, RetweetOutlined
} from "@ant-design/icons";
import '../Message/index.css'




export default function Message({ text, displayName, time, avatar, own }) {
  return (

    <div className={own ? 'message__bao own' : 'message__bao'}>
      <div style={{ margin: '15px 0px 15px 15px' }}>
        <Avatar size={35} src={"https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"} />
      </div>
      <div className={own ? 'chat-bao own' : 'chat-bao'} style={{ paddingTop: '10px' }}>
        <div className={own ? 'chat-im'  : 'chat-them'} style={{ margin: '15px', paddingLeft: '15px', paddingTop: '10px', paddingRight: '10px' }}>
          
            <h5>name user</h5>
            <p className='info-chat'>chatchatchatchatchacaxxxxxxzbbbbaaaaahsssssssssssatchaatchattchatchatchatctchatchatchatchachatctchatchatchachatctchatchatchachatc

            </p>
            <p style={{ fontSize: '10px' }}>time</p>
          

        </div>

        <div className='rep-chat'>
          <Button className='btn-tran' icon={<DoubleRightOutlined />} />
          <Button className='btn-tran' icon={<RetweetOutlined />} />
        </div>
      </div>

    </div>

  );
}