(function(){
	angular.module('pokeApp', [])

.controller('MainCtrl', function($scope,$http){

	$scope.pokedex = [];
	
	$scope.randomPokemon = function(){
	
	var pokeId = Math.floor(Math.random() * 151) + 1;

	$http.get('http://pokeapi.co/api/v1/pokemon/' + pokeId).success(function(data){
		$scope.pokedex = data;
		$scope.pokeImg = $scope.newPokeImg($scope.pokedex)
		console.log($scope.pokedex);
	})
}


	$scope.newPokeImg = function(pokePic){
        return "http://pokeapi.co/media/img/"+pokePic.national_id+".png"
    }

});
})();