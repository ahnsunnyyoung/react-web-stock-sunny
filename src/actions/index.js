import axios from 'axios';

const BASE_URL = "https://finnhub.io/api/v1/";
const API_KEY = "bqnc08frh5re7283le90";

export function loadStock(symbol) {
    return async (dispatch) => {
        dispatch({ type: 'START_LOADING' });
        dispatch({ type: 'CLEAR_ERRORS' });
        const s_url = `${BASE_URL}quote?`;
        const p_url = `${BASE_URL}/stock/profile2?`;
        const n_url = `${BASE_URL}/company-news?`;
        const e_url = `${BASE_URL}/calendar/earnings?`;
        var today = new Date();  
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

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
                from: date,
                to: date,
                token: API_KEY
            }});
            const earning = await axios(e_url, {params: {
                from: '2010-01-01',
                to: '2020-03-15',
                symbol: symbol,
                token: API_KEY
            }});
            const result =[];
            const earnings = [];
            company.data.diff = (company.data.c - company.data.pc).toFixed();
            company.data.percent = ((company.data.c - company.data.pc)/company.data.pc*100).toFixed(2);
            earning.data.earningsCalendar.forEach(item => {
                earnings.push(item.revenueActual)
            });
            company.data.ticker = symbol;
            company.data.profile = profile.data;
            company.data.earningsCalendar = earnings.reverse();
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

export function selectCompany(company){
    return {
        type: 'COMPANY_SELECT',
        payload: company
    };
}


export function loadForex(){
    return async (dispatch) => {
        const f_url = `${BASE_URL}/forex/rates?`;

        try{
            const forex = await axios(f_url, {params: {
                token: API_KEY
            }});
            dispatch({
                type: 'LOAD_FOREX',
                payload: forex.data.quote,
            });
        }catch(error){
            dispatch({
                type: 'ERROR',
                payload: error
            });
        }
    };
}


export function loadGeneralNews(){
    return async (dispatch) => {
        const f_url = `${BASE_URL}/news?`;

        try{
            const general = await axios(f_url, {params: {
                category: 'general',
                minId:2,
                token: API_KEY
            }});
            general.data = general.data.slice(0,4);
            dispatch({
                type: 'LOAD_GENERAL_NEWS',
                payload: general.data,
            });
        }catch(error){
            dispatch({
                type: 'ERROR',
                payload: error
            });
        }
    };
}

export function loadForexNews(){
    return async (dispatch) => {
        const f_url = `${BASE_URL}/news?`;

        try{
            const forex = await axios(f_url, {params: {
                category: 'forex',
                minId:2,
                token: API_KEY
            }});
            forex.data = forex.data.slice(0,4);
            dispatch({
                type: 'LOAD_FOREX_NEWS',
                payload: forex.data,
            });
        }catch(error){
            dispatch({
                type: 'ERROR',
                payload: error
            });
        }
    };
}