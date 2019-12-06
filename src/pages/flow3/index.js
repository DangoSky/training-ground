import React from 'react';

// 点击 show 按钮打印 props.val, 再点击change按钮修改 val的值
// 分别使用类组件和函数组件，管擦打印出来的props值
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0
    }
    this.handle = this.handle.bind(this);
  }
  handle() {
    this.setState({
      val: this.state.val + 1
    })  
  }
  render() {
    return(
      <div>
        <button onClick={this.handle}>change</button>
        <ClassComponent val={this.state.val} />
        {/* <FnComponent val={this.state.val} /> */}
      </div>
    )
  }
}

class ClassComponent extends React.Component {
  handleClick() {
    console.log(this);
    console.log(this.props.val);
    setTimeout(() => {
      console.log(this);
      // props 改变了，类组件打印的props会是新的
      console.log(this.props.val);
    }, 3000);
  };
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>show</button>
        <p>{this.props.val}</p>
      </div>
    )
  }
}

function FnComponent(props) {
  function handleClick() {
    setTimeout(() => {
      // props 改变了，函数组件打印的props也是旧的
      console.log(props.val);
    }, 3000);
  }
  return (
    <div>
      <button onClick={handleClick}>show</button>
      <p>{props.val}</p>
    </div>
  )
}

export default Parent;
