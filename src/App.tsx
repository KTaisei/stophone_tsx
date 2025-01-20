import React, { useState } from 'react';
import { Smartphone, Shield, Eye, LockKeyhole, AlertTriangle, Check, Send, User, Mail, MessageSquare, Github, Twitter, Newspaper, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('送信完了しました！');
    setTimeout(() => setFormStatus(''), 3000);
  };

  const blogPosts = [
    {
      id: 1,
      title: "歩きスマホ防止アプリ v1.0をリリースしました",
      date: "2024-03-15",
      excerpt: "長い開発期間を経て、ついに歩きスマホ防止アプリの正式版をリリースしました。主な機能と今後の展開について説明します。",
    },
    {
      id: 2,
      title: "アプリの使用方法と設定のガイド",
      date: "2024-03-10",
      excerpt: "初めてアプリを使用する方向けに、基本的な設定方法と使い方について詳しく解説します。",
    },
    {
      id: 3,
      title: "歩きスマホの危険性について",
      date: "2024-03-05",
      excerpt: "実際の事故データと研究結果に基づいて、歩きスマホの危険性について考察します。",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Previous header section remains unchanged */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="relative inline-block">
          <Smartphone className="w-16 h-16 mx-auto text-blue-600" />
          <Shield className="w-8 h-8 text-green-500 absolute -right-2 -bottom-2" />
        </div>
        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-800">
          Stophone
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          明日の未来を小さなアプリから、あなたのその一歩を変えていく。
        </p>
        <div className="mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            アプリをダウンロード
          </button>
        </div>
      </header>

      {/* Developer Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">開発者紹介</h2>
              <img
                src="public/profile.JPG"
                alt="開発者"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">川上泰正</h2>
              <p className="text-gray-600 mb-6">
                普段はフロントエンドエンジニアとして、ホームページやwebアプリの開発を行なっています。
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/ktaisei" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/Yasumasascience" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Features Section remains unchanged */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            主な機能
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Eye className="w-8 h-8 text-blue-600" />}
              title="リアルタイム歩行検知"
              description="歩行中かどうかを加速度センサを用いて計測"
            />
            <FeatureCard
              icon={<AlertTriangle className="w-8 h-8 text-yellow-500" />}
              title="警告通知"
              description="歩きスマホを検知した際に、アプリが即座に警告を通知し、注意を促します。"
            />
            <FeatureCard
              icon={<LockKeyhole className="w-8 h-8 text-green-500" />}
              title="安全サポート"
              description="アプリを閉じても、バックグラウンドで動作し、常に安全を見守ります。"
            />
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Newspaper className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">最新情報・ブログ</h2>
          </div>
          <div className="max-w-4xl mx-auto grid gap-8">
            {blogPosts.map(post => (
              <Link 
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              すべての記事を見る
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Previous sections remain unchanged */}
      {/* Safety Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            安全性向上の実績
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <StatCard number="90%" text="事故リスク低減" />
            <StatCard number="50万+" text="ユーザー数" />
            <StatCard number="95%" text="ユーザー満足度" />
          </div>
        </div>
      </section>

      {/* Safety Message Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              安全な歩行のために
            </h2>
            <p className="text-gray-600">
              歩きスマホは重大な事故につながる可能性があります。
              私たちのアプリは、あなたの安全な歩行をサポートします。
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              {['簡単設定', '省電力', '24時間対応'].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            お問い合わせ
          </h2>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-[3rem] shadow-lg overflow-hidden border-8 border-gray-800 relative">
              {/* Smartphone Notch */}
              <div className="bg-gray-800 h-6 w-32 mx-auto rounded-b-xl"></div>
              
              <form onSubmit={handleSubmit} className="p-8">
                <div className="space-y-6">
                  <div className="relative">
                    <label className="text-sm text-gray-600 mb-1 block">お名前</label>
                    <div className="relative">
                      <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="山田 太郎"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-sm text-gray-600 mb-1 block">メールアドレス</label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-sm text-gray-600 mb-1 block">お問い合わせ内容</label>
                    <div className="relative">
                      <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      <textarea
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                        placeholder="お問い合わせ内容をご記入ください"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    送信する
                  </button>

                  {formStatus && (
                    <div className="text-green-600 text-center font-medium">
                      {formStatus}
                    </div>
                  )}
                </div>
              </form>

              {/* Home Button */}
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Kawakami Taisei. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({ number, text }: { number: string, text: string }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-600">{text}</div>
    </div>
  );
}

export default App;