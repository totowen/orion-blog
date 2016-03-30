/**
 * Now we will define and attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Farms.attachSchema(new SimpleSchema({
  // here is where we define `a comment has one user (author)`
  // Each document in Comment has a userId
  userId: orion.attribute('hasOne', {
    type: String,
    label: '农场主',
    optional: false
  }, {
    collection: Meteor.users,
    // the key whose value you want to show on the Update form
    titleField: 'profile.name',
    publicationName: 'userIdForFarms',
  }),
  postId: orion.attribute('hasOne', {
    // the label is the text that will show up on the Update form's label
    label: '众筹项目'
  }, {
    // specify the collection you're making the relationship with
    collection: Posts,
    // the key whose value you want to show for each Post document on the Update form
    titleField: 'title',
    // dunno
    publicationName: 'postIdForFarm',
  }),
  farmName:{
    type:String,
    label:'农场名称',
    optional: false,
  },
  phoneNumber:{
    type:String,
    label:'联系电话',
    optional: false,
  },
  address: {
    type: String,
    label:'地址',
    optional: false,
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
      label: '农场图片',
      optional: true
  }),
  body: {
    type: String,
    label:'农场介绍',
    optional: false,
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));