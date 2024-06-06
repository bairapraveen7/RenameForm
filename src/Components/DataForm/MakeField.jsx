import React from "react";
import { DropDownComponent } from "./Fields/DropDownComponent";
import { TextFieldComponent } from "./Fields/TextFieldComponent";
import { DROPDOWN, TEXTFIELD } from "../../config";


const MapToComponent = {
  [TEXTFIELD]: (props) => <TextFieldComponent {...props} />,
  [DROPDOWN]: (props) => <DropDownComponent {...props} />
}

export const MakeField = (props) => {
  console.log(props)
  return (
    <>
    {
      
      MapToComponent[props.fieldItem.type](props)
    }
       
    </>
  );
};
