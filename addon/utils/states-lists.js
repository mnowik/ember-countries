import {A} from '@ember/array';

/*********************
 United States lists
 *********************/
export const US_STATES_LIST = A([
  {name: 'Alabama'                             , iso2: 'AL'},
  {name: 'Alaska'                              , iso2: 'AK'},
  {name: 'Arizona'                             , iso2: 'AZ'},
  {name: 'Arkansas'                            , iso2: 'AR'},
  {name: 'California'                          , iso2: 'CA'},
  {name: 'Colorado'                            , iso2: 'CO'},
  {name: 'Connecticut'                         , iso2: 'CT'},
  {name: 'Delaware'                            , iso2: 'DE'},
  {name: 'Florida'                             , iso2: 'FL'},
  {name: 'Georgia'                             , iso2: 'GA'},
  {name: 'Hawaii'                              , iso2: 'HI'},
  {name: 'Idaho'                               , iso2: 'ID'},
  {name: 'Illinois'                            , iso2: 'IL'},
  {name: 'Indiana'                             , iso2: 'IN'},
  {name: 'Iowa'                                , iso2: 'IA'},
  {name: 'Kansas'                              , iso2: 'KS'},
  {name: 'Kentucky'                            , iso2: 'KY'},
  {name: 'Louisiana'                           , iso2: 'LA'},
  {name: 'Maine'                               , iso2: 'ME'},
  {name: 'Maryland'                            , iso2: 'MD'},
  {name: 'Massachusetts'                       , iso2: 'MA'},
  {name: 'Michigan'                            , iso2: 'MI'},
  {name: 'Minnesota'                           , iso2: 'MN'},
  {name: 'Mississippi'                         , iso2: 'MS'},
  {name: 'Missouri'                            , iso2: 'MO'},
  {name: 'Montana'                             , iso2: 'MT'},
  {name: 'Nebraska'                            , iso2: 'NE'},
  {name: 'Nevada'                              , iso2: 'NV'},
  {name: 'New Hampshire'                       , iso2: 'NH'},
  {name: 'New Jersey'                          , iso2: 'NJ'},
  {name: 'New Mexico'                          , iso2: 'NM'},
  {name: 'New York'                            , iso2: 'NY'},
  {name: 'North Carolina'                      , iso2: 'NC'},
  {name: 'North Dakota'                        , iso2: 'ND'},
  {name: 'Ohio'                                , iso2: 'OH'},
  {name: 'Oklahoma'                            , iso2: 'OK'},
  {name: 'Oregon'                              , iso2: 'OR'},
  {name: 'Pennsylvania'                        , iso2: 'PA'},
  {name: 'Rhode Island'                        , iso2: 'RI'},
  {name: 'South Carolina'                      , iso2: 'SC'},
  {name: 'South Dakota'                        , iso2: 'SD'},
  {name: 'Tennessee'                           , iso2: 'TN'},
  {name: 'Texas'                               , iso2: 'TX'},
  {name: 'Utah'                                , iso2: 'UT'},
  {name: 'Vermont'                             , iso2: 'VT'},
  {name: 'Virginia'                            , iso2: 'VA'},
  {name: 'Washington'                          , iso2: 'WA'},
  {name: 'West Virginia'                       , iso2: 'WV'},
  {name: 'Wisconsin'                           , iso2: 'WI'},
  {name: 'Wyoming'                             , iso2: 'WY'},
  {name: 'District of Columbia'                , iso2: 'DC'},
  {name: 'American Samoa'                      , iso2: 'AS'},
  {name: 'Guam'                                , iso2: 'GU'},
  {name: 'Northern Mariana Islands'            , iso2: 'MP'},
  {name: 'Puerto Rico'                         , iso2: 'PR'},
  {name: 'United States Minor Outlying Islands', iso2: 'UM'},
  {name: 'Virgin Islands, U.S.'                , iso2: 'VI'}
]);


export const US_MILITARY_STATES_LIST = A([
  {name: 'Armed Forces America' , iso2: 'AA'},
  {name: 'Armed Forces European', iso2: 'AE'},
  {name: 'Armed Forces Pacific' , iso2: 'AP'}
]);


export const US_REQUIRING_CUSTOM_DECLARATION_STATES_LIST = A([
  'GU', 'AS', 'MP', 'PR', 'VI'
]);


/**************
 Canada lists
 **************/
export const CA_STATES_LIST = A([
  {name:'Alberta'                   , iso2: 'AB'},
  {name:'British Columbia'          , iso2: 'BC'},
  {name:'Manitoba'                  , iso2: 'MB'},
  {name:'New Brunswick'             , iso2: 'NB'},
  {name:'Newfoundland and Brunswick', iso2: 'NL'},
  {name:'Nova Scotia'               , iso2: 'NS'},
  {name:'Ontario'                   , iso2: 'ON'},
  {name:'Prince Edward Island'      , iso2: 'PE'},
  {name:'Quebec'                    , iso2: 'QC'},
  {name:'Saskatchewan'              , iso2: 'SK'},
  {name:'Northwest Territories'     , iso2: 'NT'},
  {name:'Nunavut'                   , iso2: 'NU'},
  {name:'Yukon'                     , iso2: 'YT'}
]);


export const STATES_BY_COUNTRIES = {
  US: A(US_STATES_LIST.concat(US_MILITARY_STATES_LIST)),
  CA: CA_STATES_LIST
};


export default {
  US_STATES_LIST,
  US_MILITARY_STATES_LIST,
  US_REQUIRING_CUSTOM_DECLARATION_STATES_LIST,
  CA_STATES_LIST,
  STATES_BY_COUNTRIES
};
