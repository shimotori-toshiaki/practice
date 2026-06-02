export type NavItem = {
    href: string;
    label: string;
};

export const guestNavItems: NavItem[] = [
  {
    href: "/user/login",
    label: "ユーザーログイン",
  },
  {
    href: "/admin/login",
    label: "管理者ログイン",
  },
];

export const userNavItems: NavItem[] = [
  {
    href: "/mypage",
    label: "マイページ",
  },
  {
    href: "/cart",
    label: "カート",
  },
  {
    href: "/user/logout",
    label: "ログアウト",
  },
];

export const adminNavItems: NavItem[] = [
  {
    href: "/admin/products",
    label: "商品管理",
  },
  {
    href: "/admin/products/new",
    label: "商品登録",
  },
  {
    href: "/admin/logout",
    label: "ログアウト",
  },
];