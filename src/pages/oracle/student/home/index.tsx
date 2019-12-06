import React from 'react';
import { Button, Avatar } from 'antd';
import  './style.css';


class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="student-header">
          <h2>学生信息页面</h2>
          <Avatar size="small" icon="user" />
          <span>user</span>
        </header>
        <Button type="primary">选课</Button>
        <Button type="primary">修改信息</Button>
        <Button type="primary">查询信息</Button>
      </div>
    )
  }
}

export default Home;