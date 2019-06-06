module.exports = {
  base: '/tag-validators/',
  title: 'tag-validators',
  description: 'nb',
  // base: '',
  themeConfig: {
    sidebar: [
      '/installation',
      '/basic-usage',
      '/validators/',
      {
        title: '全部验证器',
        collapsable: false,
        children: [
          '/validators/required',
          '/validators/number',
        ]
      }
    ],
    nav: [
      { text: 'Home', link: '/' }
    ]
  }
}