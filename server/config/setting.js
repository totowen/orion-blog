AccountsTemplates.configure({
   reCaptcha: {
        //secretKey: Meteor.settings.reCaptcha.secretKey
       secretKey:orion.config.get('secretKey')
    },
});