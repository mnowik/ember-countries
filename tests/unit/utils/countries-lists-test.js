import {
  COUNTRIES_LIST,
  COUNTRIES_WITHOUT_ZIP_LIST,
  COUNTRIES_WITH_STATES_LIST
} from 'ember-countries';
import COUNTRIES_LIST_DEFAULT from 'ember-countries/utils/countries-lists';
import { module, test } from 'qunit';


module('Unit | Utility | countries lists');

test('Check the length of list `COUNTRIES_LIST`', function(assert) {
  let result = COUNTRIES_LIST.length;
  assert.equal(result, 249);
});

test('Check the element 0 of list `COUNTRIES_LIST`', function(assert) {
  let result = COUNTRIES_LIST[0];
  let expect = {iso2: 'AF', iso3: 'AFG', isoNumeric: '4', name: 'Afghanistan'};
  assert.deepEqual(result, expect);
});

test('Check the element 20 of list `COUNTRIES_LIST`', function(assert) {
  let result = COUNTRIES_LIST[20];
  let expect = {iso2: 'BY', iso3: 'BLR', isoNumeric: '112', name: 'Belarus'};
  assert.deepEqual(result, expect);
});

test('Check the element 60 of list `COUNTRIES_LIST`', function(assert) {
  let result = COUNTRIES_LIST[60];
  let expect = {iso2: 'DK', iso3: 'DNK', isoNumeric: '208', name: 'Denmark'};
  assert.deepEqual(result, expect);
});

test('Check the element 90 of list `COUNTRIES_LIST`', function(assert) {
  let result = COUNTRIES_LIST[90];
  let expect = {iso2: 'GT', iso3: 'GTM', isoNumeric: '320', name: 'Guatemala'};
  assert.deepEqual(result, expect);
});

test('Check the element 130 of list `COUNTRIES_LIST`', function(assert) {
  let result = COUNTRIES_LIST[130];
  let expect = {iso2: 'MO', iso3: 'MAC', isoNumeric: '446', name: 'Macao'};
  assert.deepEqual(result, expect);
});

test('Check the element 200 of list `COUNTRIES_LIST`', function(assert) {
  let result = COUNTRIES_LIST[200];
  let expect = {iso2: 'SX', iso3: 'SXM', isoNumeric: '534', name: 'Sint Maarten (Dutch part)'};
  assert.deepEqual(result, expect);
});

test('Check the element 240 of list `COUNTRIES_LIST`', function(assert) {
  let result = COUNTRIES_LIST[240];
  let expect = {iso2: 'VE', iso3: 'VEN', isoNumeric: '862', name: 'Venezuela, Bolivarian Republic of'};
  assert.deepEqual(result, expect);
});

test('Check the element 248 of list `COUNTRIES_LIST`', function(assert) {
  let result = COUNTRIES_LIST[248];
  let expect = {iso2: 'ZW', iso3: 'ZWE', isoNumeric: '716', name: 'Zimbabwe'};
  assert.deepEqual(result, expect);
});

test('Check the length of list `COUNTRIES_WITHOUT_ZIP_LIST`', function(assert) {
  let result = COUNTRIES_WITHOUT_ZIP_LIST.length;
  assert.equal(result, 60);
});

test('Check the length of list `COUNTRIES_WITH_STATES_LIST`', function(assert) {
  let result = COUNTRIES_WITH_STATES_LIST.length;
  assert.equal(result, 2);
});

test('Check that the default import is exporting all the lists', function(assert) {
  let result = Object.keys(COUNTRIES_LIST_DEFAULT);
  let expected = [
    "COUNTRIES_LIST",
    "COUNTRIES_WITHOUT_ZIP_LIST",
    "COUNTRIES_WITH_STATES_LIST"
  ];
  assert.deepEqual(result, expected);
});
