import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import * as func from './actions/actions';

class App extends Component {

  state = {
    protonValue: 0,
    neutronValue: 0,
    electronValue: 0,
  };

  componentDidUpdate(prevProps) {
    if (this.props.ourState.P !== prevProps.ourState.P
        && this.props.ourState.N !== prevProps.ourState.N
        && this.props.ourState.E !== prevProps.ourState.E
    ) {
      this.setState({
        protonValue: this.props.ourState.P,
        neutronValue: this.props.ourState.N,
        electronValue: this.props.ourState.E
      })
    }
  }

  render() {
    console.log(this.props.ourState.P);
    const {protonValue,neutronValue,electronValue} = this.state;
    return (
        <div className="main">
          <div className="left">
            <div>
              <button onClick={this.props.addProton.bind(null, protonValue)}>Get Proton</button>
            </div>
            <div>
              <button onClick={this.props.addNeutron.bind(null, neutronValue)}>Get Neutron</button>
            </div>
            <div>
              <button onClick={this.props.addElectron.bind(null, electronValue)}>Get Electron</button>
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
  addProton: () => dispatch(func.addProton()),
  addNeutron: () => dispatch(func.addNeutron()),
  addElectron: () => dispatch(func.addElectron()),
  transformValues: () => dispatch(func.transformValues()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
