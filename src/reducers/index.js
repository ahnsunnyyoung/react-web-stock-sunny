import produce from "immer";
const baseState = {
    loading: false,
    error: "",
    stocks:[
        {
            "name": 'AAPL',
            "c": 261.74,
            "h": 263.31,
            "l": 260.68,
            "o": 261.07,
            "pc": 259.45,
            "t": 1582641000 
        },
        {
            "name": 'BMW',
            "c": 261.74,
            "h": 263.31,
            "l": 260.68,
            "o": 261.07,
            "pc": 259.45,
            "t": 1582641000 
        },
        {
            "name": 'CNN',
            "c": 261.74,
            "h": 263.31,
            "l": 260.68,
            "o": 261.07,
            "pc": 259.45,
            "t": 1582641000 
        },
    ]
    };

const reducer = produce((state, action) => {
    // switch(action.type){
    //     case "SET_MAP_ZOOM":
    //         state.mapZoom = action.payload;
    //         break;
    //     case "SET_MAP_CENTER":
    //         state.mapCenter = action.payload;
    //         break;
    //     case "FETCH_STORES":
    //         action.payload.stores.forEach(store => {
    //             state.stores[store.code] = store;
    //         });
    //         break;
    //     default:
    //         break;
    // }
}, baseState); 

export default reducer;