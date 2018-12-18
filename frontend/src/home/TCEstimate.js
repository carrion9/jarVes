import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LoadingIndicator from '../common/LoadingIndicator';
import './Menu.css';
import { makeID } from '../util/Helpers';
import {
    Radio,
    Input,
    DatePicker
} from 'antd';

const RadioGroup = Radio.Group;

function makeInputList(fields){
    return fields.map( (field) => (
        <Input className='alignComponent' addonBefore={field} id={makeID(field)}/> 
    ));
}

function makeRadioList(fields, name, style){
    if (style){
        return (
                <RadioGroup className='alignComponent' id={name}>
                    {fields.map( (field) => (
                        <Radio  style={style} value={makeID(field)}>{field}</Radio> 
                    ))}
                </RadioGroup>
            )
    }else{
        return (
                <RadioGroup className='alignComponent' id={name}>
                    {fields.map( (field) => (
                        <Radio value={makeID(field)}>{field}</Radio> 
                    ))}
                </RadioGroup>
            )
    }
}

class TCEstimate extends Component {
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
                    <Input addonBefore='Name' id='name'/>
                    <Input addonBefore='Voyage' id='voyage'/>
                    <div className='alignLeft'>
                        {makeInputList(['Account', 'Commodity', 'Broker'])}
                    </div>
                    <div className='alignRight'>
                        {makeInputList(['Laycan', 'Repos.'])}
                        <DatePicker addonBefore='Date' id='date' />
                    </div>
                    <div className='alignClear' />

                    <br />

                    <div className='alignLeft'>
                        {makeInputList(['Hire rate', 'Apprx. dur', 'Ballast bonus', 'Commisision'])}
                        Ballast distance
                        <br />
                        {makeInputList(['Non Seca', 'Seca', 'Ifo price', 'Mdo price'])}
                    </div>
                    <div className='alignRight'>
                        Port costs
                        <br />
                        {makeInputList(['Delivery', 'Redelivery'])}
                        <br />
                        <br />
                        {makeInputList(['Canals', 'Miscel.', 'Lost/waiting days'])}
                    </div>
                    <div className='alignClear' />
                </div>

                <div className='alignRight'>
                    <div className='alignLeft' >
                        {makeInputList(['Speed', 'Ifo Ballast', 'Ifo Laden', 'Mdo Sea', 'Mdo port', 'Streaming'])}
                    </div>
                    <div className='alignRight'>
                        {makeInputList(['Gross revenue', 'Bunker cost', 'Expenses', 'Net revenue', 'Sensitivity $100', 'Sensitivity 5 days', '$5.000 bb Gross', 'Total duration', 'Time charter rate'])}
                    </div>
                    <div className='alignClear' />
                </div>

                <div className='alignClear' />
            </div>
			);
	}
}
export default withRouter(TCEstimate);



