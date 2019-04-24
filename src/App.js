import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import AddParts from './add-partrs/add-parts';
import CreateAtom from './create-atom/create-atom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="main">
            <AddParts />
            <CreateAtom />
          <div className="right">
            <div className="result">
              <span>{this.props.transform.A}</span>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  transform: state.transformReducer,
});

export default connect(mapStateToProps, null)(App);
