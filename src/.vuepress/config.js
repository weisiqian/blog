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
        text: '博客',
        link: '/page/guide/introduction'
      },
      {
        text: 'Git',
        items: [
          { text: 'Git地址', link: 'https://github.com/weisiqian/blog' },
        ]
      }
    ],
    sidebar: [
      {
        title: '文章列表',
        collapsable: false,
        children: [
          ['/page/guide/introduction', '介绍'],
        ]
      }
    ]
  }
}