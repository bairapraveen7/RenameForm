import React from "react";
import { DropDownComponent } from "./Fields/DropDownComponent";
import { TextFieldComponent } from "./Fields/TextFieldComponent";

export const MakeField = ({fieldItem,fieldValue,setFormValues,setValidation,validationMessage}) => {
  return (
    <>
      {fieldItem.control == "TextField" && (
        <TextFieldComponent
          fieldItem={fieldItem}
          formValue={fieldValue}
          setFormValues={setFormValues}
          setValidation={setValidation}
          validation={validationMessage}
        />
      )  }
      { fieldItem.control == "Dropdown" && (
        <DropDownComponent
          fieldItem={fieldItem}
          formValue={fieldValue}
          setFormValues={setFormValues}
          setValidation={setValidation}
          validation={validationMessage}
        />
      )}
    </>
  );
};
