import FTVLabsLogo from '~/assets/images/logo/FTVLabs.png';
import KMSLogo from '~/assets/images/logo/KMS.png';
import EpinionLogo from '~/assets/images/logo/EPINION.png';
import HVNLogo from '~/assets/images/logo/HVN.png';
import CSCLogo from '~/assets/images/logo/CSC.jpeg';
import sectionSVG from '~/assets/images/svg/section.svg';
import triangleSVG from '~/assets/images/svg/triangle.svg';
import squareSVG from '~/assets/images/svg/square.svg';
import circleSVG from '~/assets/images/svg/circle.svg';
import KegmilLogo from '~/assets/images/logo/Kegmil.png';
import HotscheduleLogo from '~/assets/images/logo/Hotschedule.png';
import InciteLogo from '~/assets/images/logo/incite.jpeg';
import EasycruiteLogo from '~/assets/images/logo/Easycruite.png';

export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page' },
        textWrapper: { className: 'banner2-text-wrapper' },
        bg: { className: 'bg bg0 kqk7r3jax1p-editor_css' },
        title: {
          className: 'banner2-title',
          children: (
            <>
              <div className="banner2-title-sub">Hello, I'm</div>
              <div>Huỳnh Quốc Thảo</div>
            </>
          )
        },
        content: {
          className: 'banner2-content',
          children: 'Lead FE Developer at FTVLabs',
        },
        button: {
          className: 'banner2-button',
          children: 'Download My CV',
          type: 'primary',
          onClick: () => window.open(`${window.location.origin}${`${process.env.PUBLIC_URL}/myCV.pdf`}`, '_blank'),
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children: <img src={sectionSVG} alt="img" />,
        className: 'title-image',
      },
      { name: 'title', children: 'Journey', className: 'title-h1' },
    ],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children: FTVLabsLogo,
          },
          icon: {
            className: 'block-icon',
            children: circleSVG,
          },
          name: { className: 'block-name', children: 'FTVLabs' },
          post: { className: 'block-post', children: 'Singapore' },
          time: { className: 'block-time', children: 'May 2018 - Present' },
          title: { className: 'block-title', children: 'Lead FE Developer' },
          content: {
            className: 'block-content',
            children: (
              <>
                <div>
                  <a href="https://app.kegmil.com/" target="_blank" rel="noreferrer">
                    <img src={KegmilLogo} alt="kegmil" style={{ height: 16 }} />
                  </a>
                </div>
                <ul>
                  <li>Field Service Management.</li>
                  <li><i>ReactJS (latest version), Redux, Redux Saga, Ant Design, Ant Pro.</i></li>
                </ul>
              </>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children: KMSLogo,
          },
          icon: {
            className: 'block-icon',
            children: triangleSVG,
          },
          name: { className: 'block-name', children: 'KMS Technology' },
          post: { className: 'block-post', children: 'Vietnam' },
          time: { className: 'block-time', children: 'May 2017 - May 2018' },
          title: { className: 'block-title', children: 'Senior Developer' },
          content: {
            className: 'block-content',
            children: (
              <>
                <div>
                  <a href="https://www.hotschedules.com/hs/login.jsp" target="_blank" rel="noreferrer">
                    <img src={HotscheduleLogo} alt="hotschedule" style={{ height: 24 }} />
                  </a>
                </div>
                <ul>
                  <li>Scheduling, Labor Management.</li>
                  <li><i>ReactJS (15), Redux, Redux Observable, Echo UI.</i></li>
                </ul>
              </>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children: EpinionLogo,
          },
          icon: {
            className: 'block-icon',
            children: triangleSVG,
          },
          name: { className: 'block-name', children: 'Epinion' },
          post: { className: 'block-post', children: 'Vietnam' },
          time: { className: 'block-time', children: 'Jun 2015 - Apr 2017' },
          title: { className: 'block-title', children: 'Senior FE Developer' },
          content: {
            className: 'block-content',
            children: (
              <>
                <div>
                  <a href="https://app.incite.pro/" target="_blank" rel="noreferrer">
                    <img src={InciteLogo} alt="incite" style={{ height: 16 }} />
                  </a>
                </div>
                <ul>
                  <li>Epinion’s Online Insights Platform.</li>
                  <li><i>AngularJS, Typescript, TDD, Bootstrap 3, ASP.Net, SQL Server.</i></li>
                </ul>
              </>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children: HVNLogo,
          },
          icon: {
            className: 'block-icon',
            children: triangleSVG,
          },
          name: { className: 'block-name', children: 'Harvey Nash' },
          post: { className: 'block-post', children: 'Vietnam' },
          time: { className: 'block-time', children: 'Sep 2014 - May 2015' },
          title: { className: 'block-title', children: 'Software Developer' },
          content: {
            className: 'block-content',
            children: (
              <>
                <div>
                  <img src={EasycruiteLogo} alt="easycruite" style={{ height: 32 }} />
                </div>
                <ul>
                  <li>CV Management.</li>
                  <li><i>Perl, Mason, jQuery.</i></li>
                </ul>
              </>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children: CSCLogo,
          },
          icon: {
            className: 'block-icon',
            children: squareSVG,
          },
          name: { className: 'block-name', children: 'CSC' },
          post: { className: 'block-post', children: 'Vietnam' },
          time: { className: 'block-time', children: 'Dec 2012 - Sep 2014' },
          title: { className: 'block-title', children: 'Associate Software Developer' },
          content: {
            className: 'block-content',
            children: (
              <>
                <div style={{ marginBottom: 16 }}><b>iPos Malaysia</b></div>
                <ul>
                  <li>Insurance Management.</li>
                  <li><i>AngularJS, Java, Bootstrap.</i></li>
                </ul>
              </>
            ),
          },
        },
      },
    ],
  },
};
export const Content80DataSource = {
  wrapper: { className: 'home-page-wrapper content8-wrapper' },
  page: { className: 'home-page content8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '特邀嘉宾', className: 'title-h1' },
    ],
  },
  block: {
    className: 'content-wrapper',
    children: [
      {
        name: 'block0',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block1',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block2',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block3',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block4',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block5',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block6',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block7',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
    ],
  },
};
export const Content100DataSource = {
  wrapper: { className: 'home-page-wrapper content10-wrapper' },
  Content: {
    className: 'icon-wrapper',
    children: {
      icon: {
        className: 'icon',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg',
        name: '主要图标',
      },
      iconShadow: {
        className: 'icon-shadow',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg',
        name: '图标影阴',
      },
      url: { children: 'https://gaode.com/place/B0FFH3KPBX', name: '跳转地址' },
      title: { children: '大会地址', name: '弹框标题' },
      content: {
        children: '蚂蚁 Z 空间  浙江省杭州市西湖区西溪路556号',
        name: '弹框内容',
      },
    },
  },
};
export const Content110DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '丰富的特色展台', className: 'title-h1' },
      {
        name: 'content',
        children:
          '特色展台包括 Ant Design 、AntV、AntG、Egg 等明星产品，更有产品专家',
        className: 'title-content',
      },
      {
        name: 'content2',
        children: '现场问诊，为你答疑解难',
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: { a: { className: 'button', href: '#', children: '立即报名' } },
  },
};
export const Content120DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '特别鸣谢', className: 'title-h1' },
    ],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg',
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg',
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg',
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
          },
        },
      },
    ],
  },
};
