//众筹项目实体
Posts.attachSchema(new SimpleSchema({

 comments: orion.attribute('hasMany', {
    // the value inside the `comments` key will be an array of comment IDs
    type: [String],
    label: 'Comments for this Post',
    // optional is true because you can have a post without comments
    optional: true
  }, {
    collection: Comments,
    titleField: 'body',
    publicationName: 'commentsForPosts'
  }),
    farmId: orion.attribute('hasOne', {
        // the label is the text that will show up on the Update form's label
        label: '农场'
    }, {
        // specify the collection you're making the relationship with
        collection: Farms,
        // the key whose value you want to show for each Post document on the Update form
        titleField: 'farmName',
        // dunno
        publicationName: 'farmIdForPost',
    }),
 products: orion.attribute('hasMany', {
    // the value inside the `comments` key will be an array of comment IDs
    type: [String],
    label: 'Products for this Post',
    // optional is true because you can have a post without comments
    optional: true
  }, {
    collection: Products,
    titleField: 'body',
    publicationName: 'productsForPosts'
  }),
  
  title: {
    label:'项目标题',
    type: String
  },

  describe: {
    label:'描述',
    type:String
  },
    total: {
        type: Number,
        label:'预定总额',
        optional: true,
        min: 0.0,
    },
    already_total: {
        type: Number,
        label:'已筹集金额',
        optional: true,
        min: 0.0,
    },
    day: {
        type: Number,
        label:'总天数',
        optional: true,
        min: 0.0,
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
  /**
   * Here it's the same with an image attribute.
   * summernote is an html editor.
   */
  body: orion.attribute('summernote', {
      label: '内容'
  }),
  /**
   * This attribute sets the user id to that of the user that created
   * this post automatically.
   */
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));