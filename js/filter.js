var app = angular.module('numberApp');


app.filter('tel', function () {
    return function (tel) {
        console.log(tel);
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/[^0-9]/g, 'num');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var starting, firstNumber, secondNumber;

        switch (value.length) {
            case 1:
            case 2:
            case 3:
                firstNumber = value;
                break;

            default:
                firstNumber = value.slice(0, 4);
                secondNumber = value.slice(4);
        }

        if(secondNumber){
            if(secondNumber.length>4){
                secondNumber = secondNumber.slice(0, 4) + '-' + secondNumber.slice(4,10);
            }
           

            return (firstNumber + "- " + secondNumber).trim();
        }
        
    };
});