export default class Validator {
  validateUsername(username) {
    return /^[a-zA-Z]+[\da-zA-Z_-]*[a-zA-Z]+$/.test(username) && !/\d{4,}/.test(username);
  }
}
