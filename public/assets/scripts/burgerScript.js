(function ($) {
    'use strict';

    var $eatenSection = $('#eatenSection');
    var $uneatenSection = $('#uneatenSection');
    var burgerEndpoint = 'http://localhost:8080/api/burger';

    $(document).ready(function () {
        var $burgerInput = $('#burgerInput');
        
        $('#addBurgerButton').on('click', function () {
            $.post(burgerEndpoint, {
                burger_name: $burgerInput.val()
            }, function (data, status) {
                init();
            });  
        });

        $('.burgersSection').on('click', 'button.devourButton', function () {
            // updating the burger in db so that the row's devoured flag is set to true
            var clickItem = $(this);
            var putEndpoint = burgerEndpoint + '/' + clickItem.data('id')
            $.ajax({
                url: putEndpoint,
                method: 'PUT',
                data: {
                    id: clickItem.data('id'),
                    devoured: true,
                    burger_name: clickItem.data('name')
                }  
            }).done(() => {
                init();
            });
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
                            <button type="button" data-id="${burger.id}" class="devourButton btn btn-default">Devour It!</button>
                        </div>
                    </div>        
                `);
            }
        }

        function init() {
            $eatenSection.empty();
            $uneatenSection.empty();

            $.get(burgerEndpoint, function (data) {
                for (var i = 0; i < data.length; i++) {
                    createBurgerDiv(data[i]);
                }
            });
        }

        init();
    });    
})($);