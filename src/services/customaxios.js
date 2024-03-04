import axios from 'axios';
const CUSTOMAXIOS = axios.create({
    headers: {
        // 'Content-type': 'application/json; charset=utf-8',
        // 'Accept':'application/json',
        // 'ForceUseSession':'true',
        'access-control-allow-origin': '*',
        'access-control-allow-methods':'*',
        // 'client_id':'6E92FB07AFECA0232461660B885F6F89',
        // 'client_secret':'B73F3EE5649707E1A97CD14CCD6B96B8D5B06579FCB963B835DF9AADB6C8335A',
        // 'grant_type':'client_credentials'
        'Accept':'*/*'
    }
});

CUSTOMAXIOS.interceptors.response.use(
    // unwrap response data
    (response ) => {
    console.log(response,"response in customaxios")
    return response},
    
    // catch statusCode != 200 responses and format error
    (error) => {
        if (error.response) {
            const errorData = {
                ...error.response.data,
                status: error.response.status
            };
            return Promise.reject(errorData);
        }
        return Promise.reject(new Error(error.message));
    }
);

export default CUSTOMAXIOS;