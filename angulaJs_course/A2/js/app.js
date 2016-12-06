/**
 * Created by guli on 2016/12/6.
 *
 */
(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var c1 = this;

        c1.toBuyList = ShoppingListCheckOffService.getToBuyList();

        console.log(c1.toBuyList.length);

        c1.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        };

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var c2 = this;

        c2.boughtList = ShoppingListCheckOffService.getBoughtList();
    }


    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyList = [
            {name: "cookies", quantity: 10},
            {name: "apples", quantity: 2},
            {name: "bananas", quantity: 3},
            {name: "cups", quantity: 7},
            {name: "orange", quantity: 8}
        ];

        var boughtList = [];

        service.getToBuyList = function () {
            return toBuyList;
        };

        service.getBoughtList = function () {
            return boughtList;
        };

        service.buyItem = function (index) {
            boughtList.push(toBuyList[index]);
            toBuyList.splice(index, 1);
        };
    }
})();