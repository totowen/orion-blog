/**
 * Now we will define and attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Orders.attachSchema(new SimpleSchema({
  // here is where we define `a comment has one user (author)`
  // Each document in Comment has a userId
  userId: orion.attribute('hasOne', {
    type: String,
    label: '买家',
    optional: false,
  }, {
    collection: Meteor.users,
    // the key whose value you want to show on the Update form
    titleField: 'profile.name',
    publicationName: 'userIdForOrders',
  }),
   orderId: {
    type: String,
    label:'订单号',
    optional: true
  },
  productName: {
    type: String,
    label:'商品名称',
    optional: true
  },
   /**
   * The file attribute is a custom orion attribute
   * This is where orion does its magic. Just set
   * the attribute type and it will automatically
   * create the form for the file.
   * WARNING: the url of the image will not be saved in
   * .image, it will be saved in .image.url.
   */
  image: orion.attribute('image', {
      label: '图片',
      optional: true
  }),
   totalPrice: {
    type: Number,
    label:'总价格',
    optional: true,
    min: 0.0,
  },
  number: {
    type: Number,
    label:'商品数量',
    optional: true,
    min: 0,
  },
  username: {
    type: String,
    label:'买家',
    optional: true
  },
  phone: {
    type: String,
    label:'买家联系电话',
    optional: true
  },
  address: {
    type: String,
    label:'买家收货地址',
    optional: true
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));