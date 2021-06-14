
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
      // {
      //   text: "了解更加多",
      //   link: "/learnmore/",
      //   items: [
      //     { text: "初级篇", link: "/learnmore/part1/" },
      //     { text: "进阶篇", link: "/learnmore/part12/" },
      //     { text: "大神篇", link: "http://www.baidu.com" }
      //   ]
      // }
    
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
  extraWatchFiles: [
    '.vuepress/nav/zh.js'
  ]
}



function getFFMPEGSlidebar() {

  return [
  
    {
      title: 'ffmpeg',
      collapsable: true,
      children: [
        '',
        'class'
      ]
    },
    {
      title: 'ffmpeg命令',
      collapsable: true,
      children: [
        'cmd/ffmpeg_cmd',
        'cmd/ffplay_cmd',
        'cmd/ffprobe_cmd'
      ]
    },
    {
      title: 'ffmpeg重要结构体',
      collapsable: true,
      children: [
        'struct/avframe',
        'struct/avpackt',
        'struct/avfmt_ctx',
        'struct/avcodec_ctx',
        'struct/avio_ctx',
        'struct/avcodec',
        'struct/avstream',
      ]
    },
    {
      title: '解码',
      collapsable: true,
      children: [
        'play/time',
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
      title: 'YUV播放器',
      collapsable: true,
      children: [
        'yuv_play',
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

//iOS
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
      title: 'AVFoundation',
      collapsable: true,
      children: [
        'av/audio_session',
      ]
    },
    {
      title: 'coreText',
      collapsable: true,
      children: [
        'core/ctfont',
        'core/ctframe',
      ]
    },
    {
      title: '逆向',
      collapsable: true,
      children: [
        'cydia/aslr',
        'cydia/classdump'
      ]
    },


    
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

//基础
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
   },
   {
    title: '存储管理',
    collapsable: true,
    children: [
      'system/memory',
      'system/link',

    ]
  }
  ]
}
