(function(){

    angular.
    module('angularApp').  //nombre App
    component('componenteHttprequest', { 
    templateUrl: './componentes/componente-httpRequest/componente-httpRequest.html',
    controller: function httpRequestCtrl($scope, $http, $timeout) {
    
        $scope.profesores = [];
        $scope.ocultar = false;
    
        // peticion http request mediante Ajax, es asincrona!!!
        console.debug('Llamada asincrona');
    
        $timeout(function(){
    
            $http.get("../../json/profesores.json").then(function(data){
                console.trace('response OK %o', data);
                $scope.profesores = data;
                $scope.ocultar = true;
            });
    
        }, 3000);
    
        
        console.debug('Seguimos ejecutando otras secuencias');
    
    }
});
    
    
    
    
    
})();
    