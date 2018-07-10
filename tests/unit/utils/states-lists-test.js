import {
  US_STATES_LIST,
  US_MILITARY_STATES_LIST,
  US_REQUIRING_CUSTOM_DECLARATION_STATES_LIST,
  CA_STATES_LIST,
  STATES_BY_COUNTRIES
} from 'ember-countries';
import STATES_LIST_DEFAULT from 'ember-countries/utils/states-lists';
import { module, test } from 'qunit';

module('Unit | Utility | states lists');

test('Check the length of list `US_STATES_LIST`', function(assert) {
  let result = US_STATES_LIST.length;
  assert.equal(result, 57);
});

test('Check the element 0 of list `US_STATES_LIST`', function(assert) {
  let result = US_STATES_LIST[0];
  let expect = {iso2: 'AL', name: 'Alabama'};
  assert.deepEqual(result, expect);
});

test('Check the element 15 of list `US_STATES_LIST`', function(assert) {
  let result = US_STATES_LIST[15];
  let expect = {iso2: 'KS', name: 'Kansas'};
  assert.deepEqual(result, expect);
});

test('Check the element 30 of list `US_STATES_LIST`', function(assert) {
  let result = US_STATES_LIST[30];
  let expect = {iso2: 'NM', name: 'New Mexico'};
  assert.deepEqual(result, expect);
});

test('Check the element 56 of list `US_STATES_LIST`', function(assert) {
  let result = US_STATES_LIST[56];
  let expect = {iso2: 'VI', name: 'Virgin Islands, U.S.'};
  assert.deepEqual(result, expect);
});

test('Check the length of list `US_MILITARY_STATES_LIST`', function(assert) {
  let result = US_MILITARY_STATES_LIST.length;
  assert.equal(result, 3);
});

test('Check the element 0 of list `US_MILITARY_STATES_LIST`', function(assert) {
  let result = US_MILITARY_STATES_LIST[0];
  let expect = {iso2: 'AA', name: 'Armed Forces America'};
  assert.deepEqual(result, expect);
});

test('Check the length of list `US_REQUIRING_CUSTOM_DECLARATION_STATES_LIST`', function(assert) {
  let result = US_REQUIRING_CUSTOM_DECLARATION_STATES_LIST.length;
  assert.equal(result, 5);
});

test('Check the length of list `CA_STATES_LIST`', function(assert) {
  let result = CA_STATES_LIST.length;
  assert.equal(result, 13);
});

test('Check the keys of dict `STATES_BY_COUNTRIES`', function(assert) {
  let result = Object.keys(STATES_BY_COUNTRIES);
  let expect = ["US", "CA"];
  assert.deepEqual(result, expect);
});

test('Check that the default import is exporting all the lists', function(assert) {
  let result = Object.keys(STATES_LIST_DEFAULT);
  let expect = [
    "US_STATES_LIST",
    "US_MILITARY_STATES_LIST",
    "US_REQUIRING_CUSTOM_DECLARATION_STATES_LIST",
    "CA_STATES_LIST",
    "STATES_BY_COUNTRIES"
  ];
  assert.deepEqual(result, expect);
});
