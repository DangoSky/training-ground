import React from 'react';
import { Form, Menu, Input, Modal, Button, Select } from 'antd';
import 'core-decorators';
import './style.less';
import ManageStudent from '../manageStudent';
import ManageTeacher from '../manageTeacher';

const { Option } = Select;
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
  modalAction: string,
  wageVal: string,
  count: string,
  gradeInfo: any
}

class Home extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      current: 'student',
      visible: false,
      modalAction: '',
      wageVal: '',
      count: '',
      gradeInfo: {avage: '', min: '', max: ''}
    }
  }
  handleClick = (e: any) => {
    if (['class', 'grade', 'wage', 'computeGrade'].includes(e.key)) {
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
    } else if (modalAction === 'computeWage') {
      const { wageVal, count } = this.state;
      return (
        <Modal
          title="统计职工信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <label>选择职工：</label>
        <Select defaultValue="" style={{ width: 200 }} onChange={(val: string) => this.setState(JSON.parse(val))}>
          <Option value={JSON.stringify({wageVal: '20000RMB/月', count: '10人'})}>辅导员</Option>
          <Option value={JSON.stringify({wageVal: '17000RMB/月', count: '2人'})}>讲师</Option>
          <Option value={JSON.stringify({wageVal: '13000RMB/月', count: '33人'})}>实验室管理员</Option>
        </Select>
        <p style={{marginTop: '20px'}}>该类职工的平均工资为：{wageVal}</p>
        <p style={{marginTop: '20px'}}>该类职工的总人数为：{count}</p>
      </Modal>
      )
    } else if (modalAction === 'computeGrade') {
      const { gradeInfo } = this.state;
      return (
        <Modal
          title="统计课程的学生成绩"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <p>请输入要查询的课程号：</p>
        <Input style={{width: 300, marginRight: '10px'}} />
        <Button onClick={() => this.setState({gradeInfo: {avage: 56.5, min: 47, max: 66}})}>查询</Button>
        <p style={{marginTop: '20px'}}>该课程的平均成绩为：{gradeInfo.avage}</p>
        <p style={{marginTop: '20px'}}>该课程的最低成绩为：{gradeInfo.min}</p>
        <p style={{marginTop: '20px'}}>该课程的最高成绩为：{gradeInfo.max}</p>
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
          <Menu.Item key="wage" onClick={() => this.setState({visible: true, modalAction: 'computeWage'})}>
            计算工资
          </Menu.Item>
          <Menu.Item key="computeGrade" onClick={() => this.setState({visible: true, modalAction: 'computeGrade'})}>
            统计成绩
          </Menu.Item>
        </Menu>

        <div>
          <Input placeholder="请输入要查找的学生学号" style={{width: "300px", margin: "20px"}} />
          <Button>筛选</Button>
        </div>

        {this.renderMenu()}
        {this.renderModal()}
      
      </div>
    )
  }
}

export default Home;