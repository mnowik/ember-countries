import {
  getCountry,
  isCountryWithoutZip,
  isCountryWithState
} from 'ember-countries';
import { module, test } from 'qunit';


module('Unit | Utility | country properties | getCountry', function() {
  test('Test with `US`', function(assert) {
    let result = getCountry('US');
    let expect = {iso2: 'US', iso3: 'USA', isoNumeric: '840', name: 'United States'};
    assert.deepEqual(result, expect);
  });

  test('Test with `USA`', function(assert) {
    let result = getCountry('USA');
    let expect = {iso2: 'US', iso3: 'USA', isoNumeric: '840', name: 'United States'};
    assert.deepEqual(result, expect);
  });

  test('Test with `840`', function(assert) {
    let result = getCountry('840');
    let expect = {iso2: 'US', iso3: 'USA', isoNumeric: '840', name: 'United States'};
    assert.deepEqual(result, expect);
  });

  test('Test with `FR`', function(assert) {
    let result = getCountry('FR');
    let expect = {iso2: 'FR', iso3: 'FRA', isoNumeric: '250', name: 'France'};
    assert.deepEqual(result, expect);
  });

  test('Test with `fr`', function(assert) {
    let result = getCountry('fr');
    let expect = {iso2: 'FR', iso3: 'FRA', isoNumeric: '250', name: 'France'};
    assert.deepEqual(result, expect);
  });

  test('Test with incorrect iso', function(assert) {
    let result = getCountry('AA');
    assert.equal(result, undefined);
  });

  test('Test with `""` input', function(assert) {
    let result = getCountry('');
    assert.equal(result, undefined);
  });

  test('Test with `null` input', function(assert) {
    let result = getCountry(null);
    assert.equal(result, undefined);
  });

  test('Test with `undefined` input', function(assert) {
    let result = getCountry(undefined);
    assert.equal(result, undefined);
  });

  test('Test with wrong isoNumeric `number` input', function(assert) {
    let result = getCountry(3);
    assert.equal(result, undefined);
  });
});

module('Unit | Utility | country properties | isCountryWithoutZip', function() {
  test('Test with `US` input', function(assert) {
    let result = isCountryWithoutZip('US');
    assert.equal(result, false);
  });

  test('Test with `UMI` input', function(assert) {
    let result = isCountryWithoutZip('USA');
    assert.equal(result, false);
  });

  test('Test with `581` input', function(assert) {
    let result = isCountryWithoutZip('840');
    assert.equal(result, false);
  });

  test('Test with `NU` input', function(assert) {
    let result = isCountryWithoutZip('NU');
    assert.equal(result, true);
  });

  test('Test with `null` input', function(assert) {
    let result = isCountryWithoutZip(null);
    assert.equal(result, false);
  });

  test('Test with `""` input', function(assert) {
    let result = isCountryWithoutZip('');
    assert.equal(result, false);
  });

  test('Test with `undefined` input', function(assert) {
    let result = isCountryWithoutZip(undefined);
    assert.equal(result, false);
  });

  test('Test with `number` input', function(assert) {
    let result = isCountryWithoutZip(3);
    assert.equal(result, false);
  });
});

module('Unit | Utility | country properties | isCountryWithState', function() {
  test('Test with `US` input', function(assert) {
    let result = isCountryWithState('US');
    assert.equal(result, true);
  });

  test('Test with `NU` input', function(assert) {
    let result = isCountryWithState('FR');
    assert.equal(result, false);
  });

  test('Test with `null` input', function(assert) {
    let result = isCountryWithState(null);
    assert.equal(result, false);
  });

  test('Test with `""` input', function(assert) {
    let result = isCountryWithState('');
    assert.equal(result, false);
  });

  test('Test with `undefined` input', function(assert) {
    let result = isCountryWithState(undefined);
    assert.equal(result, false);
  });

  test('Test with `number` input', function(assert) {
    let result = isCountryWithState(3);
    assert.equal(result, false);
  });
});
