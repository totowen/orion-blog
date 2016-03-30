/**
 * Created by hasaa on 2016/2/1.
 */
Options.set('showExportTab',true);

//Orion Config
orion.config.add('siteKey','reCaptcha',{public :true});
orion.config.add('secretKey','reCaptcha',{secret : true});

//Templates
ReactiveTemplates.set("pages.notFound","notFound");
//ReactiveTemplates.set("pages.loading","notFound");