import React from "react";
import { Card } from 'antd';
export default function ReactCard({title}) {
  return (
    <div>
      <Card
        
        style={{ width: 300 }}
      >
        {/* <p>Card content</p>
        <p>Card content</p> */}
        <p>No {title} available for you</p>
      </Card>
    </div>
  );
}
