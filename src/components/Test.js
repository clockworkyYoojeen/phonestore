import React, { Component } from 'react'
import ProgressBar from './ProgressBar'
import InputFields from './InputFields'

export default class Test extends Component {
    state = {progressW: 0}

    changeProgress = (progressW) => {
        this.setState({...this.state, progressW})
    }
    render() {
        return (
            <div>
               <ProgressBar progressW={this.state.progressW} />
               <InputFields changeProgress={this.changeProgress} initWidth={this.state.progressW} /> 
            </div>
        )
    }
}

