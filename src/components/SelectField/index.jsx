import React, { useState, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useOnClickOutside } from "utils/hooks";
import {
  DropDownContainer,
  DropDownHeader,
  PlaceText,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from "./styles";
import { Label } from "components/BookForm/styles";

const SelectField = ({ label, placeholder, options, width, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const ref = useRef();

  useOnClickOutside(ref, () => setIsOpen(false));

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option) => () => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option.value);
  };

  return (
    <DropDownContainer width={width} ref={ref}>
      <Label>{label}</Label>
      <DropDownHeader onClick={toggling}>
        {selectedOption ? (
          selectedOption.label
        ) : (
          <PlaceText>{placeholder}</PlaceText>
        )}
        <FiChevronDown size={25} color="#BDC7D2" />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option.label}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default SelectField;
