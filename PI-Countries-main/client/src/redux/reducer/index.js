import {
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_COUNTRY_NAME,
  GET_ALL_ACTIVITIES,
  FILTER_BY_ACTIVITIES,
  FILTER_BY_POPULATION,
  FILTER_BY_CONTINENT,
  CLEAN_DETAILS,
  ORDER_BY_NAME
} from "../actions/const";

const initialState = {
  allCountries: [],
  allActivities: [],
  details: [],
  activities: [],
  countries: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
        allActivities: action.payload,
      };
    case GET_COUNTRY_NAME:
      return {
        ...state,
        countries: action.payload,
      };
    case CLEAN_DETAILS:
      return {
        ...state,
        details: [],
      };
    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case ORDER_BY_NAME:
      const sortedArr =
        action.payload === "asc"
          ? [...state.countries].sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : [...state.countries].sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: sortedArr,
      };
    case FILTER_BY_POPULATION: //orden por poblacion
      const filPopulation =
        action.payload === "menor"
          ? [...state.countries].sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : [...state.countries].sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: filPopulation,
      };
    case "FILTER_BY_CONTINENT": //orden por continentes
      let totalCountries = {
        ...state.allCountries,
        filtered: state.allCountries,
      };
      let filtrado = totalCountries.filtered;
      let filter =
        action.payload === "All"
          ? state.allCountries
          : filtrado.filter((x) => x.continent?.includes(action.payload));

      return {
        ...state,
        countries: filter,
      };
    case "FILTER_BY_ACTIVITIES":
      const allActivities = state.countries;
      
      const activityFilter =
        action.payload === "All" 
          ? 
           state.allCountries
          : allActivities.filter(c => c.activities.some(a => a.name === action.payload));
            ;

            console.log(activityFilter)
      return {
        ...state,
        countries: activityFilter,
      };

    case "GET_COUNTRY_DETAIL":
      return {
        ...state,
        details: action.payload,
      };

    default:
      return state;
  }
}
