/**
 * Now we will define and attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Comments.attachSchema(new SimpleSchema({
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
    publicationName: 'postIdForComments',
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
    publicationName: 'userIdForComments',
  }),
  body: {
    type: String,
    optional: false,
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));