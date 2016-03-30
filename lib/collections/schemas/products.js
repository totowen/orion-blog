/**
 * Now we will define and attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Products.attachSchema(new SimpleSchema({
 // here is where we define `a comment has one post`
  // Each document in Comment has a postId
  postId: orion.attribute('hasOne', {
    // the label is the text that will show up on the Update form's label
    label: 'Post'
  }, {
    // specify the collection you're making the relationship with
    collection: Posts,
    // the key whose value you want to show for each Post document on the Update form
    titleField: 'title',
    // dunno
    publicationName: 'postIdForProducts',
  }),
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
    publicationName: 'userIdForProducts',
  }),
  price: {
    type: Number,
    label:'价格',
    optional: true,
    min: 0.0,
  },
  number: {
    type: Number,
    label:'数量',
    optional: true,
    min: 0,
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
      label: '产品图片',
      optional: true
  }),
  /**
   * Here it's the same with an image attribute.
   * summernote is an html editor.
   */
  body: orion.attribute('summernote', {
      label: '产品描述'
  }),
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));