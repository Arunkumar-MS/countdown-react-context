import React from 'react';
import PropTypes from 'prop-types';


const  CounterField = ({value=0, fixed=0, text}) => {
    return(
        <div className='counter-field___wrapper' >
            <span className='counter-field___value'> {String(value).padStart(fixed,0)} </span>
            <div className='counter-field___text'> { text } </div>
        </div>
    )
}

CounterField.propTypes = {
    value: PropTypes.number,
    fixed: PropTypes.number,
    text: PropTypes.string.isRequired,
};

export default CounterField;