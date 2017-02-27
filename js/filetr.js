myApp.filter('tel', function () {
    return function (tel) {
        console.log(tel);
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var  firstNumber,secondNumber;

        switch (value.length) {
        case 1:
        case 2:
        case 3:
            firstNumber = value;
            break;

        default:
            firstNumber = value.slice(0, 3);
            secondNumber = value.slice(3);
    }

    if(secondNumber){
        if(secondNumber.length>3){
            secondNumber = secondNumber.slice(0, 3) + '-' + secondNumber.slice(3,7);
        }
        else{
            secondNumber = number;
        }

        return ("(" + firstNumber + ") " + secondNumber).trim();
    }
    else{
        return "(" + firstNumber;
    }

};

       