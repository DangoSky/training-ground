import React from 'react';
import { Button, Modal, Table, Input, Form, Icon } from 'antd';
import 'core-decorators';
import { autobind } from 'core-decorators';
import { FormComponentProps } from 'antd/es/form';
import './style.less';

interface Props extends FormComponentProps {}

interface State {
  visible: boolean,
  modalAction: string,
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const dataSource = [
  {
    key: '0',
    id: '1706300001',
    name: '刘备',
    sex: '男',
    age: '33',
    birthday: '1995-02-23',
    phone: '15626441778',
    grade: 2,
    password: '111'
  },
  {
    key: '0',
    id: '1706300002',
    name: '关羽',
    sex: '男',
    age: '32',
    birthday: '1995-06-08',
    phone: '13467995218',
    grade: 2,
    password: '002'
  },
  {
    key: '0',
    id: '1706300003',
    name: '张飞',
    sex: '男',
    age: '30',
    birthday: '1995-10-25',
    phone: '18092778441',
    grade: 1,
    password: '003'
  },
  {
    key: '0',
    id: '1706300004',
    name: '赵云',
    sex: '男',
    age: '28',
    birthday: '1993-07-16',
    phone: '15628441778',
    grade: 0,
    password: '004'
  },
];

// @autobind
class ManageStudent extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
      modalAction: '',
    }
  }

  private columns = [
    {
      title: '学号',
      dataIndex: 'id',
      key: 'id',
      editable: true,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      editable: true,
    }, {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      editable: true,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      editable: true,
    }, {
      title: '出生日期',
      dataIndex: 'birthday',
      key: 'birthday',
      editable: true,
    }, {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
    },  {
      title: '选修课程总学分',
      dataIndex: 'grade',
      key: 'grade',
    }, {
      title: '密码',
      dataIndex: 'password',
      key: 'password',
      editable: true,
    }, {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <>
          <Button type="primary" onClick={() => this.setState({visible: true, modalAction: '修改学生信息'})}>修改</Button>
          <Button type="danger">删除</Button>
        </>
      )
    }
  ];
  
  
  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Table dataSource={dataSource} columns={this.columns} pagination={false} />

        <Modal
          title={this.state.modalAction}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form {...formItemLayout}>
            <Form.Item label="姓名">
              {(<Input />)}
            </Form.Item>
            <Form.Item label="学号">
              {(<Input />)}
            </Form.Item>
            <Form.Item label="性别">
              {(<Input />)}
            </Form.Item>
            <Form.Item label="年龄">
              {(<Input />)}
            </Form.Item>
            <Form.Item label="出生日期">
              {(<Input />)}
            </Form.Item>
            <Form.Item label="手机号">
              {(<Input />)}
            </Form.Item>
            <Form.Item label="密码">
              {(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
        
        {/* <div className="create-student" onClick={() => this.setState({visible: true, modalAction: '添加学生'})}>
          <Icon type="plus" style={{ fontSize: '30px', color: '#08c' }} />
        </div> */}
      </div>
    )
  }
}

export default Form.create<Props>({})(ManageStudent);
