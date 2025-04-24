import Validator from '../Validator.js';

test.each([
  ['Bowman', Validator.prototype.validateUsername('Bowman'), true],
  ['русский', Validator.prototype.validateUsername('русский'), false],
  ['Bow-man', Validator.prototype.validateUsername('Bow-man'), true],
  ['Bow9man', Validator.prototype.validateUsername('Bow9man'), true],
  ['Bow-9_man', Validator.prototype.validateUsername('Bow-9_man'), true],
  ['1Bowman', Validator.prototype.validateUsername('1Bowman'), false],
  ['Bowman-', Validator.prototype.validateUsername('Bow-9_man-'), false],
  ['Bow9999man', Validator.prototype.validateUsername('Bow9999man'), false],
  ['Bow999dfgd9man', Validator.prototype.validateUsername('Bow999dfgd9man'), true],
])('testing %s true', (status, validator, expected) => {
  expect(validator).toBe(expected);
});
