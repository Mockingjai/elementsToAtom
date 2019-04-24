import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import * as func from './actions/actions';

class App extends Component {

  state = {
    value1: '',
    value2: '',
    value3: '',
  };

  componentDidUpdate(prevProps) {
    if (this.props.ourState.P !== prevProps.ourState.P
        && this.props.ourState.N !== prevProps.ourState.N
        && this.props.ourState.E !== prevProps.ourState.E
    ) {
      this.setState({
        value1: this.props.ourState.P,
        value2: this.props.ourState.N,
        value3: this.props.ourState.E
      })
    }
  }

  getValue1 = (e) => {
    this.setState({
      value1: e.target.value
    })
  };

  getValue2 = (e) => {
    this.setState({
      value2: e.target.value
    })
  };

  getValue3 = (e) => {
    this.setState({
      value3: e.target.value
    })
  };


  render() {
    console.log(this.props.ourState.P)
    return (
        <div className="main">
          <div className="left">
            <div>
              <input
                  type="text"
                  onChange={this.getValue1}
                  value={this.state.value1}
              />
              <button onClick={this.props.addProton.bind(null, this.state.value1)}>Get Proton</button>
            </div>
            <div>
              <input
                  type="text"
                  onChange={this.getValue2}
                  value={this.state.value2}
              />
              <button onClick={this.props.addNeitron.bind(null, this.state.value2)}>Get Neitron</button>
            </div>
            <div>
              <input
                  type="text"
                  onChange={this.getValue3}
                  value={this.state.value3}
              />
              <button onClick={this.props.addElectron.bind(null, this.state.value3)}>Get Electron</button>
            </div>
          </div>
          <div className="middle">
            {this.props.ourState.E >= 2 && this.props.ourState.N >= 2 && this.props.ourState.P >= 2 ?
                <button
                    onClick={this.props.transformValues}
                    style={{background: 'green'}}>GO!</button>
                :
                <button>Need more</button>
            }
          </div>
          <div className="right">
            <div className="result">
              <span>{this.props.ourState.A}</span>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ourState: state,
});

const mapDispatchToProps = (dispatch) => ({
  addProton: (p) => dispatch(func.addProton(p)),
  addNeitron: (n) => dispatch(func.addNeitron(n)),
  addElectron: (e) => dispatch(func.addElectron(e)),
  transformValues: () => dispatch(func.transformValues()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
