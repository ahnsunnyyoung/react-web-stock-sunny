import produce from "immer";
const baseState = {
    loading: false,
    error: "",
    stocks:[
        {
            c: 310.13,
            h: 310.29,
            l: 304.29,
            o: 305.64,
            pc: 303.74,
            t: 1589113772,
            name: 'Apple Inc',
            ticker: 'AAPL'
        }
    ],
    profile:[],
    };

const reducer = produce((state, action) => {
    switch(action.type){
        case "LOAD_STOCK":
            state.stocks.push(action.payload)
            break;
        case "LOAD_PROFILE":
            console.log("in")
            state.profile = action.payload
            break;
        case 'ERROR':
            state.error = action.payload;
            break;
        case 'CLEAR_ERRORS':
            state.error = null;
            break;
        case 'START_LOADING':
            state.loading = true;
            break;
        case 'END_LOADING':
            state.loading = false;
            break;
        default:
            break;
    }
}, baseState); 

export default reducer;