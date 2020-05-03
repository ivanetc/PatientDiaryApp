const Survey = require("./survey.js").Survey;

const Data = {

    init() {
        this.survey = Survey;
        this.users = {"0": {"surveyResults": []}}
    },

    getSurvey(id) {
        return this.survey[id]
    },

    addSurveyResult(userId, surveyId, data) {
        this.user[userId].surveyResults.append({
            "surveyId": surveyId,
            "surveyResult": Survey[surveyId].aggregate(data)
        });
    }
};

exports.Data = Data;