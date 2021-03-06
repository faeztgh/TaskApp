import React from "react";
import DatePicker from "react-datepicker";

const MyTimePicker = (props) => {
    const { todo, handleTimeChange, disabled } = props;
    const startTime = new Date(todo.time);

    return (
        <>
            <DatePicker
                className="w-20 px-1 font-semibold"
                selected={startTime}
                onChange={(date) => handleTimeChange(todo.id, date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                disabled={disabled}
                timeCaption="Time"
                dateFormat="h:mm aa"
            />
        </>
    );
};

export default MyTimePicker;
