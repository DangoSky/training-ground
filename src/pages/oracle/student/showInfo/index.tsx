import React from 'react';
import { Button, Descriptions, Table } from 'antd';
import 'core-decorators';

const dataSource = [
  {
    key: '0',
    name: '离散数学',
    grade: 2,
    id: '001',
    teacher: '张三'
  }, {
    key: '1',
    name: '软件工程',
    grade: 2,
    id: '002',
    teacher: '李四'
  },  {
    key: '2',
    name: '计算机网络',
    grade: 2,
    id: '003',
    teacher: '王五'
  },  {
    key: '3',
    name: '操作系统',
    grade: 2,
    id: '004',
    teacher: '刘大'
  }, 
];

const columns = [
  {
    title: '课程号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '课程名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '任课教师',
    dataIndex: 'teacher',
    key: 'teacher',
  },
  {
    title: '学分',
    dataIndex: 'grade',
    key: 'grade',
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
          <Descriptions.Item label="姓名">夏侯瑾轩</Descriptions.Item>
          <Descriptions.Item label="学号">1706300099</Descriptions.Item>
          <Descriptions.Item label="性别">男</Descriptions.Item>
          <Descriptions.Item label="年龄">22</Descriptions.Item>
          <Descriptions.Item label="出生日期">1998.01.01</Descriptions.Item>
          <Descriptions.Item label="手机号">15212778859</Descriptions.Item>
          <Descriptions.Item label="已选课程">
           <Table dataSource={dataSource} columns={columns} pagination={false} />
          </Descriptions.Item>
        </Descriptions>
      </div>
    )
  }
}

export default Home;