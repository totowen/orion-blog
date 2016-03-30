Addresses = new orion.collection('addresses', {
  singularName: 'address', // The name of one of these items
  pluralName: 'addresses', // The name of more than one of these items
  link: {
    // *
    //  * The text that you want to show in the sidebar.
    //  * The default value is the name of the collection, so
    //  * in this case it is not necessary.

    title: '收货地址' 
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
        data: "phoneNumber", 
        title: "联系电话" 
      },
      { 
        data: "address", 
        title: "收货地址" 
      },
      orion.attributeColumn('createdAt','createdAt','创建时间'),
    ]
  }
});


// Create a new role
AddressRole = new Roles.Role('AddressRole');

AddressRole.allow('collections.addresses.index',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own addresses
})

AddressRole.allow('collections.addresses.update',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own addresses
})

AddressRole.allow('collections.addresses.insert',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own addresses
})

AddressRole.allow('collections.addresses.remove',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own addresses
})

AddressRole.allow('collections.addresses.showCreate',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own addresses
})

AddressRole.allow('collections.addresses.showUpdate',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own addresses
})

AddressRole.allow('collections.addresses.showRemove',function(userId, doc, fields, modifier) {
  return true; // Will be allowed to edit his own addresses
})

AddressRole.helper('collections.addresses.indexFilter', function(){
  return {createdBy:this.userId};
})
