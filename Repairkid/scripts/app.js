(function () {
    'use strict';

    var serviceId = 'app';

    // TODO: replace app with your module name
    angular.module('app').factory(serviceId, ['$http', app]);

    function app($http) {
        // Define the functions and properties to reveal.
        var service = {
            getData: getData
        };

        return service;

        function getData() {

        }

        //#region Internal Methods        

        //#endregion
    }
})();