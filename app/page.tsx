// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="bg-gray-100 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-8xl font-bold mb-6 text-gray-600">生成AIを使おう！</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
           生成AIの活用は、知的創造をより広い可能性へと拡張します。<br></br>本サイトでは、厳選されたサービスの概要、洗練されたプロンプト例、<br></br>そして有益な外部リソースを提示し、深い理解と応用を支援いたします。<br></br>そのように頑張ります。<br></br>というか無料のやつばかりだからとりあえず触る事っす<br></br>使ってもみないで良さはわからんです<br></br>素人でもアイデアをサクッと具現化出来魔法のような体験<br></br>超賢い24時間働く相棒<br></br>パラダイムシフト！
          </p>
        </div>
      </div>

      <section className="max-w-5xl mx-auto py-10 px-4">
        <h3 className="text-2xl font-bold mb-8 text-gray-900">主なコンテンツ</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/services" className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h4 className="text-xl font-semibold mb-2">AIサービス紹介</h4>
            <p className="text-sm text-gray-600">様々な生成AIツールを特徴や料金、URLとともに紹介。</p>
          </Link>
          <Link href="/tips" className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h4 className="text-xl font-semibold mb-2">AIを使うコツ＆プロンプト例</h4>
            <p className="text-sm text-gray-600">チャット型AIの利用法や具体的なプロンプト例をまとめています。</p>
          </Link>
          <Link href="/resources/links" className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h4 className="text-xl font-semibold mb-2">おすすめリンク集</h4>
            <p className="text-sm text-gray-600">AI関連ニュースサイトや有益な発信者へのリンクを一覧化。</p>
          </Link>
          <Link href="/resources/" className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h4 className="text-xl font-semibold mb-2">★</h4>
            <p className="text-sm text-gray-600">？？？</p>
          </Link>
        </div>
      </section>
    </main>
  )
}
