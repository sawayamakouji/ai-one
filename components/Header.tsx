import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full border-b bg-white shadow-sm z-50">
      <nav className="max-w-5xl mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="text-2xl font-extrabold text-gray-900">
          <Link href="/">hello AI</Link>
        </h1>
        <ul className="flex space-x-6 text-base font-medium">
          <li>
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              トップ
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors">
              ツール・サービス紹介
            </Link>
          </li>
          <li>
            <Link href="/tips" className="text-gray-700 hover:text-gray-900 transition-colors">
              AIを使うコツやプロンプト例
            </Link>
          </li>
          <li>
            <Link href="/resources/links" className="text-gray-700 hover:text-gray-900 transition-colors">
              おすすめリンク
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
