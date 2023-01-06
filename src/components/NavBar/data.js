import logo from '~/assets/images/logo/logo.png';

const Data = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children: logo,
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          to: '/',
          children: [{ children: 'ABOUT ME', name: 'text' }],
        },
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          to: '/blog',
          children: [{ children: 'BLOG', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          to: '/contact',
          children: [{ children: 'CONTACT', name: 'text' }],
        },
      },
      // {
      //   name: 'item3',
      //   className: 'header3-item',
      //   children: {
      //     to: '/failure',
      //     children: [{ children: 'FAILURE', name: 'text' }],
      //   },
      // }
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};

export default Data;
