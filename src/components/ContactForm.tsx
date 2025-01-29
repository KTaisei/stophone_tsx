import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_forms')
        .insert([formData]);

      if (error) throw error;

      setFormStatus('送信完了しました！');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setFormStatus(''), 3000);
    } catch (error) {
      setFormStatus('現在フォームは利用できません。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
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
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                placeholder="お問い合わせ内容をご記入ください"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? '送信中...' : '送信する'}
          </button>

          {formStatus && (
            <div className={`text-center font-medium ${
              formStatus.includes('失敗') ? 'text-red-600' : 'text-green-600'
            }`}>
              {formStatus}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}