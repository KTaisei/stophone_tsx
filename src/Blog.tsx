import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = {
  1: {
    title: "歩きスマホ防止アプリ v1.0をリリースしました",
    date: "2024-03-15",
    readTime: "5分",
    content: `
# 歩きスマホ防止アプリ v1.0をリリースしました

この度、長い開発期間を経て、歩きスマホ防止アプリの正式版（v1.0）をリリースすることができました。
このアプリは、歩行中のスマートフォン使用による事故を防ぐことを目的として開発されました。

## 主な機能

### 1. リアルタイム歩行検知
- 最新のセンサー技術を活用
- バッテリー消費を最小限に抑えた効率的な検知
- 高精度な動作認識アルゴリズム

### 2. カスタマイズ可能な警告システム
- 視覚的警告（画面表示）
- 聴覚的警告（アラーム音）
- 触覚的警告（バイブレーション）

### 3. 安全性統計
- 月間の歩きスマホ回数
- 危険回避の成功率
- 継続的な改善の可視化

## 今後の展開

今後は以下の機能を順次追加していく予定です：

1. AI搭載による更なる検知精度の向上
2. コミュニティ機能の実装
3. 健康管理機能との連携

## ダウンロード方法

App Store、Google Play Storeにて無料でダウンロードいただけます。

## フィードバック

より良いアプリにしていくため、ユーザーの皆様からのフィードバックをお待ちしております。
アプリ内のフィードバックフォームまたはお問い合わせページからご意見をお寄せください。
    `,
  },
  2: {
    title: "アプリの使用方法と設定のガイド",
    date: "2024-03-10",
    readTime: "7分",
    content: `
# アプリの使用方法と設定のガイド

## 初期設定

アプリをインストールした後、以下の手順で設定を行ってください：

1. アプリを起動
2. 利用規約に同意
3. 必要な権限を許可
4. 警告方法の選択

## 基本的な使い方

### メイン画面の説明
- 上部：現在の状態表示
- 中央：歩行状態モニター
- 下部：統計情報

### 設定項目
- 警告音の種類
- バイブレーションの強さ
- 検知感度の調整

## よくある質問

Q: バッテリーの消費は？
A: 最適化により、通常使用の5%程度です。

Q: バックグラウンドでも動作？
A: はい、常時監視が可能です。
    `,
  },
  3: {
    title: "歩きスマホの危険性について",
    date: "2024-03-05",
    readTime: "6分",
    content: `
# 歩きスマホの危険性について

## 統計データから見る実態

### 事故発生率
- 年間約2,000件の関連事故
- 前年比20%増加傾向
- 若年層での発生が顕著

## 主な事故パターン

1. 他の歩行者との衝突
2. 車両との接触
3. 転倒・転落

## 予防対策

### 個人でできること
- 歩行中のスマホ使用を控える
- 立ち止まって操作
- 周囲への注意

### テクノロジーによる支援
- 当アプリによる警告機能
- 自動検知システム
- 事故防止サポート

## まとめ

歩きスマホは重大な事故につながる可能性があります。
適切な対策と意識改善が必要です。
    `,
  }
};

function Blog() {
  const { id } = useParams();
  const post = id ? blogPosts[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">ブログ記事一覧</h1>
          <div className="max-w-4xl mx-auto space-y-8">
            {Object.entries(blogPosts).map(([postId, post]) => (
              <Link
                key={postId}
                to={`/blog/${postId}`}
                className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
                <div className="flex items-center gap-4 text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            記事一覧に戻る
          </Link>
          
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
                <div className="flex items-center gap-4 text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </header>
              
              <div className="prose prose-blue max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Blog;