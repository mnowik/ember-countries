import {countries, countriesWithoutZip, countriesWithState} from '../../../utils/countries-lists';
import { module, test } from 'qunit';


module('Unit | Utility | countries lists');

test('Check the length of list `countries`', function(assert) {
  var result = countries.length;
  assert.equal(result, 249);
});

test('Check the length of list `countriesWithoutZip`', function(assert) {
  var result = countriesWithoutZip.length;
  assert.equal(result, 60);
});

test('Check the length of list `countriesWithState`', function(assert) {
  var result = countriesWithState.length;
  assert.equal(result, 2);
});

test('Check the length of list `countries` with iso3', function(assert) {
  var result = countries.filter((c) => c.iso3).length;
  assert.equal(result, 249);
});
