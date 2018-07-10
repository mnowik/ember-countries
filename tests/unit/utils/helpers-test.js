import { getFormat, buildIndex } from 'ember-countries/utils/helpers';
import { module, test } from 'qunit';

module('Unit | Utility | getFormat', function() {
  test('getFormat with isoNumeric', function(assert) {
    let result = getFormat('123');
    assert.equal(result, 'isoNumeric');
  });

  test('getFormat with iso2', function(assert) {
    let result = getFormat('US');
    assert.equal(result, 'iso2');
  });

  test('getFormat with iso3', function(assert) {
    let result = getFormat('UMI');
    assert.equal(result, 'iso3');
  });

  test('getFormat with wrong value `Number`', function(assert) {
    let result = getFormat(1);
    assert.equal(result, null);
  });

  test('getFormat with wrong value `null`', function(assert) {
    let result = getFormat(null);
    assert.equal(result, null);
  });

  test('getFormat with wrong value `undefined`', function(assert) {
    let result = getFormat(undefined);
    assert.equal(result, null);
  });
});

module('Unit | Utility | buildIndex', function() {
  test('buildIndex with basic list', function(assert) {
    let result = buildIndex([{a: 1, b: 2}, {a: 3, b: 4}], 'a', undefined);
    let expect = {"1": {"a": 1, "b": 2}, "3": {"a": 3,"b": 4}};
    assert.deepEqual(result, expect);
  });

  test('buildIndex return index if already defined', function(assert) {
    let result = buildIndex([{a: 1, b: 2}, {a: 3, b: 4}], 'a', {already: 'exist'});
    let expect = {already: 'exist'};
    assert.deepEqual(result, expect);
  });

  test('buildIndex return index if already defined', function(assert) {
    let result = buildIndex([{a: 1, b: 2}, {a: 3, b: 4}], 'd', undefined);
    let expect = {undefined: {a: 3, b: 4}};
    assert.deepEqual(result, expect);
  });
});
