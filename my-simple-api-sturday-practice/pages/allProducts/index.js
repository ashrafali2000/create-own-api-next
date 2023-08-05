import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

export default function AllProducts({Ptitle,img}){
    <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={img}
      />
    }
    >
      <p>{Ptitle}</p>
   
  </Card>

     
}