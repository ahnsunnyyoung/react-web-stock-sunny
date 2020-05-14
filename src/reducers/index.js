import produce from "immer";
const baseState = {
    loading: false,
    error: "",
    stocks:{
    },
    news:{
    },
    selected: undefined,
};



const reducer = produce((state, action) => {
    switch(action.type){
        case "COMPANY_SELECT":
            state.selected = action.payload;
            break;
        case "LOAD_STOCK":
            if(state.stocks[action.payload[0].ticker]){
            }
            
            state.stocks[action.payload[0].ticker] = action.payload[0] || {};
            action.payload[1].forEach(item => {
                if(state.news[item.id]){
                }else{
                    state.news[item.id] = item || {};
                }
            });
            

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