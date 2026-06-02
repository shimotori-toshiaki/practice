# Next.js EC App Router

## 概要

Next.js App Router を使用して作成したECサイトです。

一般ユーザーと管理者でログイン機能を分け、認証後に取得したtokenをHttpOnly Cookieに保存しています。
Cookieの状態に応じてユーザー・管理者・未ログイン状態を判定し、Headerの表示メニューを切り替える構成にしています。
ログインフォームには React Hook Form と Zod を使用し、Server Actions と連携した認証処理を実装しています。

## 使用技術

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- Server Actions
- Cookie認証

## 主な機能

### ユーザー側

- ユーザーログイン
- ユーザーHeader

### 管理者側

- 管理者ログイン
- 管理者Header

## 実装ポイント

- App Router を使用したルーティング設計
- Server Actions を使用したログイン処理
- HttpOnly Cookie によるtoken管理
- user-token / admin-token による認証状態の切り分け
- React Hook Form + Zod によるフォームバリデーション
- Headerメニューをroleごとに切り替え
- navItems.ts によるナビゲーションデータの分離

## ディレクトリ構成

app
├── _components
│   └── header
│       ├── AdminHeader.tsx
│       ├── GuestHeader.tsx
│       ├── Header.tsx
│       ├── HeaderNav.tsx
│       ├── LoginMenu.tsx
│       ├── navItems.ts
│       └── UserHeader.tsx
│
└── (auth)
    ├── _components
    │   └── LoginForm.tsx
    │
    ├── _hooks
    │   └── useLoginForm.ts
    │
    ├── _schemas
    │   └── loginSchema.ts
    │
    ├── admin
    │   └── login
    │       ├── actions.ts
    │       └── page.tsx
    │
    └── user
        └── login
            ├── actions.ts
            └── page.tsx
