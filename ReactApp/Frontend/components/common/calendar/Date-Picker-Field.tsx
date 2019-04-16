//-----------------------------------------------------------------------
// <copyright file="Date-Picker-Field.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Date picker field
//-----------------------------------------------------------------------

import * as React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

export default class DatePickerField extends React.Component {

    state = {
      startDate: new Date()
    };

    handleChange = (date:any) => {
      this.setState({
        startDate: date
      });
    }
  
    render() {
      return (
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      );
    }
  }
  