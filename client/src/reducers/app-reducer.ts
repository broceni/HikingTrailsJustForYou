import { INIT_HIKES, INIT_COORDS, UPDATE_USER, UPDATE_FILTER, UPDATE_HIKING_LEVEL } from "../redux/action-types";
import { User, Hikes, ZipCoords } from '../common/model';
import GetCoords from "../Location";

interface State {
    hikes: Hikes[];
    user: User;
    gear: any;
    coords:  ZipCoords;

    // the array of hikes filtered down based on the string value 
    // example: easy_and_chill, challenge_me ...
    desiredHikes: string[];
    hikingLevel: number | null;
}

const initialState = {
    hikes: [],
    user: {
        name: '',
        age: null,
        gender: '',
        zipCode: null,
        avgDailySteps: null,
        hikingExperience: null,
        activityLevel: null,
    },
    // TODO -- KALISE INSERT GEAR 
    gear: {},
    coords:{
        locations: [{
            latLng: {
                lat: 0,
                lng: 0
            }
        }]
    },
    // coords: [],

    desiredHikes: [],

    hikingLevel: null,
};

export default function(state: State = initialState, action) {
    switch (action.type) {
        case INIT_HIKES: {
            // desrtucture the hikes
            // const {  } = action.payload;
            return {
                ...state,
                hikes: action.payload
            }
        };
        case INIT_COORDS: {
            return {
                ...state,
                coords: action.payload
            }
        }; 
        case UPDATE_USER: {
            
            return {
                ...state,
                user: action.payload
            }
        }; 

        case UPDATE_FILTER: {
            
            return {
                ...state,
                // filteredHikes: result
                desiredHikes: action.payload
            }
        }; 
        
        case UPDATE_HIKING_LEVEL: {
            
            return {
                ...state,
                hikingLevel: action.payload
            }
        }; 
        default:
            return state;
    }
}