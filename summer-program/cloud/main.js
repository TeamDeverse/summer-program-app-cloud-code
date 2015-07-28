
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("getTimesForSiteWithUserSignups", function(request, response) {
  	var queryTimes = new Parse.Query("Times");
  	var querySignups = new Parse.Query("Signups");
  	queryTimes.equalTo("site_id", request.params.site_id);
  	querySignups.equalTo("user_id", request.params.user_id);
  	queryTimes.find().then(function(times){
  		querySignups.find().then(function(signups){
	  		for (var time in times) {
	  			var t = times[time].id;
	  			for (var signup in signups) {
	  				if (signups[signup].get("time_id") === t) {
	  					times[time].userSignUp = signups[signup].id;
	  				}
	  			}
			}
			response.success(times);
  		});
  	});
});

Parse.Cloud.define("getTimesForSiteWithUserSignupsByDate", function(request, response) {
	var queryTimes = new Parse.Query("Times");
  	var querySignups = new Parse.Query("Signups");
  	var date = new Date(request.params.date);
  	queryTimes.equalTo("site_id", request.params.site_id);
  	querySignups.equalTo("user_id", request.params.user_id);
  	queryTimes.find().then(function(times){
  		querySignups.find().then(function(signups){
	  		for (var time in times) {
	  			var t = times[time].id;
	  			for (var signup in signups) {
	  				if (signups[signup].get("time_id") === t) {
	  					times[time].userSignUp = signups[signup].id;
	  				}
	  			}
			}
			response.success(times);
  		});
  	});
});