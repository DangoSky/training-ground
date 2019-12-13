import React from 'react';
import { Button, Descriptions, Table } from 'antd';
import 'core-decorators';

const dataSource = [
  {
    key: '0',
    name: '西方哲学史',
    grade: 2,
    id: '004',
    teacher: '庞统'
  },
  //  {
  //   key: '1',
  //   name: '软件工程',
  //   grade: 2,
  //   id: '002',
  //   teacher: '张载'
  // },  
  // {
  //   key: '2',
  //   name: '计算机网络',
  //   grade: 2,
  //   id: '003',
  //   teacher: '王五'
  // },  {
  //   key: '3',
  //   name: '操作系统',
  //   grade: 2,
  //   id: '004',
  //   teacher: '刘大'
  // }, 
];

const columns = [
  {
    title: '课程号',
    dataIndex: 'id',
    key: 'id',
    width: 150,
  },
  {
    title: '课程名',
    dataIndex: 'name',
    key: 'name',
    width: 150,
  }, {
    title: '任课教师',
    dataIndex: 'teacher',
    key: 'teacher',
    width: 150,
  },
  {
    title: '学分',
    dataIndex: 'grade',
    key: 'grade',
    width: 150,
  }, {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: () => <Button type="danger">退选</Button>,
  },
];

class Home extends React.Component {
  render() {
    return (
      <div>
        <Descriptions bordered>
          <Descriptions.Item label="姓名">刘备</Descriptions.Item>
          <Descriptions.Item label="学号">1706300001</Descriptions.Item>
          <Descriptions.Item label="性别">男</Descriptions.Item>
          <Descriptions.Item label="年龄">33</Descriptions.Item>
          <Descriptions.Item label="出生日期">1995-02-23</Descriptions.Item>
          <Descriptions.Item label="手机号">14698224998</Descriptions.Item>
          {/* <Descriptions.Item label="手机号">15829448627</Descriptions.Item> */}
          <Descriptions.Item label="已选课程">
           <Table dataSource={dataSource} columns={columns} pagination={false} />
          </Descriptions.Item>
        </Descriptions>
      </div>
    )
  }
}

export default Home;