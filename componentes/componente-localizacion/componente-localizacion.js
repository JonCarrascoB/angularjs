angular.
    module('angularApp').  //nombre App
    component('componenteLocalizacion', { 
    templateUrl: './componentes/componente-localizacion/componente-localizacion.html',
    controller: function localizacionCtrl($scope, $http, $timeout, $sce) {

        $scope.loc = {};
        $scope.mostrar = true;
        //$scope.SERVICE_URL = 'http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK';
    
        // peticion http request mediante Ajax, es asincrona!!!
        console.debug('Llamada asincrona');
        var url = 'http://www.geoplugin.net/json.gp';
        var trustedUrl = $sce.trustAsResourceUrl(url);
        $scope.localizar = function(){
            $http.get(trustedUrl, {jsonpCallbackParam: 'callback'})
            .then(function(response){
                console.trace('Response Ok data = %o' + response);
                $scope.loc = response.data;
                $scope.mostrar = false;
                $scope.initMap();
            });
        }; //end localizar

        console.debug('Seguimos ejecutando otras secuencias');

        $scope.initMap = function() {
            var myLatLng = {lat: +$scope.loc.geoplugin_latitude, 
                            lng: +$scope.loc.geoplugin_longitude
            };

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: myLatLng
            });

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: $scope.loc.geoplugin_city
            });
        }; // end initMap

    }   
});