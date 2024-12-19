// app/tips/page.tsx
export default function TipsPage() {
    return (
      <main className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">AIを使うコツ＆プロンプト例</h2>
        <p className="text-gray-700 mb-8">
          チャット型AI（例: ChatGPT）の効果的な使い方や、  
          プロンプト設計の具体例をまとめました。これらを参考に、AIとの対話をより有益なものにしてください。
        </p>
  
        <h3 className="text-xl font-semibold mb-4 text-gray-800">AIを使うコツ</h3>
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li>明確な指示を与える</li>
          <li>適切な文体・形式を指定する</li>
          <li>目的や期待する出力を具体的に伝える</li>
        </ul>
  
        <h3 className="text-xl font-semibold mb-4 text-gray-800">プロンプト例</h3>
        <div className="bg-gray-100 p-4 rounded text-sm text-gray-800 mb-6">
          <pre>
  {`「以下のテーマで500文字程度の記事案を作成してください。  
  文体はカジュアルで、要点ごとに段落を区切ってください。
  
  テーマ：〇〇」`}
          </pre>
        </div>
  
        <div className="bg-gray-100 p-4 rounded text-sm text-gray-800 mb-6">
          <pre>
  {`「以下のJavaScriptコードを改善し、わかりやすいコメントをつけてください。
  
  \`\`\`js
  function calc(a,b){
  return a+b;}
  \`\`\`」`}
          </pre>
        </div>
  
      </main>
    )
  }
  