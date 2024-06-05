import React from "react";
import { DropDownComponent } from "./Fields/DropDownComponent";
import { TextFieldComponent } from "./Fields/TextFieldComponent";

const MapToComponent = {
  "Textfield": (props) => <TextFieldComponent {...props} />,
  "Dropdown": (props) => <DropDownComponent {...props} />
}

export const MakeField = (props) => {
  return (
    <>
    {
      MapToComponent[props.fieldItem.control](props)
    }
       
    </>
  );
};
