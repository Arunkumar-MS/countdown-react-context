import React from 'react';
import Datetime from 'react-datetime';
import moment from'moment';
import { DateContext } from './provider/dateProvider';
import 'react-datetime/css/react-datetime.css';

const DateField = () => {
    const yesterday = Datetime.moment().subtract(1, 'day');
    const valid = (current) => current.isAfter(yesterday);
    return ( 
        <DateContext.Consumer>
            { dateProvider => (
                <Datetime 
                    closeOnSelect={true} 
                    onChange ={dateProvider.changeDate }
                    isValidDate = {valid } 
                />
            )}
        </DateContext.Consumer>
    );
};


export default DateField;
