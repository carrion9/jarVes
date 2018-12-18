import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LoadingIndicator from '../common/LoadingIndicator';
import './Menu.css';
import { makeID } from '../util/Helpers';
import { 
    Input,
    Radio,
    DatePicker,
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

        const veerticalRadioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };

		return (
            <div>

                <div className='alignLeft'>

                    <Input addonBefore='Voyage' id='Voyage'/>
                    <div className='alignLeft'>
                        {makeInputList(['Account', 'Commodity', 'Broker', 'Laycan', 'Quantity', 'Freight rate'])}
                        <br />
                        {makeRadioList(['LUMPSUM', 'Per MT Intake', 'Per LT Intake'], '3bradio', veerticalRadioStyle)}
                    </div>
                    <div className='alignRight'>
                        <div className='alignLeft' >
                            <Input className='alignComponent' addonBefore='L/Rate' id='lrate'/>
                            <Input className='alignComponent' addonBefore='D/Rate' id='drate'/>
                        </div>
                        <div className='alignRight' >
                             {makeRadioList(['X','C'],'lrateRadio')}
                             <br />
                             {makeRadioList(['X','C'],'drateRadio')}
                        </div>
                        <div className='alignClear' />
                        {makeInputList(['Comm.', 'Repos.'])}
                        <DatePicker addonBefore='Date' id='date' />
                    </div>
                    <div className='alignClear' />

                    <br />

                    <div className='alignLeft'>
                        Ballast distance
                        <br />
                        {makeInputList(['NON Seca (Ballast)', 'Seca (Ballast)'])}
                        Laden distance
                        <br />
                        {makeInputList(['NON Seca (Laden)', 'Seca (Laden)', 'Lfo price', 'Mdo price', 'Lost/waiting days'])}
                    </div>
                    <div className='alignRight'>
                        Port costs
                        <br />
                        {makeInputList(['Load', 'Disch', 'Others', 'Canals', 'Taxes %', 'Miscel.', 'Exins'])}
                    </div>

                    <div className='alignClear' />

                </div>

                <div className='alignRight'>

                    <Input addonBefore='Name' id='name'/>
                    <div className='alignLeft'>
                        {makeInputList(['Speed', 'Ifo Ballast', 'Ifo Laden', 'Mdo Sea', 'IFO port idle', 'IFO port work', 'MGO port idle', 'MGO port work', 'Boiler port'])}
                    </div>
                    <div className='alignRight'>
                        {makeInputList(['Load port', 'Disch. port', 'Streaming margin'])}
                        Days 
                        <br />
                        {makeInputList(['Streaming','Load days','Disch days', 'SHEX load', 'SHEX disch', 'Total duration'])}
                    </div>
                    <div className='alignClear' />

                    <br />

                    RESULTS
                    <br />
                    {makeInputList(['Gross revenue', 'Sailing bunkers', 'Loadport bunkers', 'Disport bunkers', 'Total bunker cost', 'Expenses', 'Commissions', 'Taxes', 'Exins', 'Net Revenue', 'Time Charter rate', 'Sensitivity +/- $1'])}
                </div>

                <div className='alignClear' />

            </div>
			);
	}
}
export default withRouter(VoyageEstimate);



