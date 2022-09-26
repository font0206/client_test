
import { Row, Col } from 'antd';
import React from 'react';
import Message from '../Message/Message';
import ChatWindowBot from './ChatWinDowBot';
import ChatWindowTop from './ChatWindowTop';




export default function ChatWindow() {
  return (
    <div style={{ height: '100vh' }}>
      <Row style={{ height: '100%' }}>
        <Col style={{ height: '10%',border:'2px solid #F5F5F5' }} span={24}>
          <ChatWindowTop />
        </Col>

        <Col style={{ height: '75%', maxHeight: '75%', overflow: 'auto' }} span={24}>

          <Message />
          <Message />
          <Message own={true} />
          <Message />
          <Message own={true} />


        </Col>
        <Col style={{ height: '15%' ,border:'2px solid #F5F5F5'}} span={24}>
          <ChatWindowBot />
        </Col>
      </Row>
    </div>


  );
}