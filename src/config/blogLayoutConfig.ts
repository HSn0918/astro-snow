type BlogLayoutConfig = {
  title: string;
  alternate?: string;
  subtitle?: string;
  name: string;
  description?: string;
  avatar?: string;
  showLogo?: boolean;
  author?: string;
  site: string;
  startYear?: number;
  keywords?: string[];
  banner: {
    src: string;
    srcset: string;
    lqipSrc: string;
    alt?: string;
  };
};

type SocialPlatform = {
  url: string;
  label: string;
  iconText: string;
  iconClass?: string; // Font Awesome icon class
  color: string;
};

type SocialConfig = {
  github?: SocialPlatform;
  x?: SocialPlatform;
  email?: SocialPlatform;
};

export const blogLayoutConfig: BlogLayoutConfig = {
  title: 'HSnの博客',
  alternate: 'HSn',
  subtitle: '人在北极，彻底失败',
  name: 'HSn',
  description: '后端',
  avatar: '/favicon.png',
  showLogo: false,
  author: 'HSn',
  site: 'https://blog.huangsn.dev',
  startYear: 2022,
  keywords: ['后端', '博客', '个人空间', '技术'],
  banner: {
    src: '/img/site_header_1920.webp',
    srcset: '/img/site_header_800.webp 800w,/img/site_header_1920.webp 1200w',
    lqipSrc: '/img/site_header_1920.webp',
    alt: 'cover',
  },
};

export const blogSocialConfig: SocialConfig = {
  github: {
    url: 'https://github.com/hsn0918',
    label: 'GitHub',
    iconText: 'GH',
    iconClass: 'fa-brands fa-github',
    color: '#191717',
  },
  x: {
    url: 'https://x.com/Hsn289744493',
    label: 'X (推特)',
    iconText: 'X',
    iconClass: 'fa-brands fa-x-twitter',
    color: '#4b9ae4',
  },
  email: {
    url: 'mailto:hsn@linux.do',
    label: 'Email',
    iconText: '@',
    iconClass: 'fa-regular fa-envelope',
    color: '#55acd5',
  },
};

const { title, alternate, subtitle } = blogLayoutConfig;

export const blogSeoConfig = {
  title: `${alternate ? alternate + ' = ' : ''}${title}${subtitle ? ' = ' + subtitle : ''}`,
  description: blogLayoutConfig.description,
  keywords: blogLayoutConfig?.keywords?.join(',') ?? '',
  url: blogLayoutConfig.site,
};

export const defaultCoverList = Array.from({ length: 13 }, (_, index) => index + 1).map((item) => `/img/cover/${item}.webp`);
