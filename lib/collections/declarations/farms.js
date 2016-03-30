Farms = new orion.collection('farms', {
  singularName: '农场', // The name of one of these items
  pluralName: '农场列表', // The name of more than one of these items
  link: {
    // *
    //  * The text that you want to show in the sidebar.
    //  * The default value is the name of the collection, so
    //  * in this case it is not necessary.

    title: '农场' 
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    // here we set which data columns we want to appear on the data table
    // in the CMS panel
    columns: [
      orion.attributeColumn('createdBy', 'createdBy', '农场主'),
      { 
        data: "farmName", 
        title: "农场名称" 
      },
      { 
        data: "phoneNumber", 
        title: "联系电话" 
      },
      { 
        data: "address", 
        title: "地址" 
      },
      orion.attributeColumn('file', 'image', '农场图片'),
      orion.attributeColumn('createdAt','createdAt','创建时间'),
    ]
  }
});


// Create a new role
FarmRole = new Roles.Role('farmRole');

FarmRole.allow('collections.farms.index',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own farms
})

FarmRole.allow('collections.farms.update',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own farms
})

FarmRole.allow('collections.farms.insert',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own farms
})

FarmRole.allow('collections.farms.remove',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own farms
})

FarmRole.allow('collections.farms.showCreate',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own farms
})

FarmRole.allow('collections.farms.showUpdate',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own farms
})

FarmRole.allow('collections.farms.showRemove',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own farms
})

FarmRole.helper('collections.farms.indexFilter', function(){
  return {createdBy:this.userId};
})
