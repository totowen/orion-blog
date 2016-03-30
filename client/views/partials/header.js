/**
 * Created by hasaa on 2016/2/23.
 */
Template.header.helpers({
    pathForPostsLimit: function() {
        var routeName = "postsLimit";
        var params = {
            limit: 5
        };
        var queryParams = {};
        var path = FlowRouter.path(routeName, params, queryParams);

        return path;
    }
});