import React from 'react';
import { Button, Modal, Table, Input, Form, Icon } from 'antd';
import 'core-decorators';
import { autobind } from 'core-decorators';
import { FormComponentProps } from 'antd/es/form';
import './style.less';

interface Props extends FormComponentProps {}

interface State {
  visible: boolean
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
    id: '0000000001',
    name: '王国维',
    wage: '20000',
    job: '辅导员',
    password: '0001'
  },{
    key: '0',
    id: '0000000002',
    name: '张载',
    wage: '16000',
    job: '讲师',
    password: '0002'
  }, {
    key: '0',
    id: '0000000003',
    name: '曾国藩',
    wage: '18000',
    job: '讲师',
    password: '0003'
  },  
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
class ManageTeacher extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
      modalAction: ''
    }
  }
  private columns = [
    {
      title: '工号',
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
      title: '职称',
      dataIndex: 'job',
      key: 'job',
      editable: true,
    },
    {
      title: '工资',
      dataIndex: 'wage',
      key: 'wage',
      editable: true,
    }, {
      title: '密码',
      dataIndex: 'password',
      key: 'password',
      editable: true,
    }, 
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <>
          <Button type="primary" onClick={() => this.setState({visible: true, modalAction: '修改教师信息'})}>修改</Button>
          <Button type="danger">删除</Button>
        </>
      )
    },
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
            <Form.Item label="工号">
              {(<Input />)}
            </Form.Item>
            <Form.Item label="姓名">
              {(<Input />)}
            </Form.Item>
            <Form.Item label="职称">
              {(<Input />)}
            </Form.Item>
            <Form.Item label="工资">
              {(<Input />)}
            </Form.Item>
            <Form.Item label="密码">
              {(<Input />)}
            </Form.Item>
          </Form>
        </Modal>

        <div className="create-student" onClick={() => this.setState({visible: true, modalAction: '新增教师'})}>
          <Icon type="plus" style={{ fontSize: '30px', color: '#08c' }} />
        </div>
      </div>
    )
  }
}

export default Form.create<Props>({})(ManageTeacher);
