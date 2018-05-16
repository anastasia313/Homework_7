var questions = [
    {
        'text' : 'Введите вашу фамилию',
        'data' : '',
        'type': 'string',
    },
    {
        'text' : 'Введите ваше имя',
        'data' : '',
        'type': 'string',
    },
    {
        'text' : 'Введите ваше отчество',
        'data' : '',
        'type': 'string',
    },
    {
        'text' : 'Введите ваш возраст',
        'data' : 0,
        'type': 'number',
    },
    {
        'text' : 'Ваш пол - мужской?',
        'data' : '',
        'type': 'boolean',
    }

];

var dataAlertPattern = ["ФИО: ", "возраст, лет: ", "возраст, дней: ", "пол: ", "пенсионный возраст: "];

function invokeCallbackForUserEnter(question){
    question.data = (question.type === 'boolean') ? confirm(question.text) : prompt(question.text);
}

function getData(questions) {
     for(let i = 0; i < questions.length; i++){
         invokeCallbackForUserEnter(questions[i]);
     }
}

function getFullName(questions, pattern){
    let result = pattern;
    for(let i = 0; i <= 2; i++) { result += questions[i].data + ' '; }
    return result + '\n';
}

function getGenderData(questions,alertPattern) {
    let result = '';
    if(questions[4].data) {
        result = alertPattern[3] + ' мужской\n';
        parseInt(questions[3].data) >= 61 ? result += alertPattern[4] + ' да' : result += alertPattern[4] + ' нет';
    } else {
        result = alertPattern[3] + ' женский\n';
        parseInt(questions[3].data) >= 56 ? result += alertPattern[4] + ' да' : result += alertPattern[4] + ' нет';
    }
    return result;
}

function prepareDataAndAlert(questions, alertPattern) {
    let result = getFullName(questions, alertPattern[0]);
    result += alertPattern[1] + questions[3].data + '\n' + alertPattern[2] + parseInt(questions[3].data)*365 + '\n';
    result += getGenderData(questions,alertPattern);
    alert(result);
}


 getData(questions);
prepareDataAndAlert(questions,dataAlertPattern);