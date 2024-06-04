import React from "react";

export const formData = [
  {
    id: 1,
    name: "FirstName",
    control: "TextField",
    validation: ["R", "N", "D"],
    order: 1,
  },
  {
    id: 2,
    name: "LastName",
    control: "TextField",
    validation: ["R", "N", "D"],
    order: 1,
  },
  {
    id: 3,
    name: "Email",
    control: "TextField",
    validation: ["R", "E"],
    order: 1,
  },
 
  {
    id: 5,
    name: "Ratini",
    control: "TextField",
    validation: ["R", "E"],
    order: 1,
  },
  {
    id: 6,
    name: "Batini",
    control: "TextField",
    validation: ["R", "E"],
    order: 1,
  },
  {
    id:7,
    name: "class",
    control:"TextField",
    validation:["R","E"],
    order:2
  },
  {
    id: 4,
    name: "Gender",
    control: "Dropdown",
    validation: ["R"],
    values: ["Male", "Female"],
    order: 1,
  },
  {
    id: 8,
    name: "Lender",
    control: "Dropdown",
    validation: ["R"],
    values: ["Borrower", "Receiver"],
    order: 1,
  },
  
];
