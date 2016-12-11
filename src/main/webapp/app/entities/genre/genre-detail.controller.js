(function() {
    'use strict';

    angular
        .module('vmwebApp')
        .controller('GenreDetailController', GenreDetailController);

    GenreDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Genre'];

    function GenreDetailController($scope, $rootScope, $stateParams, previousState, entity, Genre) {
        var vm = this;

        vm.genre = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('vmwebApp:genreUpdate', function(event, result) {
            vm.genre = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
