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
        text: 'ffmpeg',
        link: '/ffmpeg/'
      },
      {
        text: 'OpenGL',
        link: '/opengl/'
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
      '/algorithm/' : getAlgorithmSlidebar(),
      '/computer/' : getComputerSlidebar(),
      '/opengl/' : getOpenGLSlidebar(),
      '/ffmpeg/' : getFFMPEGSlidebar(),

    }

  },
  // extraWatchFiles: [
  //   '.vuepress/nav/zh.js'
  // ]
}



function getFFMPEGSlidebar() {

  return [
  
    {
      title: 'ffmpeg',
      collapsable: true,
      children: [
        '',
      ]
    },
    {
      title: '命令',
      collapsable: true,
      children: [
        'command',
      ]
    },
    {
      title: 'ffmpeg日志',
      collapsable: true,
      children: [
        'log',
      ]
    },

    {
      title: 'ffmpeg文件',
      collapsable: true,
      children: [
        'file',
      ]
    },
    {
      title: '重要类',
      collapsable: true,
      children: [
        'class',
      ]
    },




    
    
 
    
   ]

}


function getOpenGLSlidebar() {

  return [
  
    {
      title: 'OpenGL',
      collapsable: true,
      children: [
        '',
      ]
    },
    {
      title: '缓冲对象',
      collapsable: true,
      children: [
        'buffer',
      ]
    },
    {
      title: '着色器',
      collapsable: true,
      children: [
        'shaders',
      ]
    },
    
   ]

}

function getiOSSidebar() {
   return [
    {
      title: '基础',
      collapsable: true,
      children: [
        'base/dyld',
       
      ]
    },
    {
      title: 'Objc',
      collapsable: true,
      children: [
        'objc/strong',
        'objc/copy',
        'objc/weak',
      ]
    },
    {
      title: 'coreText',
      collapsable: true,
      children: [
        'core/ctfont',
        'core/ctframe',
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
        // 'directive',
        'branch',
        'back',
        'log'

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


function getComputerSlidebar() {
  return [
   {
     title: 'TCP',
     collapsable: true,
     children: [
       'establish',
       'closed'
     ]
   },
   {
     title: 'HTTP',
     collapsable: true,
     children: [
       'establish',
       'closed',
     ]
   }
  
  ]
}
