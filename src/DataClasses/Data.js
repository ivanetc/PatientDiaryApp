const fs = require("fs");
const Survey = require("./survey.js").Survey;

const Data = {

    init(){
        // сожрать все json файлы из data
        this.survey = Survey;
        console.log(this.survey["0"])
    },

    getSurvey(id){
        return this.survey[id]
    }
};

exports.Data = Data;