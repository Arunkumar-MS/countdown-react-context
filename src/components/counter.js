import React from 'react';
import moment from'moment';
import CounterField from './conterField';
import PropTypes from 'prop-types';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            date: {
                days: 0,
                years: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        }
    }

    getConterDate =(deadline) => {
        const now = new Date().getTime();
        const timeLeft = deadline - now;
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const years = Math.floor(days / 365);
        if (days > 365) {
            days = days % 365;
          }
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        return {
            days,
            years,
            hours,
            minutes,
            seconds
        };
    }

    componentDidUpdate(prevProps){
        if(!moment(this.props.endDate,  "YYYY-MM-DD HH:mm").isValid()){
            return;
        }

        if(!moment(this.props.endDate).isSame(prevProps.endDate)){
            this.timerID && clearInterval(this.timerID);
            const deadline = new Date(moment(this.props.endDate).add(1, 'days')).getTime();
            this.timerID = setInterval(
                () => this.tick(deadline),
                1000
            );
        }
    }
    tick(deadline) {
        this.setState({
          date: this.getConterDate(deadline)
        });
      }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div className='counter___count-down'>
                    <CounterField value ={this.state.date.years} text='Years'/>
                    <CounterField value ={this.state.date.days} fixed={2} text='Days'/>
                    <CounterField value ={this.state.date.hours} fixed={2} text='Hours'/>
                    <CounterField value ={this.state.date.minutes} fixed={2} text='Minutes'/>
                    <CounterField value ={this.state.date.seconds} fixed={2} text='Seconds'/>
            </div>
    )
    } 
};

Counter.propTypes = {
    endDate: PropTypes.object.isRequired
};

export default Counter;
