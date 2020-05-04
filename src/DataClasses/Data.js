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
        let surveyResults = [
            ["дни", this.survey[surveyId].name],
            ["25.04", 80],
            ["26.04", 75],
            ["27.04", 60],
            ["28.04", 65],
            ["29.04", 45],
            ["30.04", 45],
            ["01.05", 55],
            ["02.05", 60],
            ["03.05", 70],
            ["04.05", 85],
        ];
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

    getSurveyDecoding(surveyId){
        return this.survey[surveyId].decoding
    }
};

exports.Data = Data;