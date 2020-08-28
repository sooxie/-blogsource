
module.exports = {
  title: 'sooxie',
  description : 'blog',
  base: '/blog/',
  home: true,
  themeConfig: {
    nav: [
      {
        text: 'iOS',
        link: '/ios/'
      },
      {
        text: '基础',
        link: '/computer/'
      },
      {
        text: 'Algorithm',
        link: '/algorithm/'
      },
      {
        text: '版本控制',
        link: '/version/'
      },
      {
        text: "了解更加多",
        link: "/learnmore/",
        items: [
          // { text: "初级篇", link: "/learnmore/part1/" },
          // { text: "进阶篇", link: "/learnmore/part12/" },
          // { text: "大神篇", link: "http://www.baidu.com" }
        ]
      }
    
    ],
    sidebar: {
      '/ios/' : getiOSSidebar(),
      '/version/' : getVersionSlidebar(),
      '/algorithm/' : getAlgorithmSlidebar()

    }

  },
  // extraWatchFiles: [
  //   '.vuepress/nav/zh.js'
  // ]
}

function getiOSSidebar() {
   return [
    {
      title: '基础',
      collapsable: true,
      children: [
        '',
        'a',
        'b',
        'weak'
      ]
    },
    {
      title: '进阶',
      collapsable: true,
      children: [
        'c',
        'd',
      ]
    },
    {
      title: 'coreText',
      collapsable: true,
      children: [
        'ctfont',
        'ctframe',
      ]
    }
   ]
}


function getVersionSlidebar () {

  return [
    {
      title: 'git',
      collapsable: false,
      children: [
        '',
        'directive',
        'branch'

      ]
    }
  ]

}


function getAlgorithmSlidebar() {
  return [
    {
      title: '数据结构',
      collapsable: true,
      children: [
        '',
        'linklist',
        'tree'
      ]
    }
  ]
}