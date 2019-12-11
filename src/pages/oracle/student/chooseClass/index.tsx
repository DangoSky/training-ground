import React from 'react';
import { Table, Button } from 'antd';
import 'core-decorators';

const dataSource = [
  {
    key: '0',
    name: '音乐鉴赏',
    grade: 2,
    id: '100',
    teacher: '王国维',
  }, {
    key: '1',
    name: '四书导读',
    grade: 1,
    id: '120',
    teacher: '张载',
  },  {
    key: '2',
    name: '书法',
    grade: 1,
    id: '105',
    teacher: '曾国藩',
  },
];

const columns = [
  {
    title: '课程号',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '课程名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '任课教师',
    dataIndex: 'teacher',
    key: 'teacher',
  }, {
    title: '学分',
    dataIndex: 'grade',
    key: 'grade',
  }, {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: () => <Button type="primary">选课</Button>,
  },
];


class ChooseClass extends React.Component {
  render() {
    return (
      <div>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </div>
    )
  }
}

export default ChooseClass;