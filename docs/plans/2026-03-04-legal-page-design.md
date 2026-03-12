# Legal Page 設計ドキュメント

**作成日**: 2026-03-04
**目的**: 特定商取引法に基づく表記を満たした統合 `/legal` ページの実装

---

## 背景・決定事項

Tsumify は Stripe による課金機能（月額 480 円・年額 3,600 円）を実装済み。
特定商取引法（通信販売）の要件を満たすページが存在しないため新設する。

---

## アーキテクチャ

### 新規ページ
- `app/legal/page.tsx` — 利用規約・プライバシーポリシー・特定商取引法を統合したタブページ

### タブ切り替え
- URLハッシュで管理（静的エクスポート対応）
  - `/legal#terms` → 利用規約
  - `/legal#privacy` → プライバシーポリシー
  - `/legal#tokusho` → 特定商取引法に基づく表記
- `useEffect` + `window.location.hash` でハッシュ変化を検知
- ページリロード後もタブ状態を保持

### 既存ページのリダイレクト
- `app/terms/page.tsx` → `/legal#terms` へクライアントサイドリダイレクト
- `app/privacy/page.tsx` → `/legal#privacy` へクライアントサイドリダイレクト

### Footer の変更（`components/Footer.tsx`）
```
利用規約         → /legal#terms
プライバシーポリシー → /legal#privacy
特定商取引法に基づく表記 → /legal#tokusho  ← 新規追加
```

---

## 特定商取引法 表記内容

| 項目 | 内容 |
|------|------|
| 販売業者 | Tsumify Lab（代表：吉田　翔） |
| 所在地 | 〒530-0001 大阪府大阪市北区梅田1-1-3 大阪駅前第3ビル 29階 1-1-1号室 |
| 電話番号 | +81-70-8848-7324 |
| メールアドレス | support@tsumify-lab.com |
| 販売価格 | 月額プラン：480円（税込）／ 年額プラン：3,600円（税込） |
| 支払方法 | クレジットカード（Stripe） |
| 支払時期 | 月額：毎月の契約日に自動引き落とし ／ 年額：年1回の契約日に自動引き落とし |
| サービス提供時期 | 決済完了後、即時 |
| キャンセル・返金 | 次回更新日前にキャンセルすることで以降の課金を停止できます。既にお支払い済みの期間分の返金は行いません。 |
| 動作環境 | iOS 13以上 ／ Android 5.0（API 21）以上 |

---

## コンポーネント設計

```
app/legal/page.tsx
  └── <LegalTabs>  (Client Component)
        ├── タブナビゲーション（terms / privacy / tokusho）
        ├── <TermsContent>    — 既存の利用規約テキストを移植
        ├── <PrivacyContent>  — 既存のプライバシーポリシーテキストを移植
        └── <TokushoContent>  — 特定商取引法テーブル（新規）
```

---

## 変更ファイル一覧

| ファイル | 変更種別 |
|---------|---------|
| `app/legal/page.tsx` | 新規作成 |
| `app/terms/page.tsx` | リダイレクト処理に変更 |
| `app/privacy/page.tsx` | リダイレクト処理に変更 |
| `components/Footer.tsx` | 特定商取引法リンク追加 |

---

## テスト計画

- [ ] `/legal#terms` でタブが正しく表示されること
- [ ] `/legal#privacy` でタブが正しく表示されること
- [ ] `/legal#tokusho` でタブが正しく表示されること
- [ ] `/terms` アクセス時に `/legal#terms` へリダイレクトされること
- [ ] `/privacy` アクセス時に `/legal#privacy` へリダイレクトされること
- [ ] Footer の3リンクが正しいURLを指していること
- [ ] `npm run build` が成功すること（静的エクスポート）
