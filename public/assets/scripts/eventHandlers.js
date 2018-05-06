(function ($) {
    'use strict';
    
    $(document).ready(function () {
        var $burgerInput = $('#burgerInput');
        
        $('#addBurgerButton').on('click', function () {
            console.log('Inside add burger frontend click event');

            $.post('http://localhost:8080/api/burger', {
                burger_name: $burgerInput.val()
            }, function (data, status) {
                console.log('Inside success handler of POST');
                init();
            });  
        });

        function init() {
            $.get('http://localhost:8080/api/burger', function (data) {
                console.log('inside GET success handler.');
                console.log('data is: ' + data);
            });
        }

        init();
    });    
})($);

