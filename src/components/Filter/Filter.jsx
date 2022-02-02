
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Filter  extends Component {
    render(){
        const { value, onChange } = this.props;
        return (
          <label >
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
      );
    };
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,

};
 
  export default Filter;