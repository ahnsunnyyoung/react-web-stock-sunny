import axios from 'axios';

const BASE_URL = "https://finnhub.io/api/v1/";
const API_KEY = "bqnc08frh5re7283le90";

export function loadStock(symbol) {
    return async (dispatch) => {
        dispatch({ type: 'START_LOADING' });
        dispatch({ type: 'CLEAR_ERRORS' });
        const s_url = `${BASE_URL}quote?`;
        const p_url = `${BASE_URL}/stock/profile2?`;
        const n_url = `${BASE_URL}/company-news?symbol=AAPL&from=2020-05-12&to=2020-05-12`;


        try{
            const company = await axios(s_url, {params: {
                symbol: symbol,
                token: API_KEY
            }});
            const profile = await axios(p_url, {params: {
                symbol: symbol,
                token: API_KEY
            }});
            const news = await axios(n_url, {params: {
                symbol: symbol,
                from: '2020-05-12',
                to: '2020-05-12,',
                token: API_KEY
            }});
            const result =[]
            company.data.ticker = symbol
            company.data.profile = profile.data
            result.push(company.data)
            result.push(news.data)
            dispatch({
                type: 'LOAD_STOCK',
                payload: result
            });
        }catch(error){
            dispatch({
                type: 'ERROR',
                payload: error
            });
        }finally{
            dispatch({ type: 'END_LOADING' });
        }
    };
}



