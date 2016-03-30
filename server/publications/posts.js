Meteor.publish('postsList', function(options) {
	check(options,{
		limit:Number
	});
	return Posts.find({}, options);
});

Meteor.publish('postById', function(postId) {
	return Posts.find(postId);
});

Meteor.publish('productsList',function(postId){
	check(postId, String);
	return Products.find({'postId':postId});
});

