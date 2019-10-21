// var app = angular.module( "app", [ ] );
/**
 * Configuracion de las rutas de App
 * @see componente/menu/
 */
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'parciales/home.html'
    })
    .when('/alumnos',{
      templateUrl: 'parciales/alumnos.html'
    })
    .when('/componente',{
        templateUrl: 'parciales/componente.html'
    })
    .when('/componente2',{
      template: '<componente-boton></componente-boton>'
    })
    .when('/frutas',{
        template: '<componente-fruta></componente-fruta>'
    })
    .when('/progFuncional',{
      templateUrl: 'parciales/progFuncional.html'
    })
    .when('/creditos',{
      templateUrl: 'parciales/creditos.html'
    })
    .when('/promesa',{
      templateUrl: 'parciales/promesa.html'
    })
    .when('/servicios',{
      templateUrl: 'parciales/servicios.html'
    })
    .when('/canciones',{
      templateUrl: 'parciales/canciones.html'
    })
    .when('/formularios',{
      templateUrl: 'parciales/formulario.html'
    })
    .when('/detalle/:id',{
      templateUrl: 'parciales/detalle.html',
      controller: 'detalleController'
    })
    .when('/pokemon',{
      templateUrl: 'parciales/pokemon.html',
      controller: 'pokemonController'
    })
    .when('/pokemon/:name',{
      templateUrl: 'parciales/pokemonDetalle.html',
      controller: 'pokemonDetalleController'
    })
    .when('/ejercicio1',{
      template: '<componente-ejercicio1></componente-ejercicio1>',
    })
    .when('/ejercicio11',{
      template: '<componente-ejercicio11></componente-ejercicio11>',
    })
    .when('/ejercicio2',{
      template: '<componente-ejercicio2></componente-ejercicio2>',
    })
    .when('/ejercicio3',{
      template: '<componente-ejercicio3></componente-ejercicio3>',
    })
    .when('/evaluacion1',{
      template: '<componente-evaluacion1></componente-evaluacion1>',
    })
    .when('/tareas',{
      template: '<componente-tareas></componente-tareas>',
    })
    .when('/httpRequest',{
      template: '<componente-httprequest></componente-httprequest>',
    })
    .when('/localizacion',{
      template: '<componente-localizacion></componente-localizacion>',
    })
    .otherwise({
      redirectTo: '/'
    })

})
