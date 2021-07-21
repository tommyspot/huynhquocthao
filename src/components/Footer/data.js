import bloggerIcon from '~/assets/images/icon/blogger.png';
import linkedIcon from '~/assets/images/icon/linkedin.png';
import facebookIcon from '~/assets/images/icon/facebook.png';

const data = {
  wrapper: { className: 'home-page-wrapper footer2-wrapper' },
  OverPack: { className: 'home-page footer2', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: [
      {
        name: 'image',
        children: 'https://gw.alipayobjects.com/zos/rmsportal/NuuAwJBxewWglRSoNjET.png',
        className: 'copyright-logo',
      },
      {
        name: 'copyright',
        children: 'Copyright © 2021 tommyspot',
        className: 'copyright-text',
      },
    ],
  },
  links: {
    className: 'links',
    children: [
      {
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/th%E1%BA%A3o-hu%E1%BB%B3nh-qu%E1%BB%91c-33a9aab3/',
        children: linkedIcon,
      },
      {
        name: 'blogger',
        href: 'https://huynhquocthao.blogspot.com/',
        children: bloggerIcon,
      },
      {
        name: 'facebook',
        href: 'https://www.facebook.com/tommy.huynh.94695/',
        children: facebookIcon,
      },
    ],
  },
};

export default data;
