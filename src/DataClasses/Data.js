const Survey = require("./survey.js").Survey;
const Users = require("./users.js").Users;
const CareList = require("./careList.js").CareList;

const Data = {

    init() {
        this.survey = Survey;
        this.users = Users;
        this.careList = CareList;
    },

    getSurvey(surveyId) {
        return this.survey[surveyId]
    },

    addSurveyResult(userId, surveyId, data) {
        this.user[userId].surveyResults.append({
            "surveyId": surveyId,
            "surveyScore": Survey[surveyId].aggregate(data),
            "surveyResult": data
        });
    },

    getUserProfile(userId) {
        let user = this.users[userId];
        user.care = this.careList[user.careId].name;
        return user
    },

    getCareList() {
        let shortCareList = {};
        for (let careId in this.careList) {
            shortCareList[careId].name = this.careList[careId].name;
            shortCareList[careId].description = this.careList[careId].description;
        }
        return shortCareList
    },

    setCare(userId, careId) {
        this.users[userId].careId = careId
    },

    getRecommendations(careId) {
        return this.careList[careId].recommendations
    },

    getDailyPlan(userId, careId) {
        let plan = this.careList[careId].dailyPlan;
        for (let pointId in plan){
            plan[pointId].checked = this.users[userId].planImplementation.indexOf(pointId) !== -1;
        }
        return plan
    },

    checkPoint(userId, pointId) {
        this.users[userId].planImplementation.append(pointId)
    }
};

exports.Data = Data;