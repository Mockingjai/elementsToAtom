import React, {Component} from 'react';
import '../App.css';
import * as func from '../actions/actions';
import {connect} from "react-redux";

class AddParts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            protonValue: 0,
            neutronValue: 0,
            electronValue: 0,
        }
    }
    addElementProton = () => {
        this.setState({
            protonValue: this.state.protonValue += 1,
        });
        this.props.addProton(this.state.protonValue);
    };
    addElementNeutron = () => {
        this.setState({
            neutronValue: this.state.neutronValue += 1,
        });
        this.props.addNeutron(this.state.neutronValue);
    };
    addElementElectron = () => {
        this.setState({
            electronValue: this.state.electronValue += 1,
        });
        this.props.addElectron(this.state.electronValue);
    };
    componentDidUpdate(prevProps) {
        if (this.props.protonState.P !== prevProps.protonState.P
            && this.props.neutronState.N !== prevProps.neutronState.N
            && this.props.electronState.E !== prevProps.electronState.E
        ) {
            this.setState({
                protonValue: this.props.protonState.P,
                neutronValue: this.props.neutronState.N,
                electronValue: this.props.electronState.E
            })
        }
    }
    render() {
        return (
            <div className="left">
                <div>
                    <button onClick={this.addElementProton}>Get Proton</button>
                    <span>{this.props.protonState.P}</span>
                </div>
                <div>
                    <button onClick={this.addElementNeutron}>Get Neutron</button>
                    <span>{this.props.neutronState.N}</span>
                </div>
                <div>
                    <button onClick={this.addElementElectron}>Get Electron</button>
                    <span>{this.props.electronState.E}</span>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    protonState: state.protonReducer,
    neutronState: state.neutronReducer,
    electronState: state.electronReducer,
});

const mapDispatchToProps = (dispatch) => ({
    addProton: (value) => dispatch(func.addProton(value)),
    addNeutron: (value) => dispatch(func.addNeutron(value)),
    addElectron: (value) => dispatch(func.addElectron(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddParts);