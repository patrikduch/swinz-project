

import * as React from 'react';
import DatePickerField from '../../common/calendar/Date-Picker-Field';
import Button from 'reactstrap/lib/Button';

export default () => {
    return (
        <>
        <h2>Měsiční filtrace tržeb</h2>
        <span>Od </span>
        <DatePickerField />
        <span>&nbsp;Do&nbsp;</span>
        <DatePickerField />
        <br/><br/>
        <Button>Vyhledat...</Button>
        </>
    )
}