import {countries, countriesWithoutZip, countriesWithState} from './countries-lists';


export function countryIsoToValue(iso) {
  // if there is no iso or no country we default to the ISO country.
  let countrySelected = countries.findBy('iso', (iso || "").toUpperCase());
  return (countrySelected ? (countrySelected.country ? countrySelected.country : (iso || "").toUpperCase()): (iso || "").toUpperCase());
}


export function countryIso3ToValue(iso3) {
  // if there is no iso or no country we default to the ISO country.
  let countrySelected = countries.findBy('iso3', (iso3 || "").toUpperCase());
  return (countrySelected ? (countrySelected.country ? countrySelected.country : (iso3 || "").toUpperCase()): (iso3 || "").toUpperCase());
}


export function isCountryWithoutZip(iso) {
  // return true if the country has not a required ZIP code
  return (countriesWithoutZip.indexOf((iso || "").toUpperCase()) >= 0);
}


export function isCountryWithState(iso) {
  // return true if the country has a required State.
  return (countriesWithState.indexOf((iso || "").toUpperCase()) >= 0);
}
