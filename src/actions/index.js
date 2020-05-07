import axios from 'axios';

const BASE_URL = "https://finnhub.io/api/v1/";
const API_KEY = "bqnc08frh5re7283le90";
// quote?symbol=AAPL&token=bqnc08frh5re7283le90

export function loadStock(company) {
    return async (dispatch) => {
        dispatch({ type: 'START_LOADING' });
        dispatch({ type: 'CLEAR_ERRORS' });
        const url = `${BASE_URL}quote?`;

        try{
            const result = await axios(url, {params: {
                symbol: company,
                token: API_KEY
            }});
            result.data.name = company;
            dispatch({
                type: 'LOAD_STOCK',
                payload: result.data
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

