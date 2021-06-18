module.exports = {
  title: '博客文档',
  description: '博客文档博客文档博客文档博客文档',
  base: '/blog/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    nav:[
      {
        text: 'Git',
        link: '/page/git/自定义Git提交规范'
      },
      {
        text: 'Git源码',
        items: [
          { text: 'Git地址', link: 'https://github.com/weisiqian/blog' },
        ]
      }
    ],
    sidebar: [
      {
        title: 'Git',
        collapsable: false,
        children: [
          ['/page/git/自定义Git提交规范', '自定义Git提交规范'],
        ]
      }
    ]
  }
}