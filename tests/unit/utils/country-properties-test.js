import {countryIsoToValue, isCountryWithoutZip, isCountryWithState, countryIso3ToValue} from 'ember-countries';
import { module, test } from 'qunit';


module('Unit | Utility | country properties | countryIsoToValue');

test('Test with `US`', function(assert) {
  var result = countryIsoToValue('US');
  assert.equal(result, 'United States');
});

test('Test with `FR`', function(assert) {
  var result = countryIsoToValue('FR');
  assert.equal(result, 'France');
});

test('Test with incorrect iso', function(assert) {
  var result = countryIsoToValue('AA');
  assert.equal(result, 'AA');
});

test('Test with `""` input', function(assert) {
  var result = countryIsoToValue('');
  assert.equal(result, '');
});

test('Test with `null` input', function(assert) {
  var result = countryIsoToValue(null);
  assert.equal(result, '');
});

test('Test with `undefined` input', function(assert) {
  var result = countryIsoToValue(undefined);
  assert.equal(result, '');
});

test('Test throw error with `number` input', function(assert) {
  assert.throws(() => {countryIsoToValue(3);}, TypeError);
});



module('Unit | Utility | country properties | countryIso3ToValue');

test('Test with `US`', function(assert) {
  var result = countryIso3ToValue('USA');
  assert.equal(result, 'United States');
});

test('Test with `FR`', function(assert) {
  var result = countryIso3ToValue('FRA');
  assert.equal(result, 'France');
});

test('Test with incorrect iso', function(assert) {
  var result = countryIso3ToValue('AAA');
  assert.equal(result, 'AAA');
});

test('Test with `""` input', function(assert) {
  var result = countryIso3ToValue('');
  assert.equal(result, '');
});

test('Test with `null` input', function(assert) {
  var result = countryIso3ToValue(null);
  assert.equal(result, '');
});

test('Test with `undefined` input', function(assert) {
  var result = countryIso3ToValue(undefined);
  assert.equal(result, '');
});

test('Test throw error with `number` input', function(assert) {
  assert.throws(() => {countryIso3ToValue(3);}, TypeError);
});


module('Unit | Utility | country properties | isCountryWithoutZip');

test('Test with `US` input', function(assert) {
  var result = isCountryWithoutZip('US');
  assert.equal(result, false);
});

test('Test with `NU` input', function(assert) {
  var result = isCountryWithoutZip('NU');
  assert.equal(result, true);
});

test('Test with `null` input', function(assert) {
  var result = isCountryWithoutZip(null);
  assert.equal(result, false);
});

test('Test with `""` input', function(assert) {
  var result = isCountryWithoutZip('');
  assert.equal(result, false);
});

test('Test with `undefined` input', function(assert) {
  var result = isCountryWithoutZip(undefined);
  assert.equal(result, false);
});

test('Test throw error with `number` input', function(assert) {
  assert.throws(() => {isCountryWithoutZip(3);}, TypeError);
});


module('Unit | Utility | country properties | isCountryWithState');

test('Test with `US` input', function(assert) {
  var result = isCountryWithState('US');
  assert.equal(result, true);
});

test('Test with `NU` input', function(assert) {
  var result = isCountryWithState('FR');
  assert.equal(result, false);
});

test('Test with `null` input', function(assert) {
  var result = isCountryWithState(null);
  assert.equal(result, false);
});

test('Test with `""` input', function(assert) {
  var result = isCountryWithState('');
  assert.equal(result, false);
});

test('Test with `undefined` input', function(assert) {
  var result = isCountryWithState(undefined);
  assert.equal(result, false);
});

test('Test throw error with `number` input', function(assert) {
  assert.throws(() => {isCountryWithState(3);}, TypeError);
});
