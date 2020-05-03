const Survey = require("./survey.js").Survey;
const Users = require("./users.js").Users;

const Data = {

    init() {
        this.survey = Survey;
        this.users = Users;
        this.careList = CareList;
    },

    getSurvey(id) {
        return this.survey[id]
    },

    addSurveyResult(userId, surveyId, data) {
        this.user[userId].surveyResults.append({
            "surveyId": surveyId,
            "surveyResult": Survey[surveyId].aggregate(data)
        });
    },

    getUserProfile(userId) {
        let user = this.users[userId];
        user.care = this.careList[user.careId].name;
        return user
    }
};

exports.Data = Data;