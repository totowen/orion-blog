/**
 * Now we will define and attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Addresses.attachSchema(new SimpleSchema({
  // here is where we define `a comment has one user (author)`
  // Each document in Comment has a userId
  userId: orion.attribute('hasOne', {
    type: String,
    label: 'Author',
    optional: false
  }, {
    collection: Meteor.users,
    // the key whose value you want to show on the Update form
    titleField: 'profile.name',
    publicationName: 'userIdForAddresses',
  }),
  phoneNumber: {
    type: String,
    label:'联系电话',
    optional: false,
  },
  address: {
    type: String,
    label:'收货地址',
    optional: false,
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));