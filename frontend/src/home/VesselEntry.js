import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LoadingIndicator from '../common/LoadingIndicator';
import './Menu.css';
import { 
    Form,
    Input,
    Button
} from 'antd';
import { makeID } from '../util/Helpers';

function makeFormItemList(fields){
    const FormItem = Form.Item;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      }
    };

    return fields.map( (field) => (
        <FormItem {...formItemLayout} label={field} id={makeID(field)}> 
            <Input className='formComp' />
        </FormItem>
    ));
}

class VesselEntry extends Component {
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
                    <Form>
                        <div className='alignLeft'>
                            {makeFormItemList(['Name', 'DWT', 'Type', 'Flag', 'Built', 'Gear', 'Grain', 'Manager', 'Pic', 'Notes'])}
                        </div>
                        <div className='alignRight'>
                            {makeFormItemList(['Speed', 'Ifo-Ballast', 'Ifo-Laden', 'Port Idle', 'Port Working', 'MGO Port Idle', 'MGO Port Working', 'Boiler'])}
                            <div className='alignRight'>                                
                                <Button type='primary'>Save</Button>
                                <Button type='danger'>Clear</Button>
                            </div>
                            <div className='alignClear' />
                        </div>

                        <div className='alignClear' />
                    </Form>
                </div>
			);
	}
}
export default withRouter(VesselEntry);

