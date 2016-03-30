Products = new orion.collection('products', {
  singularName: 'product', // The name of one of these items
  pluralName: 'products', // The name of more than one of these items
  link: {
    // *
    //  * The text that you want to show in the sidebar.
    //  * The default value is the name of the collection, so
    //  * in this case it is not necessary.

    title: '产品管理' 
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
        data: "price", 
        title: "价格" 
      },
      { 
        data: "number", 
        title: "数量" 
      },
      orion.attributeColumn('file', 'image', '图片'),
      orion.attributeColumn('summernote', 'body', '内容'),
      orion.attributeColumn('createdAt','createdAt','创建时间'),
    ]
  }
});


// Create a new role
ProductRole = new Roles.Role('productRole');

ProductRole.allow('collections.products.index',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own products
})

ProductRole.allow('collections.products.update',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own products
})

ProductRole.allow('collections.products.insert',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own products
})

ProductRole.allow('collections.products.remove',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own products
})

ProductRole.allow('collections.products.showCreate',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own products
})

ProductRole.allow('collections.products.showUpdate',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own products
})

ProductRole.allow('collections.products.showRemove',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own products
})

ProductRole.helper('collections.products.indexFilter', function(){
  return {createdBy:this.userId};
})
