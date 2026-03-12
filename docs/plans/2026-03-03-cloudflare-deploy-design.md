# Cloudflare Pages デプロイ設計

**日付**: 2026-03-03
**ステータス**: 承認済み

## 背景

Training Buddy ランディングページ（Next.js 静的エクスポート）を Cloudflare Pages にデプロイし、カスタムドメイン `tsumify-lab.com` でアクセスできるようにする。

## 決定事項

**アプローチ B: Cloudflare Pages ネイティブ GitHub連携** を採用。

理由：
- API トークン管理が不要（OAuth連携のみ）
- Cloudflare ダッシュボードでビルドログをリアルタイム確認可能
- セットアップが最もシンプル

## アーキテクチャ

```
[ローカル] git push master
    ↓
[GitHub] kakeru1939-ui/training-buddy-website
    ↓ (webhook)
[Cloudflare Pages] ビルド & デプロイ
    ↓
[tsumify-lab.com] CNAME → *.pages.dev
```

## コード変更

| ファイル | 操作 | 理由 |
|----------|------|------|
| `.github/workflows/deploy.yml` | 削除 | GitHub Pages を廃止し Cloudflare に一本化 |
| `next.config.ts` | 変更なし | 既に Cloudflare Pages 向け設定済み |

## Cloudflare Pages ビルド設定

| 項目 | 値 |
|------|---|
| プロジェクト名 | `training-buddy-website` |
| フレームワーク | Next.js (Static HTML Export) |
| ビルドコマンド | `npm run build` |
| 出力ディレクトリ | `out` |
| ルートディレクトリ | `/` |
| 環境変数 | `NODE_VERSION=20` |

## カスタムドメイン設定

`tsumify-lab.com` は既に Cloudflare DNS 管理下のため、Pages プロジェクトの「Custom domains」から追加するだけで CNAME + SSL 証明書が自動設定される。

## 実装ステップ

1. `.github/workflows/deploy.yml` を削除してコミット
2. Cloudflare ダッシュボードで Pages プロジェクト作成・GitHub リポジトリ連携
3. ビルド設定を上記の値で指定
4. 初回デプロイ完了を確認
5. Custom domains で `tsumify-lab.com` を追加・確認

## 考慮した代替案

| アプローチ | 内容 | 不採用理由 |
|-----------|------|-----------|
| A: GitHub Actions + Wrangler | Actions から Wrangler CLI でデプロイ | `CF_API_TOKEN` の管理が必要で複雑 |
| C: ハイブリッド | GitHub Pages と Cloudflare を並行維持 | GitHub Pages 廃止方針のため不要 |
