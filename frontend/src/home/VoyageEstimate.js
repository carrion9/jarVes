import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LoadingIndicator from '../common/LoadingIndicator';
import './Menu.css';
import { renderID } from '../util/Helpers';
import { 
    Radio,
    Input,
    DatePicker,
} from 'antd';

class VoyageEstimate extends Component {
	constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };

    }

    calculate(){
        if (this.state.hirerate && this.state.ballastbonus){
            this.setState({
                timecharterrate:  Number(this.state.hirerate) + Number(this.state.ballastbonus)
            })
        }
    }

    onChangeInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        this.setState({
            [id]: value
            },
            this.calculate
        );
    }

    onChangeRadio = (e) => {
        const id = e.target.name;
        const value = e.target.value;
        this.setState({
            [id]: value
            },
            this.calculate
        );
    }

    renderInputList(fields, className='alignComponent', disabled=false){
        return fields.map( (field) => (
             <Input 
                type='number' 
                className={className}
                addonBefore={field} 
                id={renderID(field)}
                onChange={this.onChangeInput.bind(this)}
                disabled={disabled}/> 
          
        ))
    }


    renderRadioList(fields, id, style={}, className='alignRadioGroup'){
        const RadioGroup = Radio.Group;
        return (
            <RadioGroup 
                className={className} 
                name={id}
                onChange={this.onChangeRadio.bind(this)}>
                    {fields.map( (field) => (
                        <Radio  
                            style={style} 
                            value={renderID(field)}>
                                {field}
                        </Radio> 
                    ))}
            </RadioGroup>
        )
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
                    <br />
                    <br />
                    <div className='alignLeft'>
                        {this.renderInputList(['Account', 'Commodity', 'Broker', 'Laycan', 'Quantity', 'Freight rate'])}
                        <br />
                        {this.renderRadioList(['LUMPSUM', 'Per MT Intake', 'Per LT Intake'], '3bradio', veerticalRadioStyle)}
                    </div>
                    <div className='alignRight'>
                        <div className='alignLeft' >
                            <Input className='alignComponent' addonBefore='L/Rate' id='lrate' onChange={this.handleInputChange}/>
                            <Input className='alignComponent' addonBefore='D/Rate' id='drate' onChange={this.handleInputChange}/>
                        </div>
                        <div className='alignRight' >
                             {this.renderRadioList(['X','C'],'lrateRadio')}
                             <br />
                             {this.renderRadioList(['X','C'],'drateRadio')}
                        </div>
                        <div className='alignClear' />
                        {this.renderInputList(['Comm.', 'Repos.'])}
                        <DatePicker addonBefore='Date' id='date' />
                    </div>
                    <div className='alignClear' />

                    <br />

                    <div className='alignLeft'>
                        <p>Ballast distance</p>
                        {this.renderInputList(['NON Seca (Ballast)', 'Seca (Ballast)'])}
                        <br />
                        <br />
                        <p>Laden distance</p>
                        {this.renderInputList(['NON Seca (Laden)', 'Seca (Laden)', 'Lfo price', 'Mdo price', 'Lost/waiting days'])}
                    </div>
                    <div className='alignRight'>
                        <p>Port costs</p>
                        {this.renderInputList(['Load', 'Disch', 'Others', 'Canals', 'Taxes %', 'Miscel.', 'Exins'])}
                    </div>

                    <div className='alignClear' />

                </div>

                <div className='alignRight'>

                    <Input addonBefore='Name' id='name'/>
                    <br />
                    <br />
                    <div className='alignLeft'>
                        {this.renderInputList(['Speed', 'Ifo Ballast', 'Ifo Laden', 'Mdo Sea', 'IFO port idle', 'IFO port work', 'MGO port idle', 'MGO port work', 'Boiler port'])}
                    </div>
                    <div className='alignRight'>
                        {this.renderInputList(['Load port', 'Disch. port', 'Streaming margin'])}
                        <br />
                        Days 
                        <br />
                        {this.renderInputList(['Streaming','Load days','Disch days', 'SHEX load', 'SHEX disch'], 'alignResultLightBlue', true)}
                        <Input 
                            className='alignResultRed' 
                            addonBefore='Total duration'
                            id='totalduration'
                            disabled={true}
                            value={this.state.totalduration}/> 
                    </div>
                    <div className='alignClear' />

                    <p>RESULTS</p>
                    {this.renderInputList(['Gross revenue', 'Sailing bunkers', 'Loadport bunkers', 'Disport bunkers', 'Total bunker cost', 'Expenses', 'Commissions', 'Taxes', 'Exins', 'Net Revenue'], 'alignResultDarkBlue', true)}
                    <Input 
                        className='alignResultRed' 
                        addonBefore='Time charter rate' 
                        id='timecharterrate'
                        disabled={true}
                        value={this.state.timecharterrate}/> 
                    <Input 
                        className='alignResultGreen' 
                        addonBefore='Sensitivity +/- $1'
                        id='sensitivity1'
                        disabled={true}
                        value={this.state.sensitivity1}/> 
                        
                </div>

                <div className='alignClear' />

            </div>
			);
	}
}
export default withRouter(VoyageEstimate);



