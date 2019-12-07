import React from 'react';
import { Button, Avatar, Menu, Dropdown, Icon, Modal,  Form, Input } from 'antd';
import './style.less';
import 'core-decorators';
import ShowInfo from '../showInfo';
import ChooseClass from '../chooseClass';
import { FormComponentProps } from 'antd/es/form';

interface State {
  curMenu: string,
  visible: boolean
}

interface Props extends FormComponentProps {}

const menuItem: {[key: string]: string} = {
  showInfo: '学生个人信息页面',
  chooseClass: '学生选课页面',
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

class Home extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      curMenu: 'showInfo',
      visible: false
    }
  }

  changeCurMenu(val: string) {
    this.setState({
      curMenu: val
    })
  }

  renderMenu() {
    return (
      <Menu>
        <Menu.Item>
          <div onClick={() => {this.changeCurMenu('chooseClass')}}>选课</div>
        </Menu.Item>
        <Menu.Item>
          <div onClick={() => {this.setState({visible: true})}}>修改信息</div>
        </Menu.Item>
        <Menu.Item>
          <div onClick={() => {this.changeCurMenu('showInfo')}}>查询信息</div>
        </Menu.Item>
      </Menu>
    );
  }

  renderCom() {
    const { curMenu } = this.state;
    if (curMenu === 'showInfo') {
      return <ShowInfo />
    } else if (curMenu === 'chooseClass') {
      return <ChooseClass />
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

  render() {
    const { curMenu } = this.state;

    return (
      <div>
        <header className="student-header">
          <h2>{menuItem[curMenu]}</h2>
          <Avatar size="small" icon="user" />
          <span>夏侯瑾轩</span>
          <Dropdown overlay={this.renderMenu()}>
            <a className="ant-dropdown-link" href="#">
              <Icon type="down" />
            </a>
          </Dropdown>
        </header>

        {this.renderCom()}

        <Modal
          title="修改学生信息"
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
      </div>
    )
  }
}

export default Form.create<Props>({})(Home);
