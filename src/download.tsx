import React from 'react';
import { Construction, Wrench, Clock, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Download() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          トップページに戻る
        </Link>

        <div className="max-w-2xl mx-auto text-center">
          {/* アニメーション付きのアイコン表示 */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Construction className="w-32 h-32 text-blue-600 animate-pulse absolute" />
            <Wrench className="w-16 h-16 text-yellow-500 absolute right-0 bottom-0 animate-bounce" />
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            ダウンロードページ準備中
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            より良いサービスを提供するため、現在ページを準備中です。
            もうしばらくお待ちください。
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-6 h-6 text-blue-600" />
                <span>開発中</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-6 h-6 text-blue-600" />
                <span>近日公開予定</span>
              </div>
            </div>

            <p className="text-gray-600">
              リリース時には、以下の機能を提供予定です：
            </p>
            <ul className="text-left mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Androidアプリのダウンロード</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>使い方ガイドのダウンロード</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>関連資料のダウンロード</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>利用規約等</span>
              </li>
            </ul>
          </div>

          <div className="text-gray-600">
            <p>お問い合わせは以下のリンクからお願いします：</p>
            <Link 
              to="/#contact" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-2"
            >
              お問い合わせフォームへ
              <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;