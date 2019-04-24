import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import * as func from './actions/actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      protonValue: 0,
      neutronValue: 0,
      electronValue: 0,
    };
  }
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
  clicked = 0;
  addElementProton = () => {
    this.setState({
      protonValue: this.clicked += 1,
    });
    this.props.addProton(this.state.protonValue);
  };
  addElementNeutron = () => {
    this.setState({
      neutronValue: this.clicked += 1,
    });
    this.props.addNeutron(this.state.neutronValue);
  };
  addElementElectron = () => {
    this.setState({
      electronValue: this.clicked += 1,
    });
    this.props.addElectron(this.state.electronValue);
  };

  render() {
    console.log(this.props.ourState.P);
    return (
        <div className="main">
          <div className="left">
            <div>
              <button onClick={this.addElementProton}>Get Proton</button>
              <span>{this.props.ourState.P}</span>
            </div>
            <div>
              <button onClick={this.addElementNeutron}>Get Neutron</button>
              <span>{this.props.ourState.N}</span>
            </div>
            <div>
              <button onClick={this.addElementElectron}>Get Electron</button>
              <span>{this.props.ourState.E}</span>
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
  addProton: (value) => dispatch(func.addProton(value)),
  addNeutron: (val) => dispatch(func.addNeutron(val)),
  addElectron: (v) => dispatch(func.addElectron(v)),
  transformValues: () => dispatch(func.transformValues()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
