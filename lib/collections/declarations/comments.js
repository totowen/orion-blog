Comments = new orion.collection('comments', {
  singularName: 'comment', // The name of one of these items
  pluralName: 'comments', // The name of more than one of these items
  link: {
    // *
    //  * The text that you want to show in the sidebar.
    //  * The default value is the name of the collection, so
    //  * in this case it is not necessary.

    title: '商品评价' 
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    // here we set which data columns we want to appear on the data table
    // in the CMS panel
    columns: [
      orion.attributeColumn('createdBy', 'createdBy', '作者'),
      { 
        data: "postId", 
        title: "Post ID" 
      },
      orion.attributeColumn('createdAt','createdAt','创建时间'),
    ]
  }
});


// Create a new role
CommentRole = new Roles.Role('commentRole');

CommentRole.allow('collections.comments.index',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own comments
})

CommentRole.allow('collections.comments.update',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own comments
})

CommentRole.allow('collections.comments.insert',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own comments
})

CommentRole.allow('collections.comments.remove',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own comments
})

CommentRole.allow('collections.comments.showCreate',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own comments
})

CommentRole.allow('collections.comments.showUpdate',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own comments
})

CommentRole.allow('collections.comments.showRemove',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own comments
})

CommentRole.helper('collections.comments.indexFilter', function(){
  return {createdBy:this.userId};
})
