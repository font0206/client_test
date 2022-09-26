
import React from 'react';
import {Row, Col} from 'antd'

import ChatList from '../ChatList/ChatList.js';
import ChatWindow from '../ChatWindow/ChatWindow.js';
import SlideMenuLeft from '../SildeMenuLeft/index.js';
import '../SildeMenuLeft/index.css'
export default function ChatRoom() {
  return (
        // <div style={{height:'100vh'}}>
            <Row style={{height:'100vh',minHeight:'90vh'}}>
            <Col style={{height:'100%'}} span={1}> <SlideMenuLeft/></Col>
            <Col style={{height:'100%'}} span={6} color={"red"}>
              <ChatList />
            </Col>
            <Col style={{height:'100%'}} span={17}>
              <ChatWindow/>
            </Col>

        </Row>
      
        
    
  );
}