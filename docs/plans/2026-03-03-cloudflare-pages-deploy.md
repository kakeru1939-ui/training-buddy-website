# Cloudflare Pages デプロイ 実装計画

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Training Buddy ランディングページを Cloudflare Pages にデプロイし、tsumify-lab.com でアクセスできるようにする

**Architecture:** Cloudflare Pages のネイティブ GitHub 連携を使い、`master` ブランチへの push をトリガーに自動ビルド＆デプロイ。`next.config.ts` の `output: 'export'` で生成される `out/` ディレクトリを Cloudflare が直接ホストする。

**Tech Stack:** Next.js 16 (Static Export), Cloudflare Pages, GitHub (kakeru1939-ui/training-buddy-website)

---

### Task 1: GitHub Pages ワークフローを削除してコミット

**Files:**
- Delete: `.github/workflows/deploy.yml`

**Step 1: ファイルを削除する**

```bash
git rm .github/workflows/deploy.yml
```

Expected output:
```
rm '.github/workflows/deploy.yml'
```

**Step 2: 削除されたことを確認する**

```bash
git status
```

Expected output:
```
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    .github/workflows/deploy.yml
```

**Step 3: コミットする**

```bash
git commit -m "remove: GitHub Pages ワークフローを削除し Cloudflare Pages に一本化"
```

**Step 4: GitHub にプッシュする**

```bash
git push origin master
```

Expected: `master` ブランチへのプッシュが成功する

---

### Task 2: Cloudflare Pages プロジェクトを作成する（ブラウザ作業）

> **注意:** このタスクはブラウザでの操作です。Claude は実行できません。以下の手順を順番に実施してください。

**Step 1: Cloudflare ダッシュボードを開く**

`https://dash.cloudflare.com` にアクセスし、tsumify-lab.com を管理しているアカウントでログインする。

**Step 2: Workers & Pages に移動する**

左サイドバーの「Workers & Pages」をクリックする。

**Step 3: 新規 Pages プロジェクトを作成する**

「Create application」→「Pages」→「Connect to Git」を選択する。

**Step 4: GitHub アカウントを連携する**

「Connect GitHub」をクリックし、OAuth 認証で GitHub アカウント `kakeru1939-ui` を許可する。
リポジトリ選択画面で `training-buddy-website` を選択し「Begin setup」をクリックする。

**Step 5: ビルド設定を入力する**

以下の値を正確に入力する：

| 項目 | 入力値 |
|------|--------|
| Project name | `training-buddy-website` |
| Production branch | `master` |
| Framework preset | `Next.js (Static HTML Export)` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/`（空欄でOK） |

**Step 6: 環境変数を追加する**

「Environment variables (advanced)」を展開し、以下を追加する：

| Variable name | Value |
|---------------|-------|
| `NODE_VERSION` | `20` |

**Step 7: デプロイを開始する**

「Save and Deploy」をクリックする。

**Step 8: ビルドログを確認する**

デプロイが開始されたらビルドログを監視する。以下のメッセージが出れば成功：
```
Build completed successfully
Deployment complete
```

失敗した場合：ログに表示されるエラーを確認する。よくある原因は Node バージョン不一致なので `NODE_VERSION=20` が設定されているか再確認する。

**Step 9: デプロイ URL を確認する**

デプロイ完了後、`https://training-buddy-website.pages.dev` にアクセスしてサイトが表示されることを確認する。

---

### Task 3: カスタムドメイン tsumify-lab.com を設定する（ブラウザ作業）

> **注意:** このタスクはブラウザでの操作です。Task 2 のデプロイが成功した後に実施してください。

**Step 1: プロジェクトのカスタムドメイン設定を開く**

Cloudflare ダッシュボード → Workers & Pages → `training-buddy-website` → 「Custom domains」タブを開く。

**Step 2: カスタムドメインを追加する**

「Set up a custom domain」をクリックし、`tsumify-lab.com` を入力して「Continue」をクリックする。

**Step 3: DNS レコードの自動設定を確認する**

tsumify-lab.com が同一 Cloudflare アカウントで管理されているため、CNAME レコードの自動追加確認が表示される。「Activate domain」をクリックして確定する。

自動追加される DNS レコード例：
```
Type: CNAME
Name: tsumify-lab.com (または @)
Target: training-buddy-website.pages.dev
Proxy status: Proxied
```

**Step 4: SSL 証明書の発行を待つ**

「Initializing」→「Active」に変わるまで待つ（通常数分〜最大15分）。

**Step 5: 動作確認する**

ブラウザで `https://tsumify-lab.com` にアクセスし、Training Buddy のランディングページが表示されることを確認する。

---

### Task 4: 動作確認とメモリ更新

**Step 1: 最終確認チェックリスト**

以下をすべて確認する：
- [ ] `https://tsumify-lab.com` でサイトが表示される
- [ ] HTTPS（SSL）が有効になっている（ブラウザのアドレスバーに鍵マーク）
- [ ] `master` ブランチに push すると Cloudflare Pages が自動でビルド＆デプロイされる

**Step 2: `master` への push で自動デプロイを確認する（任意）**

```bash
# 試験的に小さな変更を加えてプッシュする
git commit --allow-empty -m "test: Cloudflare Pages 自動デプロイ確認"
git push origin master
```

Cloudflare ダッシュボードの「Deployments」タブに新しいデプロイが表示されれば成功。確認後は不要であればリバートする：

```bash
git revert HEAD
git push origin master
```

**Step 3: MEMORY.md を更新する（Claude 担当）**

デプロイ完了後、以下の情報を MEMORY.md に追記する：
- デプロイ先: Cloudflare Pages
- カスタムドメイン: tsumify-lab.com
- プロジェクト名: training-buddy-website
- 自動デプロイ: master push トリガー
