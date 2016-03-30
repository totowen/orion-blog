Template.postsList.onCreated(function() {
  var self = this;
  var postsLimit = FlowRouter.getParam('limit');
  var increment = 5;
  self.autorun(function() {
    var limit = parseInt(postsLimit)||increment;
    self.subscribe('postsList',{limit: limit});
  });
});

Template.postsList.helpers({
  posts: function() {
    var postsLimit = FlowRouter.getParam('limit');
    //console.log(postsLimit);
    Meteor.subscribe('postsList',{limit:parseInt(postsLimit)});
  	return Posts.find({},{ sort:{ createdAt: -1}});
  },

  pro_total:function(){
    var total = this.total;
    var already_total = this.already_total;
    var pro = (already_total/total)*100;
    return pro;
  },


  pathForPost: function() {
    var post = this;
    var params = {
        postId: post._id
    };
    var routeName = "postItem";
    var queryParams = {};
    var path = FlowRouter.path(routeName, params, queryParams);
    console.log(path);
    return path;
  },

  nextPath:function(){
    //////////////预备参数//////////////////////
    var limit = FlowRouter.getParam('limit');//获取路由中的limit参数
    //console.log(postsLimit);
    var increment = 5;//路由参数每次订阅的增加量
    var posts = Posts.find().count();//获取当前集合中的集合长度
    //console.log(postsLimit);
    //console.log(posts);
    ////////////////正式业务//////////////////////
    var hasMore = posts === parseInt(limit);//当前的路由参数和当前集合的数量相等
    //console.log(hasMore);
    //////////////构造路由/////////////////////
    var routeName = "postsLimit";
    var inCrease = parseInt(limit) + increment;
    var params = {
      limit:inCrease+''
    };
    //console.log(params);
    var queryParams = {};
    var nextPath = FlowRouter.path(routeName,params,queryParams);
    console.log(nextPath);
    //当前集合数量和当前路由参数相等时返回构造路径，在posts.list上显示loadmore...
    return hasMore ? nextPath : null;
  }

});