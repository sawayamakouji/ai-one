// app/resources/links/page.tsx
export default function LinksPage() {
    return (
      <main className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">おすすめリンク集</h2>
        <p className="text-gray-700 mb-8">
          AI関連のニュースや情報を発信しているサイト、個人ブログ、コミュニティをまとめました。  
          最新情報を得る際にご活用ください。
        </p>
  
        <ul className="space-y-4">
          <li>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              AI News Hub
            </a>
            <p className="text-sm text-gray-600">最新のAIニュースを配信するポータルサイト。</p>
          </li>
          <li>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              AI Tips Blog
            </a>
            <p className="text-sm text-gray-600">実用的な生成AI活用術やインタビュー記事を発信。</p>
          </li>
        </ul>
      </main>
    )
  }
  