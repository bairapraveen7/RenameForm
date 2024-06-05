export const Validations = {
  "R": {
    fn: (value) => value == null,
    message: "value is required"
  },
  "E": {
    fn: (value) => !String(value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
    message: "Email is not valid"
  },
  "N": {
    fn: (value) => isNaN(value),
    message: "Only numerics allowed"
  },
  "D": {
    fn: (value) => !/^[a-zA-Z0-9]+$/.test(value),
    message: "only Digits are allowed"
  }   
}
