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
        <h2 className="text-3xl font-bold mb-6 text-gray-900">生成AIストーリー</h2>
        <p className="bg-gray-100 p-4 rounded text-sm text-gray-800 mb-6">
         
                1. 面倒な仕事はAIにおまかせ<br></br>
        梨花は毎日、家庭と仕事の両立に追われていた。日々の業務報告や複雑なデータ整理、さらには子どもの学校のスケジュール管理にまで手が回らず、ストレスが溜まるばかり。ある日、同僚の勧めで生成AIを導入。AIは一瞬で業務報告をまとめ、スケジュールの重複を解消し、彼女の時間を大幅に節約した。空いた時間で子どもと夕食を作り、趣味だった絵画を再開。AIに面倒な仕事を任せたおかげで、彼女は心の余裕を取り戻し、笑顔が増えていった。
        </p>
        <p className="bg-gray-100 p-4 rounded text-sm text-gray-800 mb-6">
                
        2. 知識と経験を広げるパートナー<br></br>
        大学生の翔太は、自分の進むべき道について迷っていた。興味のある分野はたくさんあるが、どれも自分には敷居が高く感じられた。そこで生成AIに相談し、自分の興味やスキルを分析してもらうことにした。AIは世界中の成功事例や未踏の研究分野を翔太に紹介し、学習計画まで提案。さらに、具体的なアクションプランを組み立てたことで、翔太は自信を持って新しい挑戦を始めた。「AIがいるおかげで、まるで経験豊富なメンターと話しているようだ」と、彼は未来への希望を語るようになった。
        </p>
        <p className="bg-gray-100 p-4 rounded text-sm text-gray-800 mb-6">
                
        3. イメージを形にする創造の旅<br></br>
        美術教師の春香は、自分の中にあるイメージを形にすることが苦手だった。「こんな世界を描きたい」という抽象的なビジョンはあるものの、具体化するのに時間がかかりすぎていた。そこで彼女は生成AIを使い、自分の頭の中にあるイメージを詳細に言葉で伝えた。するとAIは、それを元にデジタルアートを作成してくれた。春香はそのビジュアルをもとにさらに発想を広げ、自分の手で描き直していった。AIとの共同作業で、新しい表現の可能性を見出し、生徒たちにも「自由な創造の楽しさ」を教えるようになった。

        </p>
        <h2 className="text-3xl font-bold mb-6 text-gray-900">生成AIでできる事</h2>
        <p className="bg-gray-100 p-4 rounded text-sm text-gray-800 mb-6">
        

        文書生成
        文章要約
        自動翻訳
        詩作
        小説作成
        シナリオ作成
        キャッチコピー生成
        商品説明作成
        記事執筆補助
        ニュース記事生成
        SNS投稿アイデア作成
        プレゼン資料作成支援
        質問応答
        FAQ生成
        テキスト校正
        文法チェック
        学習教材作成
        試験問題作成
        説明書作成
        チュートリアル作成
        データ分析結果解釈
        プログラムコード生成
        コード修正提案
        デバッグ支援
        API仕様書作成
        数学問題解答
        論文執筆支援
        論文要約
        アイデアブレインストーミング
        キャラクター設定作成
        ストーリーボード作成
        スケジュール生成
        旅行プラン作成
        レシピ提案
        買い物リスト生成
        時間管理アドバイス
        キャリア相談
        就職活動支援
        面接練習支援
        スピーチ作成
        講演内容要約
        映画や書籍のレビュー生成
        文学作品の分析
        イベント企画提案
        学習計画作成
        語彙拡張
        言い換え提案
        メール作成補助
        デザイン案提案
        ロゴ作成アイデア
        ブランド名提案
        タグライン作成
        プロジェクト計画提案
        プロジェクト管理補助
        マーケティング戦略提案
        広告文案作成
        動画スクリプト作成
        商品ネーミング
        データ可視化アイデア提案
        チャート作成補助
        ワークフロー改善提案
        知識ベース構築支援
        カスタマーサポート補助
        CRMデータ分析
        チャットボット構築
        オンライン教育支援
        スマートデバイス制御アドバイス
        ソーシャルメディア運営支援
        UX/UIデザイン提案
        ナレッジマネジメント支援
        健康管理アドバイス
        エクササイズプラン作成
        メンタルヘルス相談
        パーソナルトレーニング提案
        瞑想スクリプト作成
        ゲームシナリオ作成
        ゲームキャラクター設定
        ゲームレベルデザイン案
        オンラインゲーム支援
        投資分析アドバイス
        財務計画提案
        節約術提案
        税務アドバイス
        法律文書作成補助
        契約書ドラフト作成
        住居購入アドバイス
        不動産運営支援
        エネルギー消費最適化提案
        サステナビリティ戦略提案
        気候変動分析支援
        地理情報データ解析
        天気予測説明
        科学研究支援
        医療データ解析
        遺伝子データ解釈
        ロボット制御アルゴリズム設計
        AIモデル評価
        自動化スクリプト生成
        古典作品のリライト
        地域特化型ガイド作成
        スラング翻訳
        方言変換
        動物視点の物語生成
        アートコンセプト提案
        空想の地図作成
        架空の言語作成
        名前の語源推定
        カスタマイズ絵本作成
        即興劇スクリプト作成
        暗号文生成
        植物の性質に基づく詩作
        デザインに特化したキャプション生成
        スポーツ戦術提案
        サイエンスフィクション設定作成
        ディストピア世界構築支援
        新種の動物設定作成
        非現実的な科学実験アイデア生成
        未来の都市設計案
        サブカルチャー特化型記事執筆
        ファッショントレンド予測案
        音楽ジャンル融合提案
        イメージボード生成支援
        人工知能キャラクター設計
        動画ゲームのエンディング案
        非線形ストーリー構築
        声調分析補助
        競技ゲーム攻略ガイド作成
        コスプレ衣装アイデア提案
        宝探しシナリオ作成
        トリビアクイズ作成
        非日常的なプロジェクト名生成
        文学的キャラクター間の手紙作成
        自然音に基づく詩作
        無意味な言葉遊び生成
        古代文明の象徴解釈案
        ファンフィクションのアイデア提案
        架空の歴史年表作成
        ミーム生成支援
        競馬予想シミュレーション
        ユニークなブログトピック提案
        未解決のミステリー物語生成
        レトロな広告風コピー作成
        人工的なライフハック案
        音楽プレイリストのテーマ作成
        ランダム生成の詩作法提案
        エスノグラフィックな物語作成
        教会や寺院の架空設計案
        機械的なリズムの詩作
        陰謀論シナリオ案
        ディープフェイクシナリオ補助
        架空の通貨設計
        風変わりなレジャープラン作成
        天文学的現象をテーマにした詩作
        スポーツの新ルール提案
        食材の新しい使い方提案
        生物学に基づく架空の進化ストーリー
        AIキャラクターの性格設定
        小規模な文化祭のテーマ案
        古代の神話再構築
        未発明のツール案提案
        幻想的な地名生成
        地下迷宮デザイン案
        イメージセラピー文章生成
        話し言葉と書き言葉の融合作成
        未来のファッションスタイル考案
        ストリートアートのテーマ提案
        ミニチュアジオラマストーリー作成
        動物の性格擬人化案
        新スポーツのイベント企画
        難解な言葉遊びの解釈案
        学校行事の新しいアイデア
        架空のラジオ番組コンセプト
        DIYプロジェクトのアイデア生成
        リゾート施設の新しい特徴提案
        アルゴリズム詩作支援
        夢日記の整理案
        微生物視点の物語構築
        宇宙植民地の設定案
        抽象アートの命名補助
        神秘的な儀式案作成
        特定の香りをテーマにした詩作
        昔の技術を再現するプロジェクト案
        気象現象をテーマにした物語作成
        幻想的な花の図鑑作成
        ビジュアル系バンドのコンセプト案
        架空の祭りイベント設計
        おとぎ話風の人生ストーリー作成
        特異な職業の設定案
        魚介類をテーマにした物語提案
        古代宗教的テキスト生成
        惑星間外交のシナリオ作成
        ロボット視点の冒険物語
        未知のスポーツリーグ構想
        </p>


      </main>
    )
  }
  