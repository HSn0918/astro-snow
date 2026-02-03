export interface FriendLink {
  site: string;
  url: string;
  owner: string;
  desc: string;
  image: string;
  color?: string;
}

export const friendsData: FriendLink[] = [
  {
    site: 'snowの博客',
    url: 'https://xhblog.top/',
    owner: 'snow',
    desc: '爬起仅仅是因为不想输',
    image: 'https://xhblog.top/img/724d7fb480c8ac0db472ca5c7e36d239.jpg',
    color: '#ffc0cb',
  },
];

export const friendsIntro = {
  title: '小伙伴们',
  subtitle: '改了一下,有时间顺序从新到旧排列～',
  applyTitle: '欢迎加友链',
  applyDesc: '在本页留言,格式如下',

};
