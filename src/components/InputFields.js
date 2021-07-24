import React, { Component } from 'react'

let allFieldsvalid;

export default class InputFields extends Component {
    componentDidMount() {
        this.inputs = document.querySelectorAll('input')
    }
    validateInput = (elem) => {
        if(elem.value === ''){
            return false
        }else {
            return true
        }
    }
    inputDone = (elem) => {
        const {changeProgress, initWidth} = this.props
        if(!this.validateInput(elem)){
            alert('Please, fill the field')
        }
        else{
            changeProgress(initWidth + 100)
        }
    }
    checkGroup = () => {
        let {changeProgress, initWidth} = this.props
        for(let item of this.inputs){
            item.classList.remove('wrong')
            if(!this.validateInput(item)){
                item.classList.add('wrong')
                allFieldsvalid = false;
                break
            } else{
                if(!item.classList.contains('valid')){
                    item.classList.add('valid')
                    initWidth += 100
                }
                allFieldsvalid = true
            }
        
        }
        changeProgress(initWidth)
    }

    sendForm = () => {
        allFieldsvalid ? console.log('Sending Form!') : console.log('Sending is not allowed!');
    }

    render() {
        const {changeProgress} = this.props
        return (
            <div className='inputgroup'>
                <input type='text'  onBlur={() => this.checkGroup() } className='inputfield'/>
                <input type='text'  onBlur={() => this.checkGroup() } className='inputfield'/>
                <input type='text'  onBlur={() => this.checkGroup() } className='inputfield'/>
                <button onClick={this.sendForm}>send</button>
            </div>
        )
    }
}
