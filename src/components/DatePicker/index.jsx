import React from "react";
import DatePicker from "react-datepicker";
import { Wrapper } from "./styles";
import { Label } from "components/BookForm/styles";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ label, date, onDateChange }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <DatePicker
        selected={date}
        onChange={(date) => onDateChange(date)}
        placeholderText="DD / MM /YYYY"
      />
    </Wrapper>
  );
};

export default DateInput;
