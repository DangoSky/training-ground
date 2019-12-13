import React from 'react';
import { Table, Button } from 'antd';
import 'core-decorators';

const dataSource = [
  {
    key: '0',
    name: '诗词鉴赏',
    grade: 1,
    id: '001',
    teacher: '庞统',
  }, {
    key: '1',
    name: '篆刻',
    grade: 1,
    id: '002',
    teacher: '荀彧',
  },  {
    key: '2',
    name: '绿色建筑',
    grade: 2,
    id: '003',
    teacher: '诸葛亮',
  }, {
    key: '3',
    name: '西方哲学史',
    grade: 2,
    id: '004',
    teacher: '庞统',
  },
];

const columns = [
  {
    title: '课程号',
    dataIndex: 'id',
    key: 'id',
    width: 200,
  }, {
    title: '课程名',
    dataIndex: 'name',
    key: 'name',
    width: 200,
  }, {
    title: '任课教师',
    dataIndex: 'teacher',
    key: 'teacher',
    width: 200,
  }, {
    title: '学分',
    dataIndex: 'grade',
    key: 'grade',
    width: 200,
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