const http = require('http');
const DBData = require("~/DBClasses/DBData.js").DBData;
const DB = require("~/DBClasses/DB.js").DBConnect;

const ServerConnecter = {

    auth(login, password) {
        console.log("Connecting");
        let authString = login + ":" + password;
        //process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
        console.error("process");
        return http.request({
            url: ServerAPI.requestAuth,
            method: "GET",
            headers: {Authorization: "Basic " + Buffer.from(authString).toString('base64')},
            agentOptions: {rejectUnauthorized: false}
        }).then(response => {
            // console.error(response.content);
            if (response.content.toJSON().key !== undefined) {
                this.token = response.content.toJSON().key;

                return true
            } else
                return false
        })
    },

    tokenAuth(token) {
        console.log("TOKEN" + token);

        return http.request({
            url: ServerAPI.requestUser,
            method: "GET",
            headers: {Authorization: "Bearer " + token}
        }).then(response => {
                if (response.content.toJSON().name !== undefined) {
                    this.token = token;
                    return true;
                } else
                    return false;
            })
    },

    getData(apiRequest) {
        let token = this.token;
        //if (token === undefined) token = DBData.getToken();

        return http.request({
            url: apiRequest + paginationPostfix,
            method: "GET",
            headers: {Authorization: "Bearer " + token}
        }).then(responce => {
            let result = responce.content.toJSON();
            return result;
        })

    },
};

const ServerAPI = {
    requestPartners: "https://api.alumnispbu.net/privilege/partners",
    requestPoints: "https://api.alumnispbu.net/privilege/points",
    requestCities: "https://api.alumnispbu.net/privilege/cities",
    requestMetroStations: "https://api.alumnispbu.net/privilege/metro",
    requestEvents: "https://api.alumnispbu.net/events/items",
    requestUser: "https://api.alumnispbu.net/users/me",
    requestAuth: "https://api.alumnispbu.net/auth"
};

// const paginationPostfix = "";
const paginationPostfix = "?per-page=1000";



exports.ServerAPI = ServerAPI;
exports.ServerConnecter = ServerConnecter;
