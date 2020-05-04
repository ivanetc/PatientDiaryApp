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
        this.user[userId].surveyResults.push({
            "surveyId": surveyId,
            "surveyScore": this.survey[surveyId].aggregate(data),
            "surveyResult": data
        });
        return this.survey[surveyId].aggregate(data)
    },

    getUserProfile(userId) {
        let user = this.users[userId];
        user.care = this.careList[user.careId].name;
        return user
    },

    getCareList() {
        let shortCareList = {};
        for (let careId in this.careList) {
            shortCareList[careId] = {};
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
        this.users[userId].planImplementation.push(pointId)
    },

    getSurveyStatistic(userId, surveyId){
        let surveyResults = [];
        for (let result in this.users[userId].surveyResults){
            if (result.surveyId === surveyId) {
                surveyResults.push(result)
            }
        }
        return [0.1, 0.2, 0.3, 0]
    }
};

exports.Data = Data;