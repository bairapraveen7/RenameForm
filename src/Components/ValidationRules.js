export const ValidationRules = new Map();

// Set Map Values
ValidationRules.set("R", (value) => {
  return value == null;
});
ValidationRules.set("E", (value) => {
  return !String(value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
});
ValidationRules.set("N", (value) => {
  return isNaN(value);
});
ValidationRules.set("D", (value) => {
  return !/^[a-zA-Z0-9]+$/.test(value);
});

export const errorMessages = {
  "R" : "value is required",
"E": "Email is not valid",
"N": "Only numerics allowed",
"D": "only Digits are allowed"
}
