import React, { PureComponent } from 'react';

interface State {
  val: number
}

class FLow1 extends PureComponent<{}, State> {
  constructor(props: any) {
    super(props);
    console.log(this);
  }
  componentDidMount() {
    console.log(this);
  }


  render() {
    return <div>hello world</div>
  }
}

export default FLow1;
