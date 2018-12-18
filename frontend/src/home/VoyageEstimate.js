import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LoadingIndicator from '../common/LoadingIndicator';
import './VoyageEstimate.css';
import { 
    Input,
    Radio,
    DatePicker,
} from 'antd';

const RadioGroup = Radio.Group;

function makeInputList(fields){
    return fields.map( (field) => (
        <Input className='alignComponent' addonBefore={field} id={field.toString().toLowerCase().replace(/[. ]/g,'')}/> 
    ));
}

function makeRadioList(fields, name){
    return (
            <RadioGroup className='alignComponent' id={name}>
                {fields.map( (field) => (
                    <Radio value={field.toString().toLowerCase().replace(/[. ]/g,'')}>{field}</Radio> 
                ))}
            </RadioGroup>
        )
}

class VoyageEstimate extends Component {
	constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

	render(){
        if(this.state.isLoading) {
            return <LoadingIndicator />
        }
		return (
            <div>

                <div className='alignLeft'>
                    <Input addonBefore='Voyage' id='Voyage'/>
                    <div className='alignLeft'>
                        {makeInputList(['Account', 'Commodity', 'Broker', 'Laycan', 'Quantity'])}
                    </div>
                    <div className='alignRight'>
                        <div className='alignLeft' >
                            <Input className='alignComponent' addonBefore='L/Rate' id='lrate'/>
                            <Input className='alignComponent' addonBefore='D/Rate' id='drate'/>
                        </div>
                        <div className='alignRight' >
                             <RadioGroup className='alignComponent' id='lrateRadio'>
                                <Radio value='x'>X</Radio>
                                <Radio value='c'>C</Radio>
                            </RadioGroup>
                        </div>
                        <div className='alignClear' />
                        {makeInputList(['Comm.', 'Repos.'])}
                        <DatePicker addonBefore='Date' id='date' />
                    </div>
                    <div className='alignClear' />
                </div>

                <div className='alignRight'>
                    <Input addonBefore='Name' id='name'/>
                    <div className='alignLeft'>
                        {makeInputList(['Speed', 'Ifo Ballast', 'Ifo Laden', 'Mdo Sea', 'Mdo Port'])}
                    </div>
                    <div className='alignRight'>
                        {makeInputList(['Load port', 'Disch. port', 'Streaming'])}
                        {makeRadioList(['LUMPSUM','Per MT Intake','Per LT Intake'], '3bradio')}
                    </div>
                </div>

                <div className='alignClear' />

            </div>
			);
	}
}
export default withRouter(VoyageEstimate);



