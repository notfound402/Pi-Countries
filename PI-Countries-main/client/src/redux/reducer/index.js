const initialState = {
  allCountries: [],
  countriesName: [],
  details: [],
  activities: [],
  countries: [],
  filtered: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
    case "GET_COUNTRY_NAME":
      return {
        ...state,
        countries: action.payload,
      };
    case "CLEAN_DETAILS":
      return {
        ...state,
        details: [],
      };
    case "ORDER_BY_NAME":
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
    case "FILTER_BY_POPULATION": //orden por poblacion
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
      const countriesAct = state.allCountries;
      const countriesactivities = countriesAct.filter((e) => {
        return e.activities.includes(action.payload);
      });
      return {
        ...state,
        countries: countriesactivities,
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
