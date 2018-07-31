import React from 'react';
import DateField from './dateField';
import DateProvider from './provider/dateProvider';
import CounterWrapper  from './wrappers/counterWrapper';

class App extends React.Component {
    render() {
        return( 
            <div className="app___continer">
                <h1> CountDown </h1>
               <div className='app___content'>
                    <DateProvider> 
                     <CounterWrapper />
                      <div className='app___date-wrapper'>
                     <span className='app___counter-lable'> Select the date</span>
                        <DateField / > 
                     </div>
                </DateProvider>
                </div>
            </div>
        );
    }




};


export default App;
