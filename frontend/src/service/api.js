import axios from 'axios';

var API_HOST = typeof window === 'undefined' ? 'http://localhost:8080' : '/api';

exports.getAll = function () {
    var url = API_HOST + '/helloItems/';
    return getUrl(url);
}


exports.getItem = function (id) {
    var url = API_HOST + '/helloItems/' + id;
    return getUrl(url);
}

function getUrl(url) {
    console.log("Getting " + url);

    // Return a promise that receives the actual data
    return axios.get(url).then(({ status, data, headers }) => {
        if (status === 200) {
            return data;
        } else {
            console.log("Non-OK status: " + status);
            throw "Status: " + status;
        }
    }).catch(function (response) {
        if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', response.message);
            throw response.message;
        } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log("Response: " + JSON.stringify(response.data));
            console.log("Status: " + response.status);
            //console.log(response.headers);
            //console.log(response.config);
            throw "Status: " + response.status;
        }
    });
}
