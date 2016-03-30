Template.postItem.onCreated(function() {
  var self = this;
  var postId = FlowRouter.getParam('postId');
  Session.set('postIdtoProduct',postId);
  self.autorun(function() {
    self.subscribe('postById', postId);  
  });
});

Template.postItem.helpers({
  post: function() {
    var postId = FlowRouter.getParam('postId');
    var post = Posts.findOne({_id: postId}) || {};
    return post;
  },

  pro_total:function(){
    var total = this.total;
    var already_total = this.already_total;
    var pro = (already_total/total)*100;
    return pro;
  },

  al_total:function(){
    var al_total = this.already_total;
    return al_total;
  },

  pathForBackPostsList:function(){
    ////////////预备参数///////////////
    var routeName = "postsLimit";
    var params = {
      limit: 5
    };
    var queryParams = {};
    ///////////构造路径////////////
    var path = FlowRouter.path(routeName, params, queryParams);

    return path;
  }
});