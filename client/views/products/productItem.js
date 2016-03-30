/**
 * Created by hasaa on 2016/3/7.
 */
Template.productItem.helpers({
    ownProduct:function(){
      return this.postId === Session.get('postIdtoProduct');
        console.log(Session.get('postIdtoProduct'));
    },
});