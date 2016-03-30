Posts = new orion.collection('posts', {
  singularName: 'post', // The name of one of these items
  pluralName: 'posts', // The name of more than one of these items
  title: '众筹项目', // The title in the index of the collection
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case it is not necessary.
     */
    title: '众筹项目'
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "title", title: "标题" },
      /**
       * If you want to show a custom orion attribute in
       * the index table you must call this function
       * orion.attributeColumn(attributeType, key, label)
       */
      orion.attributeColumn('file', 'image', '图片'),
      orion.attributeColumn('summernote', 'body', '内容'),
      orion.attributeColumn('createdBy', 'createdBy', '作者'),
      orion.attributeColumn('createdAt','createdAt','创建时间')
    ]
  }
});

// Create a new role
EditorRole = new Roles.Role('editor');

//index

EditorRole.allow('collections.posts.index',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own posts
})
EditorRole.helper('collections.posts.indexFilter', function(){
  return {createdBy:this.userId};
})

// update
EditorRole.allow('collections.posts.showUpdate',function(userId, doc) {
  return true; // 让用户看到自己的更新按钮
})
EditorRole.allow('collections.posts.update',function(userId, doc) {
  return doc.createdBy === userId; // Will be allowed to edit his own posts
})

// insert
EditorRole.allow('collections.posts.showCreate',function(userId, doc) {
  return true; // 让用户看到自己的创建按钮
})
EditorRole.allow('collections.posts.insert',function(userId, doc) {
  return true; // Will be allowed to edit his own posts
})

//remove
EditorRole.allow('collections.posts.showRemove',function(doc) {
  return doc,createdBy === this.userId; // 让用户看到自己的删除按钮
})
EditorRole.allow('collections.posts.remove',function(userId, doc) {
  return doc.createdBy === userId; // Will be allowed to edit his own posts
})

