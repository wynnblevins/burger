(function ($) {
    'use strict';

    var $eatenSection = $('#eatenSection');
    var $uneatenSection = $('#uneatenSection');

    $(document).ready(function () {
        var $burgerInput = $('#burgerInput');
        
        $('#addBurgerButton').on('click', function () {
            $.post('http://localhost:8080/api/burger', {
                burger_name: $burgerInput.val()
            }, function (data, status) {
                init();
            });  
        });

        $('.burgersSection').on('click', 'button.devourButton', function () {
            console.log('Inside devour button click method.');
        }); 

        function createBurgerDiv(burger) {
            // decide where to append the burger div...
            if (burger.devoured) {
                $eatenSection.append(`
                    <div class="row">
                        <div class="col-12">
                            <div class="card card-body bg-light">${burger.burger_name}</div>
                        </div>
                    </div>
                `);
            } else {
                $uneatenSection.append(`
                    <div class="row">
                        <div class="col-8">
                            <div class="card card-body bg-light">${burger.burger_name}</div>
                        </div>    
                        <div class="col-4">
                            <button type="button" class="devourButton btn btn-default">Devour It!</button>
                        </div>
                    </div>        
                `);
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