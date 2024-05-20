import React from "react";
import { SelectFieldComponent, TextFieldComponent } from "./Fields";

export const MakeField = (props) => {
  return (
    <>
      {props.control == "TextField" ? (
        <TextFieldComponent
          name={props.name}
          id={props.id}
          formValue={props.formValue}
          setFormValues={props.setFormValues}
          validation={props.validation}
        />
      ) : (
        <SelectFieldComponent
          name={props.name}
          id={props.id}
          dropdownValues={props.values}
          formValue={props.formValue}
          setFormValues={props.setFormValues}
          validataion={props.validation}
        />
      )}
    </>
  );
};
