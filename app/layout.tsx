// app/layout.tsx (例)
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AIを使おう',
  description: '生成AIツールや使い方のコツを紹介するサイト',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={inter.className}>
      <body className="bg-gray-50 text-gray-800">
        <Header />
        {/* ヘッダー高さ分のpaddingトップを確保。ヘッダーが約4rem(16px*4=64px)くらいならpt-20で約5rem=80pxの余白を */}
        <div className="pt-20">
          {children}
        </div>
        <footer className="py-6 border-t text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} デジタル革命ぐん
        </footer>
      </body>
    </html>
  )
}
