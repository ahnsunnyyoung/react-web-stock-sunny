import produce from "immer";
const baseState = {
    loading: false,
    error: "",
    stocks:[
        {
            c: 317.68,
            h: 319.1,
            l: 315.7501,
            o: 317.83,
            pc: 315.01,
            t: 1589292187,
            ticker: 'AAPL',
            profile: {
              country: 'US',
              currency: 'USD',
              exchange: 'NASDAQ NMS - GLOBAL MARKET',
              finnhubIndustry: 'Technology',
              ipo: '1980-12-12',
              logo: 'https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png',
              marketCapitalization: 1344207,
              name: 'Apple Inc',
              phone: '14089961010',
              shareOutstanding: 4334.335,
              ticker: 'AAPL',
              weburl: 'https://www.apple.com/'
            }
          }
    ],
    };

const reducer = produce((state, action) => {
    switch(action.type){
        case "LOAD_STOCK":
            console.log(action.payload)
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