import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LoadingIndicator from '../common/LoadingIndicator';
import './Menu.css';
import { renderID } from '../util/Helpers';
import {
    Input,
    DatePicker
} from 'antd';

class TCEstimate extends Component {
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
                        {this.renderInputList(['Account', 'Commodity', 'Broker'])}
                    </div>
                    <div className='alignRight'>
                        {this.renderInputList(['Laycan', 'Repos.'])}
                        <DatePicker addonBefore='Date' id='date' />
                    </div>
                    <div className='alignClear' />

                    <br />

                    <div className='alignLeft'>
                        {this.renderInputList(['Hire rate', 'Apprx. dur', 'Ballast bonus', 'Commisision'])}
                        <br />
                        <br />
                        <p>Ballast distance</p>
                        {this.renderInputList(['Non Seca', 'Seca', 'Ifo price', 'Mdo price'])}
                    </div>
                    <div className='alignRight'>
                        <p>Port costs</p>
                        {this.renderInputList(['Delivery', 'Redelivery'])}
                        <br />
                        <br />
                        {this.renderInputList(['Canals', 'Miscel.', 'Lost/waiting days'])}
                    </div>
                    <div className='alignClear' />
                </div>

                <div className='alignRight'>
                    <div className='alignLeft' >
                        {this.renderInputList(['Speed', 'Ifo Ballast', 'Ifo Laden', 'Mdo Sea', 'Mdo port', 'Streaming'])}
                    </div>
                    <div className='alignRight'>
                        {this.renderInputList(['Gross revenue', 'Bunker cost', 'Expenses', 'Net revenue'], 'alignResultDarkBlue', true)}
                        {this.renderInputList(['Sensitivity $100', 'Sensitivity 5 days', '$5.000 bb Gross', 'Total duration'], 'alignResultGreen', true)}
                        
                        <Input 
                            className='alignResultRed' 
                            addonBefore='Time charter rate' 
                            id='timecharterrate'
                            disabled={true}
                            value={this.state.timecharterrate}/> 
                    </div>
                    <div className='alignClear' />
                </div>

                <div className='alignClear' />
            </div>
			);
	}
}
export default withRouter(TCEstimate);



