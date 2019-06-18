module.exports = {
  title: 'tg-validators',
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

          '/validators/type',
          // '/validators/string',
          // '/validators/array',
          // '/validators/boolean',
          // '/validators/date',

          '/validators/regexp',

          '/validators/async',
        ]
      }
    ],
    nav: [
      { text: 'Home', link: '/' }
    ]
  }
}