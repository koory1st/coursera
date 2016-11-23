/**
 * Created by guli on 2016/11/17.
 */
(function(){
    'use strict';

    var module = angular.module('myApp', []).controller('myController', DIcontroller);
    DIcontroller.$inject=['$scope'];
    function DIcontroller($scope){
        $scope.lunch_menu = '';
        $scope.message = '';
        $scope.fontColor = '';

        $scope.checkMenu = function(){
            var count = getCountSlipComma($scope.lunch_menu);
            var wordsObj = showWordsByMenuCount(count);
            $scope.message = wordsObj["words"];
            $scope.fontColor = wordsObj["fontColor"];
            $scope.borderColor = wordsObj["borderColor"];
        };
    }

    function getCountSlipComma(stringWithSplit){
        if (!stringWithSplit) {
            return 0;
        }
        var arryMenu = stringWithSplit.split(',');
        arryMenu = arryMenu.filter(filterEmpty);
        var menuCount = arryMenu.length;

        return menuCount;
    }

    function showWordsByMenuCount(count){
        var words = '';
        var fontColor = '';
        var borderColor = '';
        if (count){
            if (count <= 3) {
                words = 'Enjoy!';
            } else {
                words = 'Too much!';
            }
            fontColor = 'font_green';
            borderColor = 'border_green';
        } else {
            words = 'Please enter data first';
            fontColor = 'font_red';
            borderColor = 'border_red';
        }

        var rt = {
            words:words,
            fontColor:fontColor,
            borderColor:borderColor
        };
        return rt;
    }

    function filterEmpty(x) {
        if (x) {
            return true;
        } else {
            return false;
        }
    }

})();