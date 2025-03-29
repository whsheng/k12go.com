export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "K12 Go-汇聚全网最全的K12教学资源，让学习更轻松",
  description: "K12学习资源一站式导航平台，服务于全球K12用户群体，成为学生、家长、学校的好伙伴。",
  mainNav: [],
  links: {
    twitter: "https://twitter.com/Wang66610825311",
    github: "https://github.com/whsheng/k12go"
  }
}

export interface NavLink {
  /** 站点图标 */
  icon: string
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc: string
  /** 站点链接 */
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}


/** 
 * K12资源导航数据-自动生成 
 * 最后生成：2025-01-28 13:33:41
 */
export const NavData:NavData[] = 
[
    {
      "title": "教育政策",
      "items": [
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.moe.gov.cn&sz=64",
          "title": "中华人民共和国教育部",
          "desc": "国家教育政策发布、教育改革动态、重要通知公告的官方网站",
          "link": "http://www.moe.gov.cn/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.neea.edu.cn&sz=64",
          "title": "中国教育考试网",
          "desc": "权威发布各类国家教育考试信息，提供考试报名和成绩查询服务",
          "link": "http://www.neea.edu.cn/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.edu.cn&sz=64",
          "title": "中国教育和科研计算机网",
          "desc": "教育部教育信息化和网络安全重要平台",
          "link": "https://www.edu.cn/"
        }
     
      ]
    },
    {
      "title": "高考资讯",
      "items": [
        {
          "icon": "https://www.google.com/s2/favicons?domain=gaokao.chsi.com.cn&sz=64",
          "title": "阳光高考信息平台",
          "desc": "教育部授权的高考信息发布和考生服务平台",
          "link": "https://gaokao.chsi.com.cn/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.gaokao.com&sz=64",
          "title": "高考网",
          "desc": "提供高考资讯、志愿填报指导和历年真题",
          "link": "http://www.gaokao.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.eol.cn&sz=64",
          "title": "中国教育在线",
          "desc": "综合性教育门户网站，提供全面的高考资讯",
          "link": "https://www.eol.cn/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.smartstudy.com&sz=64",
          "title": "智课网",
          "desc": "提供高考备考指导和在线课程",
          "link": "http://www.smartstudy.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.dxsbb.com&sz=64",
          "title": "第一升学帮",
          "desc": "高考志愿填报咨询和报考指导平台",
          "link": "http://www.dxsbb.com/"
        }
      ]
    },
    {
      "title": "在线学习",
      "items": [
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.xueersi.com&sz=64",
          "title": "学而思网校",
          "desc": "专注K12在线教育的大型网络学习平台",
          "link": "https://www.xueersi.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.xuexi.cn&sz=64",
          "title": "学习强国",
          "desc": "综合性学习平台，包含丰富的教育资源",
          "link": "https://www.xuexi.cn/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.zxxk.com&sz=64",
          "title": "中学学科网",
          "desc": "中小学教学资源共享平台",
          "link": "http://www.zxxk.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.icourse163.org&sz=64",
          "title": "中国大学MOOC",
          "desc": "国家精品课程在线学习平台",
          "link": "https://www.icourse163.org/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.yuanfudao.com&sz=64",
          "title": "猿辅导",
          "desc": "提供中小学在线直播课程和个性化辅导",
          "link": "https://www.yuanfudao.com/"
        }
      ]
    },
    {
      "title": "学前教育",
      "items": [
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.61baby.com&sz=64",
          "title": "早教网",
          "desc": "专业的幼儿早期教育资源平台",
          "link": "http://www.61baby.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.youban.com&sz=64",
          "title": "幼班网",
          "desc": "幼儿园教育资源共享平台",
          "link": "http://www.youban.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.yejs.com.cn&sz=64",
          "title": "幼儿教师网",
          "desc": "幼儿教育教学资源和教师培训平台",
          "link": "http://www.yejs.com.cn/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.baobao88.com&sz=64",
          "title": "宝宝巴士",
          "desc": "儿童早教游戏和动画视频平台",
          "link": "http://www.baobao88.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.wow8.com.cn&sz=64",
          "title": "未来教育网",
          "desc": "学前教育资源分享和教学指导平台",
          "link": "http://www.wow8.com.cn/"
        }
      ]
    },
    {
      "title": "小学教育",
      "items": [
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.eduyun.cn&sz=64",
          "title": "国家教育资源公共服务平台",
          "desc": "权威的教育资源共享平台",
          "link": "http://www.eduyun.cn/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.xiaoxiaotong.org&sz=64",
          "title": "小小通",
          "desc": "小学教育综合服务平台",
          "link": "http://www.xiaoxiaotong.org/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.ksedu.cn&sz=64",
          "title": "快思聪教育",
          "desc": "小学在线学习和题库练习平台",
          "link": "http://www.ksedu.cn/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.xiaoxue123.com&sz=64",
          "title": "小学123",
          "desc": "小学各学科同步学习资源网站",
          "link": "http://www.xiaoxue123.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.jiajiao114.com&sz=64",
          "title": "家教114",
          "desc": "小学课外辅导和在线答疑平台",
          "link": "http://www.jiajiao114.com/"
        }
      ]
    },
    {
      "title": "初中教育",
      "items": [
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.zhongkao.com&sz=64",
          "title": "中考网",
          "desc": "初中学习资源和中考备考指导平台",
          "link": "http://www.zhongkao.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.yuwenmi.com&sz=64",
          "title": "语文迷",
          "desc": "初中语文学习资源网站",
          "link": "http://www.yuwenmi.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.mathchina.com&sz=64",
          "title": "数学中国",
          "desc": "初中数学在线学习平台",
          "link": "http://www.mathchina.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.physical.cn&sz=64",
          "title": "物理教学网",
          "desc": "初中物理教学资源平台",
          "link": "http://www.physical.cn/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.examw.com&sz=64",
          "title": "考试吧",
          "desc": "初中各科试题和备考资料",
          "link": "http://www.examw.com/"
        }
      ]
    },
    {
      "title": "高中教育",
      "items": [
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.jyeoo.com&sz=64",
          "title": "菁优网",
          "desc": "高中各学科在线题库和学习平台",
          "link": "http://www.jyeoo.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.866.com&sz=64",
          "title": "爱题库",
          "desc": "高中同步练习题和模拟试题平台",
          "link": "http://www.866.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.gaozhong.com&sz=64",
          "title": "高中网",
          "desc": "高中各科学习资源和备考材料",
          "link": "http://www.gaozhong.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.zybang.com&sz=64",
          "title": "作业帮",
          "desc": "高中课程辅导和在线答疑平台",
          "link": "http://www.zybang.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.hujiang.com&sz=64",
          "title": "沪江网校",
          "desc": "高中外语学习和考试培训平台",
          "link": "http://www.hujiang.com/"
        }
      ]
    },
    {
      "title": "教师资源",
      "items": [
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.teacher.com.cn&sz=64",
          "title": "中国教师网",
          "desc": "教师专业发展和教学资源平台",
          "link": "http://www.teacher.com.cn/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.jiaoshi.com.cn&sz=64",
          "title": "教师在线",
          "desc": "教师继续教育和教学研究平台",
          "link": "http://www.jiaoshi.com.cn/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.teachercn.com&sz=64",
          "title": "教师教育网",
          "desc": "教师培训和教学资源共享平台",
          "link": "http://www.teachercn.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.jiaoyu.com&sz=64",
          "title": "教育资源网",
          "desc": "教师教学设计和课件分享平台",
          "link": "http://www.jiaoyu.com/"
        },
        {
          "icon": "https://www.google.com/s2/favicons?domain=www.teacherclub.com.cn&sz=64",
          "title": "教师俱乐部",
          "desc": "教师交流和资源分享社区",
          "link": "http://www.teacherclub.com.cn/"
        }
      ]
    },
    {
      "title": "教育工具",
    "items": [
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.xmind.cn&sz=64",
        "title": "XMind思维导图",
        "desc": "帮助学生整理知识架构的思维导图工具",
        "link": "https://www.xmind.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wolframalpha.com&sz=64",
        "title": "Wolfram Alpha",
        "desc": "强大的数学计算和知识检索工具",
        "link": "https://www.wolframalpha.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.geogebra.org&sz=64",
        "title": "GeoGebra",
        "desc": "数学和几何可视化教学工具",
        "link": "https://www.geogebra.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.quizlet.com&sz=64",
        "title": "Quizlet",
        "desc": "在线制作和分享学习卡片的工具",
        "link": "https://www.quizlet.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.grammarly.com&sz=64",
        "title": "Grammarly",
        "desc": "英语写作检查和改进工具",
        "link": "https://www.grammarly.com/"
      }
    ]
  },
  {
    "title": "特色教育",
    "items": [
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.steam.edu.cn&sz=64",
        "title": "STEAM教育网",
        "desc": "科学、技术、工程、艺术和数学综合教育平台",
        "link": "http://www.steam.edu.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.artsedu.cn&sz=64",
        "title": "中国艺术教育网",
        "desc": "青少年艺术教育资源和活动平台",
        "link": "http://www.artsedu.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sports.edu.cn&sz=64",
        "title": "中国学校体育网",
        "desc": "青少年体育教育和竞赛信息平台",
        "link": "http://www.sports.edu.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sciencenet.cn&sz=64",
        "title": "科学网",
        "desc": "青少年科学普及和创新教育平台",
        "link": "http://www.sciencenet.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.creative-edu.cn&sz=64",
        "title": "创客教育网",
        "desc": "创新实践和创客教育资源平台",
        "link": "http://www.creative-edu.cn/"
      }
    ]
  }
]