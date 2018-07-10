import {
  getState,
  getStatesForCountry,
  US_STATES_LIST,
  US_MILITARY_STATES_LIST,
  isCustomsDeclarationRequiredInUS,
  countryContainsState
} from 'ember-countries';
import { module, test } from 'qunit';

module('Unit | Utility | getState');

test('retrieve US state correctly with iso2', function(assert) {
  let result = getState('US', 'CA');
  let expect = {iso2: "CA", name: "California"};
  assert.deepEqual(result, expect);
});

test('retrieve US states correctly with iso3', function(assert) {
  let result = getState('USA', 'CA');
  let expect = {iso2: "CA", name: "California"};
  assert.deepEqual(result, expect);
});

test('return undefined if state is not iso2', function(assert) {
  let result = getState('USA', 'California');
  assert.equal(result, undefined);
});

test('return undefined if state does not exist', function(assert) {
  let result = getState('USA', 'XX');
  assert.equal(result, undefined);
});

test('return undefined if country does not have states', function(assert) {
  let result = getState('ES', 'CA');
  assert.equal(result, undefined);
});


module('Unit | Utility | getStatesForCountry');

test('return list of state for US with military states', function(assert) {
  let result = getStatesForCountry('US');
  assert.deepEqual(result, US_STATES_LIST.concat(US_MILITARY_STATES_LIST));
});

test('return undefined if country does not have states', function(assert) {
  let result = getStatesForCountry('FR');
  assert.equal(result, undefined);
});


module('Unit | Utility | isCustomsDeclarationRequiredInUS');

test('isCustomsDeclarationRequiredInUS with same state return false', function(assert) {
  let result = isCustomsDeclarationRequiredInUS('CA', 'CA');
  assert.notOk(result);
});

test('isCustomsDeclarationRequiredInUS with same state return false', function(assert) {
  let result = isCustomsDeclarationRequiredInUS('CA', 'WA');
  assert.notOk(result);
});

test('isCustomsDeclarationRequiredInUS with stateFrom in list return true', function(assert) {
  let result = isCustomsDeclarationRequiredInUS('CA', 'GU');
  assert.ok(result);
});


module('Unit | Utility | countryContainsState');

test('countryContainsState California in Canada return false', function(assert) {
  let result = countryContainsState('CA', 'CA');
  assert.notOk(result);
});

test('countryContainsState California in US return false', function(assert) {
  let result = countryContainsState('US', 'CA');
  assert.ok(result);
});

test('countryContainsState California in ES return false', function(assert) {
  let result = countryContainsState('ES', 'CA');
  assert.notOk(result);
});

