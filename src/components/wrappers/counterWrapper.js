import React from 'react';
import moment from'moment';
import { DateContext } from '../provider/dateProvider';
import Counter from '../counter';


class CounterWrapper extends React.Component {
    
    render() {
        return (
            <DateContext.Consumer>
                {dateProvider => <Counter endDate={dateProvider.Date}/>}
            </DateContext.Consumer>
        )
    }
};

export default CounterWrapper;
