// import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';
import React, {Component} from "react";
import {render,createPortal} from "react-dom";
import './index.css';

class Portal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return createPortal(<div>{this.props.name}</div>, document.getElementById("footer"));
  }
}

class S extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'huyue12323'
    }
  }
  render() {
    return (
      <div>
        <button onClick={()=>{this.setState({'name':'yueming'})}}>滴滴滴</button>
        <Portal name={this.state.name}/>
      </div>
    );
  }
}

render(<S />, document.getElementById("content"));