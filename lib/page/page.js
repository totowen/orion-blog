orion.pages.addTemplate({
    template: 'pagesSimple',
    name: 'Simple',
    description: '简易模板'
}, {
    content: orion.attribute('summernote', {
      label: 'Content'
    })
})

orion.pages.addTemplate({
    template: 'pagesDefault',
    name: 'Default',
    description: '默认模板'
}, {
    content: orion.attribute('summernote', {
      label: 'Content'
    })
})
