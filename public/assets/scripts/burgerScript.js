(function ($) {
    'use strict';

    var $eatenSection = $('#eatenSection');
    var $uneatenSection = $('#uneatenSection');

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

        function createBurgerDiv(burger) {
            // decide where to append the burger div...
            if (burger.devoured) {
                $eatenSection.append(`<div>${burger.burger_name}</div>`)
            } else {
                $uneatenSection.append(`<div>${burger.burger_name}</div>`)
            }
        }

        function init() {
            $eatenSection.empty();
            $uneatenSection.empty();
            
            $.get('http://localhost:8080/api/burger', function (data) {
                for (var i = 0; i < data.length; i++) {
                    createBurgerDiv(data[i]);
                }
            });
        }

        init();
    });    
})($);