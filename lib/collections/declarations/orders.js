Orders = new orion.collection('orders', {
  singularName: 'order', // The name of one of these items
  pluralName: 'orders', // The name of more than one of these items
  link: {
    // *
    //  * The text that you want to show in the sidebar.
    //  * The default value is the name of the collection, so
    //  * in this case it is not necessary.

    title: '订单' 
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    // here we set which data columns we want to appear on the data table
    // in the CMS panel
    columns: [
      { 
        data: "orderId", 
        title: "订单号" 
      },
      orion.attributeColumn('file', 'image', '商品图片'),
      { 
        data: "productName", 
        title: "商品名称" 
      },
      {
        data:"totalPrice",
        title: "商品总价",
      },
      {
        data:"number",
        title: "商品数量",
      },
      {
        data:"username",
        title: "买家",
      },
      {
        data:"phone",
        title: "买家联系方式",
      },
      {
        data:"address",
        title: "买家地址",
      },
      orion.attributeColumn('createdAt','createdAt','创建时间'),
    ]
  }
});


// Create a new role
OrderRole = new Roles.Role('orderRole');

OrderRole.allow('collections.orders.index',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own orders
})

OrderRole.allow('collections.orders.update',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own orders
})

OrderRole.allow('collections.orders.insert',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own orders
})

OrderRole.allow('collections.orders.remove',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own orders
})

OrderRole.allow('collections.orders.showCreate',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own orders
})

OrderRole.allow('collections.orders.showUpdate',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own orders
})

OrderRole.allow('collections.orders.showRemove',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own orders
})

OrderRole.helper('collections.orders.indexFilter', function(){
  return {createdBy:this.userId};
})
