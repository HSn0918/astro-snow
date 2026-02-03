// Home / BlogIndex Config
export const homePageProfile = {
  name: 'HSn',
  tagline: '“人在北极，彻底失败”',
  avatarUrl: '/img/favicon.png',
  avatarAlt: 'HSn Avatar',
  backgroundUrl: '/img/site_header_1920.webp',
  footerText: '© HSn - 2022-2025',
};

export const homePageLinks = {
  xUrl: 'https://x.com/Hsn289744493',
  githubUrl: 'https://github.com/hsn0918',
};

export async function getHomePageProfile() {
  const { getBackgroundImages } = await import('@lib/backgrounds');
  const backgroundImages = await getBackgroundImages();
  const backgroundUrl = backgroundImages.length
    ? backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
    : homePageProfile.backgroundUrl;

  return { ...homePageProfile, backgroundUrl };
}
