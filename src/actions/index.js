import axios from 'axios';

const BASE_URL = "https://finnhub.io/api/v1/";
const API_KEY = "bqnc08frh5re7283le90";

export function loadStock(company) {
    return async (dispatch) => {
        dispatch({ type: 'START_LOADING' });
        dispatch({ type: 'CLEAR_ERRORS' });
        const s_url = `${BASE_URL}quote?`;
        const p_url = `${BASE_URL}/stock/profile2?`;

        try{
            const result = await axios(s_url, {params: {
                symbol: company,
                token: API_KEY
            }});
            const name = await axios(p_url, {params: {
                symbol: company,
                token: API_KEY
            }});
            result.data.name = name.data.name
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


