import React, {Component} from 'react';
import '../App.css';
import * as func from '../actions/actions';
import {connect} from "react-redux";

class CreateAtom extends Component {
    constructor(props){
        super(props);
        this.state = {
            protonValue: 0,
            neutronValue: 0,
            electronValue: 0,
        };
    }
    render() {
        return (
            <div className="middle">
                {this.props.electronState.E >= 2 && this.props.neutronState.N >= 2 && this.props.protonState.P >= 2 ?
                    <button
                        onClick={this.props.transformValues}
                        style={{background: 'green'}}>GO!</button>
                    :
                    <button>Need more</button>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    protonState: state.protonReducer,
    neutronState: state.neutronReducer,
    electronState: state.electronReducer,
    transformState: state.transformReducer,
});
const mapDispatchToProps = (dispatch) => ({
    transformValues: () => dispatch(func.transformValues()),
});
export default connect(mapStateToProps,mapDispatchToProps)(CreateAtom);