/**
 * Created by hasaa on 2016/3/7.
 */
Template.productsList.onCreated(function() {
    var self = this;
    var postId = Session.get('postIdtoProduct');//获取postItem模板的postId
    console.log(postId);
    self.autorun(function() {
        self.subscribe('productsList',{postId:postId});
    });
});

Template.productsList.helpers({
    products:function(){

        return Products.find();//
    }
});