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
        this.users[userId].surveyResults.push({
            "surveyId": surveyId,
            "surveyScore": this.survey[surveyId].aggregate(data),
            "surveyResult": data,
            "date": "Здесь дата, но мне лень"
        });

        alert(this.survey[surveyId].aggregate(data));
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
        this.users[userId].careId = careId;
    },

    getRecommendations(userId) {
        return this.careList[this.users[userId].careId].recommendations
    },

    getDailyPlan(userId) {
        let plan = this.careList[this.users[userId].careId].dailyPlan;
        for (let pointId in plan) {
            plan[pointId].checked = this.users[userId].planImplementation.indexOf(pointId) !== -1;
        }
        return plan
    },

    checkPoint(userId, pointId) {
        this.users[userId].planImplementation.push(pointId)
    },

    getSurveyStatistic(userId, surveyId) {
        let surveyResults = [];
        if (surveyId === "1") {
            surveyResults = [
                ["дни", this.survey[surveyId].name],
                ["25.04", 70],
                ["26.04", 75],
                ["27.04", 70],
                ["28.04", 70],
                ["29.04", 70],
                ["30.04", 65],
                ["01.05", 75],
                ["02.05", 80],
                ["03.05", 75],
                ["04.05", 70],
            ]
        } else {
            surveyResults = [
                ["дни", this.survey[surveyId].name],
                ["25.04", 18],
                ["26.04", 18],
                ["27.04", 17],
                ["28.04", 18],
                ["29.04", 17],
                ["30.04", 17],
                ["01.05", 16],
                ["02.05", 17],
                ["03.05", 17],
                ["04.05", 18],
            ]
        }
        for (let result in this.users[userId].surveyResults) {
            if (result.surveyId === surveyId) {
                surveyResults.push(["05.05", result.surveyScore])
            }
        }
        return surveyResults
    },

    getCalendarStatistic() {
        return [
            [{type: 'date', id: 'Date'}, {type: 'number', id: 'Won/Loss'}],
            [new Date(2020, 4, 25), 1],
            [new Date(2020, 4, 26), 1],
            [new Date(2020, 4, 27), 1],
            [new Date(2020, 4, 28), 0],
            [new Date(2020, 4, 29), 1],
            [new Date(2020, 4, 30), 2],
            [new Date(2020, 5, 1), 2],
            [new Date(2020, 5, 2), 2],
            [new Date(2020, 5, 3), 2],
            [new Date(2020, 5, 4), 1],
        ]
    },

    getSurveyDecoding(surveyId) {
        return this.survey[surveyId].decoding
    },

    checkSurvey(userId, surveyId){
        let result = false;
        for (let survey in this.users[userId].surveyResults) {
            if (survey.surveyId === surveyId){
                result = true
            }
        }
        return result
    },

    uncheckPoint(userId, pointId) {
        this.users[userId].planImplementation.splice(this.users[userId].planImplementation.indexOf(pointId))
    },
};

exports.Data = Data;