import produce from "immer";
const baseState = {
    loading: false,
    error: "",
    stocks:[]
    };

const reducer = produce((state, action) => {
    switch(action.type){
        case "LOAD_STOCK":
            state.stocks.push(action.payload)
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