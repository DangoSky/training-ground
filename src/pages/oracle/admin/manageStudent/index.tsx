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
    id: '1706300099',
    name: '夏侯瑾轩	',
    sex: '男',
    age: '21',
    birthday: '1998.09.14',
    phone: '15626441778',
    grade: 4,
    password: '000000'
  },
  // {
  //   key: '1',
  //   id: '1706300100',
  //   name: '龙溟',
  //   sex: '男',
  //   age: '28',
  //   birthday: '1996.07.16',
  //   phone: '15824551779',
  //   password: '0100',
  //   grade: 4
  // },
  // {
  //   key: '2',
  //   id: '1706300101',
  //   name: '姜承',
  //   sex: '男',
  //   age: '26',
  //   birthday: '1998.02.07',
  //   phone: '15416958376',
  //   password: '0101',
  //   grade: 2
  // }, 
  // {
  //   key: '',
  //   id: '',
  //   name: '',
  //   sex: '',
  //   age: '',
  //   birthday: '',
  //   phone: '',
  //   password: ''
  // }, 
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
        
        <div className="create-student" onClick={() => this.setState({visible: true, modalAction: '添加学生'})}>
          <Icon type="plus" style={{ fontSize: '30px', color: '#08c' }} />
        </div>
      </div>
    )
  }
}

export default Form.create<Props>({})(ManageStudent);
