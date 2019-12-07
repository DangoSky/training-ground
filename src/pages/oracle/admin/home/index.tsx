import React from 'react';
import { Form, Menu, Input, Modal } from 'antd';
import 'core-decorators';
import './style.less';
import ManageStudent from '../manageStudent';
import ManageTeacher from '../manageTeacher';


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


interface State {
  current: string,
  visible: boolean,
  modalAction: string
}


class Home extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      current: 'student',
      visible: false,
      modalAction: ''
    }
  }
  handleClick = (e: any) => {
    if (e.key === 'class' || e.key === 'grade') {
      return;
    }
    this.setState({
      current: e.key,
    });
  };

  renderMenu() {
    const { current } = this.state;
    if (current === 'student') {
      return <ManageStudent />
    } else if (current === 'teacher') {
      return <ManageTeacher />
    }
  }

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

  renderModal() {
    const { modalAction } = this.state;
    if (modalAction === 'createClass') {
      return (
        <Modal
          title="创建课程"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form {...formItemLayout}>
            <Form.Item label="课程号">
              {(<Input />)}
            </Form.Item>
            <Form.Item label="课程名">
              {(<Input />)}
            </Form.Item>
            <Form.Item label="课程学分">
              {(<Input />)}
            </Form.Item>
            <Form.Item label="任课教师工号">
              {(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      )
    } else if (modalAction === 'setGrade') {
      return (
        <Modal
          title="录入成绩"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form {...formItemLayout}>
            <Form.Item label="输入学生学号">
              {(<Input />)}
            </Form.Item>
            <Form.Item label="输入课程号">
              {(<Input />)}
            </Form.Item>
            <Form.Item label="输入成绩">
              {(<Input />)}
            </Form.Item>
          </Form>
      </Modal>
      )
    }
    return null;
  }

  render() {
    return (
      <div>
        <header className="admin-page-header">
          <h2>管理员页面</h2>
        </header>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="student">
            学生管理
          </Menu.Item>
          <Menu.Item key="teacher">
            教师管理
          </Menu.Item>
          <Menu.Item key="class" onClick={() => this.setState({visible: true, modalAction: 'createClass'})}>
            添加课程
          </Menu.Item>
          <Menu.Item key="grade" onClick={() => this.setState({visible: true, modalAction: 'setGrade'})}>
            录入成绩
          </Menu.Item>
        </Menu>

        {this.renderMenu()}
        {this.renderModal()}
      
      </div>
    )
  }
}

export default Home;