module.exports = {
  base: '/tg-validators/',
  title: 'tg-validators',
  description: 'nb',
  themeConfig: {
    sidebar: [
      '/',
      '/installation',
      '/basic-usage',
      '/validators/',
      {
        title: '全部验证器',
        collapsable: false,
        children: [
          '/validators/required',
          '/validators/number',

          '/validators/type',
          // '/validators/string',
          // '/validators/array',
          // '/validators/boolean',
          // '/validators/date',

          '/validators/regexp',

          '/validators/custom',
          '/validators/async',
        ]
      },
      '/register'
    ],
    nav: [
      { text: 'Home', link: '/' }
    ]
  }
}