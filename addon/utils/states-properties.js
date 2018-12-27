import {A} from '@ember/array';
import { isNone } from '@ember/utils';

import { getFormat, buildIndex } from './helpers';
import { getCountry, isCountryWithState } from './countries-properties';
import { STATES_BY_COUNTRIES, US_REQUIRING_CUSTOM_DECLARATION_STATES_LIST } from './states-lists';

let indexedByIso2;

export function getState(country, value) {
  let valueFormat = getFormat(value);
  if (valueFormat === null || valueFormat !== 'iso2') {return;}
  const STATES_LIST = getStatesForCountry(country);
  if (isNone(STATES_LIST)) {return;}

  let listIndexed = _getStatesListIndexed(STATES_LIST, valueFormat);
  let selectedState = listIndexed[value.toUpperCase()];

  if (!isNone(selectedState)) {
    return selectedState;
  }
}


export function getStatesForCountry(value) {
  if (!isCountryWithState(value)) {return;}
  let country = getCountry(value);

  return STATES_BY_COUNTRIES[country.iso2];
}


export function isCustomsDeclarationRequiredInUS(stateFrom, stateTo) {
  if (stateFrom === stateTo) {return false;}

  return A([stateFrom, stateTo]).any(state => {
    return US_REQUIRING_CUSTOM_DECLARATION_STATES_LIST.indexOf(state) !== -1;
  });
}


export function countryContainsState(country, state) {
  const STATES_LIST = getStatesForCountry(country);
  if (isNone(STATES_LIST)) {return false;}
  return STATES_LIST.mapBy('iso2').indexOf(state) !== -1;
}


function _getStatesListIndexed(LIST, code) {
  let index = {};
  if (code === 'iso2') {
    index = buildIndex(LIST, code, indexedByIso2);
    indexedByIso2 = index;
  }
  return index;
}
