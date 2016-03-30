
//name String. This is the name of the definition.
//category String. The category of the definition. In the admin panel, the form will be separated by categories.
//attributeSchema Attribute. Here is where you customize the definition. Set it to String, Image, HTML, or anything!

orion.dictionary.addDefinition('name', 'disc', {
  type: String,
  label: 'Site Name',
  defaultValue: '农作众筹'
});

orion.dictionary.addDefinition('desc', 'disc', {
  type: String,
  label: 'Site Description',
  defaultValue: '欢迎来到众筹网'
});

orion.dictionary.addDefinition('logo', 'site',
    orion.attribute('image', {
    label: 'Site Logo',
    optional: true
    })
);
orion.dictionary.addDefinition('onepage-bg', 'image',
    orion.attribute('image', {
        label: 'onepage-bg',
        optional: true
    })
);