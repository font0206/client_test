
import React from 'react';
import {Row, Col, Avatar} from 'antd'




export default function CenterChatList() {

  return (
    <div className='ItemUser__bao'>
        <div className='ItemUser'>
            <Row type="flex" align="middle" style={{ height:'80px'}}>
                <Col type="flex" align='middle' span={6}>
                    <Avatar size={60} src={"https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"}/>
                </Col>
                <Col style={{paddingLeft:'10px'}} span={18}>
                    <div style={{display:'flex' , justifyContent:'space-between'}}>
                        <h4 style={{textAlign:'left'}}>Name User connect</h4>
                        <p>time</p>
                    </div>
                    <p>tin nhan gan nhat</p>
                </Col>
            </Row>
        </div>
    </div>
        
      
  );
}