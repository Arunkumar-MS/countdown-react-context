import React from 'react';
import moment from 'moment';

export const DateContext = React.createContext();

class DateProvider extends React.Component {
  constructor(props) {
    super(props);
    this.changeDate = (date) => {
      this.setState(state => {
        return {
          Date: date
        };
      });
    };

    this.state = {
      Date:moment(new Date()),
      changeDate: this.changeDate
    };
  }

  render() {
    return (
      <DateContext.Provider value={this.state}>
        {this.props.children}
      </DateContext.Provider>
    );
  }
}

export default DateProvider;