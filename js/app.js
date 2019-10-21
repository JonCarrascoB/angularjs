var app = angular.module('angularApp', [ 'ngRoute', 'ngSanitize', /*'jcs-autoValidate'*/]);

/*
// error de validacion custom
angular.module('angularApp')
    .run([
    'defaultErrorMessageResolver',
    function (defaultErrorMessageResolver) {
        
        defaultErrorMessageResolver.setI18nFileRootPath('js/lib');
        defaultErrorMessageResolver.setCulture('es-CO');

        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
          errorMessages['caracterMin'] = 'El nombre debe tener más de {0} caracteres';
          errorMessages['caracterMax'] = 'El nombre debe tener menos de {0} caracteres';
        });
    }
]);
*/


/**
* Servicio para Constantes
*/
app.constant("servicioConstantes", {"titulo": "Angular JS",
                                        "idioma": "es-ES",
                                        "version": "1.0",
                                        "autor": "Jon Carrasco",
                                        "gitHub": "https://github.com/JonCarrascoB/ejercicios-angularjs"
                                        }
);

/**
* Providers
*/

app.service("cancionProvider", CancionProvider);
app.service("pokemonProvider", PokemonProvider);

/**
* Servicio para values
*/

app.value("tamanyoInicialRectangulo",{
    ancho:5,
    alto:6
});

/**
* Ejemplo Servicio a traves de una clase
*/
//Clase rectangulo y rectangulo
function Rectangulo() {
    this.ancho=0;
    this.alto=0;

    this.setAncho=function(ancho) {
        this.ancho=ancho;
    }

    this.setAlto=function(alto) {
        this.alto=alto;
    }  

    this.getArea=function() {
        return this.ancho * this.alto;
    }
}

function Rectangulo2(tamanyoInicial) {
    this.ancho=tamanyoInicial.ancho;
    this.alto=tamanyoInicial.alto;

    this.setAncho=function(ancho) {
        this.ancho=ancho;
    }

    this.setAlto=function(alto) {
        this.alto=alto;
    }  

    this.getArea=function() {
        return this.ancho * this.alto;
    }
}

// definir el servicio
app.service("rectangulo2Service",['tamanyoInicialRectangulo',Rectangulo2]);
app.service("rectanguloService",Rectangulo);

/**
 * Filtro personalizado para capitalizar la primera letra de un String
 */


// definir el filtro en la app
app.filter('capitalizar',function(){
    return function (cadena){
        if( cadena != undefined && typeof cadena == 'string'){
            return cadena.charAt(0).toUpperCase() + cadena.slice(1);
        } else {
            return "";
        } 
    }
});

app.filter('capitalizarMedio', function(){
    return function(cadena, minLength, maxLength){
        if(cadena != undefined && typeof cadena == 'string'){
            if(angular.isNumber(minLength) && angular.isNumber(maxLength) && minLength >=0 && maxLength >= 0){
                return cadena.slice(0,minLength) + cadena.slice(minLength, maxLength).toUpperCase() + cadena.slice(maxLength);
            } else {
                return "";
            }
        } else {
            return "";
        }
    }
});

// ejercicio2
app.controller(
    'profesorCtrl', //nombre del controlador
    function($scope, $timeout){  // la programacion del controlador

        //propiedades del modelo
        $scope.esVisible = false;
        $scope.animacion = "animated fadeInUp";
        $scope.editando = {};
        $scope.profesor = {
            nombre: "Juan Carlos Pineda",
            bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
            edad: 47,
            foto: "img/juancarlos.jpg"
        };
    

        // funciones
        $scope.editar = function(){
            console.trace('click boton editar');
            $scope.esVisible = true;
            $scope.animacion = "animated fadeInUp";
            angular.copy($scope.profesor, $scope.editando);   
        }

        $scope.cancelar = function(){
            console.trace('click boton cancelar');
            $scope.editando = {};
            $scope.animacion = "animated fadeOutDown";

            $timeout(function(){
                console.debug('esVisible = false');
                $scope.esVisible = false;
            }, 1000);
        }

        $scope.guardar = function(){
            console.trace('click boton guardar');
            $scope.animacion = "animated fadeOutDown";

            $timeout(function(){
                console.debug('esVisible = false');
                angular.copy($scope.editando, $scope.profesor);
                $scope.esVisible = false;
            }, 1000); 
        }
    }
); //end profesorCtrl

app.controller(
    'videoCtrl', //nombre del controlador
    function($scope,$timeout){  // la programacion del controlador

        //variable del modelo
        $scope.animacion = "";
        $scope.video = {
            id: "1",
            titulo: "Fary",
            codigo: "NFkI-zxZlHo",
            usuario: {
                id: 22,
                nombre: "Ramoncin"
            },
            categoria: {
                id: 3,
                nombre: "Musica"
            },
            likes: 5
        }

        $scope.sumarLikes = function(){
            console.trace('click boton like');
            $scope.animacion = "animated pulse";
            $scope.video.likes++;
 
            $timeout(function(){
                 $scope.animacion = "";
            }, 1000);
        }
    }
); //end videoCtrl

/* funcion para realizar el ng-repeat en el index */
app.controller( 'frutas2Ctrl', function($scope){

    $scope.frutas = ["Manzana", "Pera", "Kiwi", "Pomelo", "Sandia"];
    $scope.frutaSeleccionada = "";
    $scope.frutasJson = { "fruta":[
        {
            "nombre" : "Manzana",
            "color" : "Rojo"
        },
        {
            "nombre" : "Maracuya",
            "color" : "Lima"
        },
        {
            "nombre" : "Kiwi",
            "color" : "Verde"
        }
    ]};

    $scope.seleccionado = function( fruta ){
        console.log('click ' + fruta);
        $scope.frutaSeleccionada = fruta;        
    }


}); // end frutasCtrl