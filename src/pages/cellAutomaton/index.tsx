import React, { Component } from 'react';
import './style.less';
import { autobind } from 'core-decorators';
const a = Array.from(new Array(6)).map(item => Array.from(new Array(6)).fill(3));
const b = Array.from(new Array(5)).map(item => Array.from(new Array(6)).fill(2));

a.forEach((item: any) => {
  item.forEach((val: any, index: number) => {
    item[index] = '' + Math.floor(Math.random() * 8);
  })
})

b.forEach((item: any) => {
  item.forEach((val: any, index: number) => {
    item[index] = '' + Math.floor(Math.random() * 8);
  })
})

const o = {
  a,
  b,
  c: a,
  d: b,
  e: a,
  f: b,
}

interface ColorObj {
  [key: string]: string,
}

const colors: ColorObj = {
  0: '#ef342a',
  1: '#f68f26',
  2: '#4ba946',
  3: '#0376c2',
  4: '#c077af',
  5: '#f8d29d',
  6: 'lightgreen',
  7: 'skyblue',
}

@autobind
class CellAutomaton extends Component {
  renderPhotos(obj: any) {
    return Object.values(obj).map((item: any) => {
      return (
        <div className="photo-container">
          {this.renderPhoto(item)}
        </div>
      )
    })
  }

  renderPhoto(arr: any) {
    return arr.map((row: any) => {
      return (
        <div className="photo-row">
          {
            row.map((col: any) => {
              return (
                <span className="photo-cell" style={{backgroundColor: colors[col]}}></span>
              )
            })
          }
        </div>
      )
    })
  }

  render () {
    return (
      <> 
        <div className="photos-container">
          {this.renderPhotos(o)}
        </div>
      </>
    )
  }
}

export default CellAutomaton;