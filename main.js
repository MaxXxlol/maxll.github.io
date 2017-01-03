var app = angular.module('app', []);

app.controller('NewsController', function ($http, $scope,MyPosts){	
	$http.get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=3ba735c6314a497695b69827bcac8111")
		.success(function(result){
			console.log(result);
			console.log(result.results[0].byline);
			
			$scope.results = result.results;
			

		})
		.error(function(data, status){
			console.log(data);
			console.log(status);
		});
$scope.MyPosts=MyPosts;

});


app.controller('PostController', function ($http, $scope, MyPosts){	
	$scope.MyPosts=MyPosts;
	$scope.newPost = function(myPost){
		var x = clone(myPost);
		MyPosts.Info.push(x);
	}
});

app.factory('MyPosts',function(){
	return {
		Info: [
		
		]
	}
});

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}


app.filter('PostFilter',function(){
	return function(items,count){
		var filtered = items.slice(0,count);
		return filtered;
	}

});