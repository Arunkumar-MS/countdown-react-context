import React from 'react';
import Datetime from 'react-datetime';
import moment from'moment';
import { DateContext } from './provider/dateProvider';
import 'react-datetime/css/react-datetime.css';

class DateField extends React.Component {
    yesterday = Datetime.moment().subtract(1, 'day');
    valid = (current) => current.isAfter(this.yesterday);
    render() {
        return ( 
        <DateContext.Consumer>
            { dateProvider => (
                <Datetime 
                    closeOnSelect={true} 
                    onChange ={dateProvider.changeDate }
                    isValidDate = {this.valid } 
                />
            )}
        </DateContext.Consumer>
        );
    }
};


export default DateField;
