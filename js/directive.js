myApp.directive('customDirective', function($filter, $browser) {
    return {
        require: 'ngModel',
         



         link: function($scope, $element, $attrs, customCtrl) {
            

            var listener = function() {
                

                var value = $element.val().replace(/[^0-9]/g, '');
               

                $element.val($filter('tel')(value, false));
            };

            
            customCtrl.$parsers.push(function(viewValue) {
                

                return viewValue.replace(/[^0-9]/g, '').slice(0,10);
            });

          
            customCtrl.$render = function() {
                $element.val($filter('tel')(customCtrl.$viewValue, false));
            };

            $element.bind('change', listener);
            



            $element.bind('keydown', function(event) {
                var num = event.keyCode;
                
                if (num == 91 || (15 < num && num < 19) || (37 <= num && num <= 40)){
                    return;
                }
                $browser.defer(listener); 
            });

            $element.bind('paste cut', function() {
               

                $browser.defer(listener);
            });
        }

    };
});