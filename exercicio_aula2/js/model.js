angular.module('model', ['apiGIT']);

angular.module('model').factory('loadingModel', function($timeout){

    function tick(){
        if(l.progress < 100){
            l.progress++;
            $timeout(tick, 50);
        } else {
            l.progress_active = false;
        }
    }

    var l = {};
    l.progress = 0;
    l.progress_active = false;

    l.start = function(){
        l.progress = 0;
        l.progress_active = true;
        $timeout(tick, 50);
    }

    return l;

});

angular.module('model').factory('issuesModel', function(apiGIT){
    var issues = {};
    issues.issues = [];
    issues.loading = false;

    issues.get_issues = function(){
        issues.loading = true;
        user = 'freedomsponsors';
        repository = 'www.freedomsponsors.org';
    	apiGIT.load(user, repository).success(function(result){
    		issues.loading = false;
    		issues.issues = result;
    	});
    };
    
    return issues;

});