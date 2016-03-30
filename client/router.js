
FlowRouter.route('/', {
  name: "home",
  action: function() {
    //跳转到mainLayout这个模板，然后在这个模板中渲染home模板
    BlazeLayout.render("mainLayout", {content: "home"});
  }


});

FlowRouter.route('/posts/:limit?', {
  name: "postsLimit",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "postsLimit"});
  }
});

FlowRouter.route('/postItem/:postId?', {
  name: "postItem",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "postItem"});
  }
});

FlowRouter.notFound = {
  // Subscriptions registered here don't have Fast Render support.
  //subscriptions: function() {
  //
  //},
  action: function() {
    BlazeLayout.render("notFound");

  }
};


AccountsTemplates.configureRoute('verifyEmail', {
  name: 'verifyEmail',
  path: '/verify-email',
  redirect: '/admin'
});

AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetPassword',
  path: '/reset-password',
  redirect: '/admin'
});

AccountsTemplates.configureRoute('enrollAccount', {
  name: 'enrollAccount',
  path: '/enroll',
  redirect: '/admin'
});