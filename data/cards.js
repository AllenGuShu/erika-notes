/* ══════════════════════════════════════════
   單字文法卡資料
   新增課次：在對應的 cat 區塊補一筆 {} 即可
   cat 選項: travel | hotel | culture | food | daily
   jlpt 選項: n5 | n4 | n3
   type 選項: vocab | gram （gram 不用填 cat）
══════════════════════════════════════════ */

export const CARDS = [
    /* ── 交通旅行 · 単語 ── */
    {lesson:1,cat:'travel',jlpt:'n5',type:'vocab',badge:'🚉 交通旅行 · N5',front:'5泊6日',audioFront:'ごはく むいか',reading:'ごはく むいか',def:'5晚6天（旅行天數說法）',ex:'5泊6日の旅行をしました。',exZh:'去了一趟5晚6天的旅行。'},
    {lesson:2,cat:'travel',jlpt:'n4',type:'vocab',badge:'🚉 交通旅行 · N4',front:'券売機',audioFront:'けんばいき',reading:'けんばいき',def:'自動售票機',ex:'券売機で切符を買います。',exZh:'在自動售票機買票。'},
    {lesson:2,cat:'travel',jlpt:'n5',type:'vocab',badge:'🚉 交通旅行 · N5',front:'切符',audioFront:'きっぷ',reading:'きっぷ',def:'車票',ex:'新幹線の切符を一枚ください。',exZh:'請給我一張新幹線的車票。'},
    {lesson:2,cat:'travel',jlpt:'n5',type:'vocab',badge:'🚉 交通旅行 · N5',front:'ホーム',audioFront:'ホーム',reading:'ほーむ（月台）',def:'月台 platform',ex:'２番ホームで電車を待っています。',exZh:'在2號月台等電車。'},
    {lesson:3,cat:'travel',jlpt:'n4',type:'vocab',badge:'🚉 交通旅行 · N4',front:'最寄り駅',audioFront:'最寄り駅',reading:'もよりえき',def:'離家最近的車站',ex:'私の最寄り駅は台中駅です。',exZh:'離我家最近的車站是台中站。'},
    {lesson:5,cat:'travel',jlpt:'n3',type:'vocab',badge:'🚉 交通旅行 · N3',front:'制限速度',audioFront:'制限速度',reading:'せいげんそくど',def:'速度限制',ex:'高速道路の制限速度は100km/hです。',exZh:'高速公路的速限是100公里/小時。'},
    {lesson:5,cat:'travel',jlpt:'n3',type:'vocab',badge:'🚉 交通旅行 · N3',front:'罰金',audioFront:'ばっきん',reading:'ばっきん',def:'罰款',ex:'スピード違反で罰金を払いました。',exZh:'因為超速被開了罰單。'},
    {lesson:5,cat:'travel',jlpt:'n4',type:'vocab',badge:'🚉 交通旅行 · N4',front:'免許証',audioFront:'免許証',reading:'めんきょしょう',def:'駕照',ex:'日本でも免許証が必要です。',exZh:'在日本也需要駕照。'},
    {lesson:5,cat:'travel',jlpt:'n3',type:'vocab',badge:'🚉 交通旅行 · N3',front:'燃費が良い',audioFront:'燃費が良い',reading:'ねんぴがよい',def:'省油（燃費が悪い＝耗油）',ex:'このトヨタは燃費が良いです。',exZh:'這台豐田很省油。'},
    {lesson:5,cat:'travel',jlpt:'n3',type:'vocab',badge:'🚉 交通旅行 · N3',front:'軽自動車',audioFront:'軽自動車',reading:'けいじどうしゃ',def:'輕型車（日本特有）',ex:'日本では軽自動車がとても人気です。',exZh:'在日本輕型車非常受歡迎。'},
    {lesson:7,cat:'travel',jlpt:'n3',type:'vocab',badge:'🚉 交通旅行 · N3',front:'社員旅行',audioFront:'しゃいんりょこう',reading:'しゃいんりょこう',def:'員工旅遊、公司旅行',ex:'１０月に社員旅行で広島へ行く予定です。',exZh:'預計10月去廣島員工旅遊。'},
    /* ── ホテル · 単語 ── */
    {lesson:2,cat:'hotel',jlpt:'n5',type:'vocab',badge:'🏨 ホテル · N5',front:'受付',audioFront:'うけつけ',reading:'うけつけ',def:'接待處、前台',ex:'ホテルの受付でチェックインします。',exZh:'在飯店前台辦理入住。'},
    {lesson:2,cat:'hotel',jlpt:'n4',type:'vocab',badge:'🏨 ホテル · N4',front:'鍵を渡す',audioFront:'鍵を渡す',reading:'かぎをわたす',def:'交鑰匙',ex:'フロントが鍵を渡してくれました。',exZh:'飯店前台把鑰匙交給了我。'},
    {lesson:2,cat:'hotel',jlpt:'n4',type:'vocab',badge:'🏨 ホテル · N4',front:'案内をする',audioFront:'案内をする',reading:'あんないをする',def:'引導、介紹',ex:'スタッフが部屋まで案内をしてくれました。',exZh:'工作人員帶我去到了房間。'},
    {lesson:6,cat:'hotel',jlpt:'n4',type:'vocab',badge:'🏨 ホテル · N4',front:'おしぼり',audioFront:'おしぼり',reading:'おてふき / お手拭き',def:'濕紙巾、濕毛巾',ex:'コンビニでおしぼりをもらいました。',exZh:'在便利商店拿到了濕毛巾。'},
    /* ── 文化 · 単語 ── */
    {lesson:3,cat:'culture',jlpt:'n3',type:'vocab',badge:'🎎 文化 · N3',front:'竹細工',audioFront:'竹細工',reading:'たけざいく',def:'竹工藝',ex:'白川郷で竹細工を体験しました。',exZh:'在白川鄉體驗了竹工藝。'},
    {lesson:3,cat:'culture',jlpt:'n4',type:'vocab',badge:'🎎 文化 · N4',front:'招き猫',audioFront:'招き猫',reading:'まねきねこ',def:'招財貓',ex:'お土産屋さんに招き猫がたくさんあります。',exZh:'土產店裡有很多招財貓。'},
    {lesson:3,cat:'culture',jlpt:'n4',type:'vocab',badge:'🎎 文化 · N4',front:'和紙',audioFront:'わし',reading:'わし',def:'日本傳統紙',ex:'和紙は白川郷の伝統工芸です。',exZh:'和紙是白川鄉的傳統工藝。'},
    {lesson:3,cat:'culture',jlpt:'n3',type:'vocab',badge:'🎎 文化 · N3',front:'伝統工芸',audioFront:'伝統工芸',reading:'でんとうこうげい',def:'傳統工藝',ex:'地元の伝統工芸を体験しました。',exZh:'體驗了當地的傳統工藝。'},
    {lesson:3,cat:'culture',jlpt:'n3',type:'vocab',badge:'🎎 文化 · N3',front:'地場のもの',audioFront:'地場のもの',reading:'じばのもの',def:'當地特有的物品',ex:'地場のものをお土産に買いました。',exZh:'買了當地特有的東西當伴手禮。'},
    {lesson:4,cat:'culture',jlpt:'n3',type:'vocab',badge:'🎎 文化 · N3',front:'職人',audioFront:'しょくにん',reading:'しょくにん',def:'工匠、師傅',ex:'職人が丁寧に和菓子を作っています。',exZh:'工匠正在仔細地製作和菓子。'},
    {lesson:6,cat:'culture',jlpt:'n3',type:'vocab',badge:'🎎 文化 · N3',front:'音読み',audioFront:'おんよみ',reading:'おんよみ',def:'漢字的中文音（音讀）',ex:'「今日」は音読みで「きょう」です。',exZh:'「今日」的音讀是「きょう」。'},
    {lesson:6,cat:'culture',jlpt:'n3',type:'vocab',badge:'🎎 文化 · N3',front:'訓読み',audioFront:'くんよみ',reading:'くんよみ',def:'漢字的日語音（訓讀）',ex:'「今」は訓読みで「いま」です。',exZh:'「今」的訓讀是「いま」。'},
    {lesson:6,cat:'culture',jlpt:'n3',type:'vocab',badge:'🎎 文化 · N3',front:'繁体字',audioFront:'繁体字',reading:'はんたいじ',def:'台灣使用的傳統漢字',ex:'台湾では繁体字を使います。',exZh:'台灣使用繁體字。'},
    {lesson:6,cat:'culture',jlpt:'n3',type:'vocab',badge:'🎎 文化 · N3',front:'簡体字',audioFront:'簡体字',reading:'かんたいじ',def:'中國大陸的簡化漢字',ex:'中国では簡体字を使います。',exZh:'中國使用簡體字。'},
    {lesson:6,cat:'culture',jlpt:'n3',type:'vocab',badge:'🎎 文化 · N3',front:'画数',audioFront:'かくすう',reading:'かくすう',def:'筆畫數',ex:'「藤」は画数が多くて書くのが大変です。',exZh:'「藤」筆畫很多，很難寫。'},
    {lesson:6,cat:'culture',jlpt:'n3',type:'vocab',badge:'🎎 文化 · N3',front:'天狗',audioFront:'てんぐ',reading:'てんぐ',def:'日本妖怪（紅臉長鼻）',ex:'天狗は赤い顔と長い鼻が特徴です。',exZh:'天狗的特徵是紅臉和長鼻子。'},
    {lesson:6,cat:'culture',jlpt:'n3',type:'vocab',badge:'🎎 文化 · N3',front:'猫車',audioFront:'ねこぐるま',reading:'ねこぐるま',def:'獨輪手推車（工地用）',ex:'猫車は工事現場で使う一輪車です。',exZh:'猫車是工地用的獨輪手推車。'},
    {lesson:7,cat:'culture',jlpt:'n3',type:'vocab',badge:'🎎 文化 · N3',front:'統治',audioFront:'とうち',reading:'とうち',def:'統治',ex:'日本は昔、台湾を統治していました。',exZh:'日本以前曾統治過台灣。'},
    {lesson:7,cat:'culture',jlpt:'n3',type:'vocab',badge:'🎎 文化 · N3',front:'植民地',audioFront:'しょくみんち',reading:'しょくみんち',def:'殖民地',ex:'台湾はかつて日本の植民地でした。',exZh:'台灣曾經是日本的殖民地。'},
    /* ── 食べ物 · 単語 ── */
    {lesson:6,cat:'food',jlpt:'n4',type:'vocab',badge:'🍱 食べ物 · N4',front:'月餅',audioFront:'月餅',reading:'げっぺい',def:'月餅（中秋節のお菓子）',ex:'月餅は甘すぎます。',exZh:'月餅太甜了。'},
    {lesson:6,cat:'food',jlpt:'n4',type:'vocab',badge:'🍱 食べ物 · N4',front:'文旦',audioFront:'文旦',reading:'ぶんたん',def:'文旦（大きな柑橘類）',ex:'文旦の皮はむくのが大変です。',exZh:'文旦的皮很難剝。'},
    {lesson:6,cat:'food',jlpt:'n4',type:'vocab',badge:'🍱 食べ物 · N4',front:'淹れる',audioFront:'いれる',reading:'いれる',def:'（お茶・コーヒーを）沖泡',ex:'コーヒーを自分で淹れました。',exZh:'自己泡了咖啡。'},
    {lesson:7,cat:'food',jlpt:'n4',type:'vocab',badge:'🍱 食べ物 · N4',front:'畑仕事',audioFront:'はたけしごと',reading:'はたけしごと',def:'農活、在田裡工作',ex:'おばあちゃんは毎日山へ行って、畑仕事をします。',exZh:'奶奶每天去山上種田。'},
    {lesson:7,cat:'food',jlpt:'n4',type:'vocab',badge:'🍱 食べ物 · N4',front:'収穫する',audioFront:'しゅうかくする',reading:'しゅうかくする',def:'收成、採收',ex:'水の中に入って、水蓮菜を収穫します。',exZh:'進到水裡採收水蓮菜。'},
    {lesson:7,cat:'food',jlpt:'n4',type:'vocab',badge:'🍱 食べ物 · N4',front:'食感',audioFront:'しょっかん',reading:'しょっかん',def:'口感、食物的口感',ex:'炒めすぎると、食感がふにゃふにゃになります。',exZh:'炒太久的話，口感會變得軟爛。'},
    {lesson:7,cat:'food',jlpt:'n3',type:'vocab',badge:'🍱 食べ物 · N3',front:'歯ごたえ',audioFront:'はごたえ',reading:'はごたえ',def:'嚼勁、咬勁',ex:'水蓮菜はシャキシャキした歯ごたえがあります。',exZh:'水蓮菜有脆脆的嚼勁。'},
    {lesson:7,cat:'food',jlpt:'n4',type:'vocab',badge:'🍱 食べ物 · N4',front:'煮干し',audioFront:'にぼし',reading:'にぼし',def:'小魚乾',ex:'山蘇と煮干しを一緒に炒めると、おいしいです。',exZh:'山蘇和小魚乾一起炒很好吃。'},
    {lesson:7,cat:'food',jlpt:'n4',type:'vocab',badge:'🍱 食べ物 · N4',front:'浸かる',audioFront:'つかる',reading:'つかる',def:'浸泡在水中、泡在裡面',ex:'水蓮菜は深い池に浸かって育ちます。',exZh:'水蓮菜浸泡在深水池中生長。'},
    /* ── 日常 · 単語 ── */
    {lesson:1,cat:'daily',jlpt:'n5',type:'vocab',badge:'💬 日常 · N5',front:'大人',audioFront:'おとな',reading:'おとな',def:'大人、成人',ex:'大人二人でホテルを予約しました。',exZh:'預訂了2位大人的飯店。'},
    {lesson:1,cat:'daily',jlpt:'n5',type:'vocab',badge:'💬 日常 · N5',front:'後ろ',audioFront:'うしろ',reading:'うしろ',def:'後面、後方',ex:'後ろに大きな看板があります。',exZh:'後面有一個大看板。'},
    {lesson:1,cat:'daily',jlpt:'n5',type:'vocab',badge:'💬 日常 · N5',front:'文法',audioFront:'ぶんぽう',reading:'ぶんぽう',def:'文法 Grammar',ex:'文法を毎日練習しています。',exZh:'每天都在練習文法。'},
    {lesson:4,cat:'daily',jlpt:'n3',type:'vocab',badge:'💬 日常 · N3',front:'頻度',audioFront:'ひんど',reading:'ひんど',def:'頻率 frequency',ex:'どのくらいの頻度で行きますか？',exZh:'你大概多久去一次？'},
    {lesson:4,cat:'daily',jlpt:'n4',type:'vocab',badge:'💬 日常 · N4',front:'お義母さん',audioFront:'お義母さん',reading:'おかあさん / ぎぼ',def:'岳母、婆婆',ex:'子供をお義母さんに預けました。',exZh:'把孩子託給婆婆照顧了。'},
    {lesson:4,cat:'daily',jlpt:'n4',type:'vocab',badge:'💬 日常 · N4',front:'預ける',audioFront:'あずける',reading:'あずける',def:'寄放、托付',ex:'毎週、子供を義母に預けます。',exZh:'每週都把孩子托給婆婆。'},
    {lesson:4,cat:'daily',jlpt:'n4',type:'vocab',badge:'💬 日常 · N4',front:'免税',audioFront:'めんぜい',reading:'めんぜい',def:'免稅 duty-free',ex:'免税でコスメを買いました。',exZh:'免稅購買了化妝品。'},
    {lesson:4,cat:'daily',jlpt:'n3',type:'vocab',badge:'💬 日常 · N3',front:'好奇心旺盛',audioFront:'好奇心旺盛',reading:'こうきしんおうせい',def:'充滿好奇心',ex:'私は好奇心旺盛な人間です。',exZh:'我是個充滿好奇心的人。'},
    {lesson:4,cat:'daily',jlpt:'n3',type:'vocab',badge:'💬 日常 · N3',front:'偶然の出会い',audioFront:'偶然の出会い',reading:'ぐうぜんのであい',def:'偶然的邂逅',ex:'旅先で偶然の出会いがありました。',exZh:'旅途中有了一場偶然的相遇。'},
    {lesson:5,cat:'daily',jlpt:'n4',type:'vocab',badge:'💬 日常 · N4',front:'さっぱりした',audioFront:'さっぱりした',reading:'さっぱり',def:'感覺清爽了',ex:'髪を切ってさっぱりしました！',exZh:'剪完頭髮感覺清爽多了！'},
    {lesson:5,cat:'daily',jlpt:'n4',type:'vocab',badge:'💬 日常 · N4',front:'丈夫',audioFront:'じょうぶ',reading:'じょうぶ',def:'堅固耐用',ex:'トヨタは丈夫で長持ちします。',exZh:'豐田既堅固又耐用。'},
    /* ── 文法 · N5 ── */
    {lesson:1,jlpt:'n5',type:'gram',badge:'文法 · N5',front:'〜ことが むずかしい',audioFront:'〜ことがむずかしい',reading:'',def:'做〜是困難的',ex:'話すことがむずかしい。',exZh:'說話是困難的。'},
    {lesson:1,jlpt:'n5',type:'gram',badge:'文法 · N5',front:'簡単な〜なら〜できます',audioFront:'簡単な〜なら〜できます',reading:'',def:'如果是簡單的〜就能〜',ex:'簡単な日本語なら聞き取れます。',exZh:'如果是簡單的日語我能聽懂。'},
    {lesson:3,jlpt:'n5',type:'gram',badge:'文法 · N5',front:'A より B の方が〜',audioFront:'AよりBの方が〜',reading:'',def:'B 比 A 更〜（比較句型）',ex:'私は電車より車の方が好きです。',exZh:'我比起電車更喜歡開車。'},
    /* ── 文法 · N4 ── */
    {lesson:2,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'〜と書いてあります',audioFront:'〜と書いてあります',reading:'',def:'上面寫著〜（書寫存在狀態）',ex:'２番ホーム、新宿方面と書いてあります。',exZh:'上面寫著「2號月台，往新宿方向」。'},
    {lesson:2,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'〜が飾ってあります ／ 置いてあります',audioFront:'〜が飾ってあります',reading:'',def:'擺放著〜（有人刻意放置的結果狀態）',ex:'壁に桜の絵が飾ってあります。',exZh:'牆上裝飾著一幅櫻花畫。'},
    {lesson:4,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'〜しないといけません',audioFront:'〜しないといけません',reading:'',def:'必須做〜 ／ I have to 〜',ex:'早く寝ないといけません。',exZh:'必須早點睡覺。'},
    {lesson:4,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'〜に〜回くらいの頻度で',audioFront:'〜に〜回くらいの頻度で',reading:'',def:'每〜大約〜次的頻率',ex:'１週間に２回くらいの頻度でレッスンをしています。',exZh:'每週大概上2次課。'},
    {lesson:4,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'〜に行ってから、〜に行きます',audioFront:'〜に行ってから〜に行きます',reading:'',def:'先去〜之後，再去〜（動作順序）',ex:'美容院に行ってから、塾に行きます。',exZh:'先去美容院，再去補習班。'},
    {lesson:5,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'〜しか〜ません',audioFront:'〜しか〜ません',reading:'',def:'只有〜（強調數量少）',ex:'５時間半しか寝ていません。',exZh:'只睡了5個半小時。'},
    {lesson:5,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'〜ので、〜',audioFront:'〜ので〜',reading:'',def:'因為〜，所以〜（客觀理由）',ex:'毎日運転するので、燃費が良い車が一番いいです。',exZh:'因為每天開車，所以省油的車最好。'},
    {lesson:5,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'緩い（ゆるい）↔ 厳しい（きびしい）',audioFront:'緩い、厳しい',reading:'',def:'寬鬆 ↔ 嚴格（形容規則、管理）',ex:'台湾の方が規則が緩いと思います。',exZh:'我覺得台灣的規定比較寬鬆。'},
    {lesson:6,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'〜ながら、〜',audioFront:'〜ながら〜',reading:'',def:'一邊〜一邊〜（同時進行兩個動作）',ex:'コーヒーを飲みながら、クッキーを食べました。',exZh:'一邊喝咖啡一邊吃餅乾。'},
    {lesson:6,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'〜すぎます',audioFront:'〜すぎます',reading:'',def:'太〜了（程度超過）',ex:'月餅は甘すぎます。',exZh:'月餅太甜了。'},
    {lesson:6,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'〜はご利用ですか？ ／ 〜はお持ちですか？',audioFront:'〜はご利用ですか、〜はお持ちですか',reading:'',def:'〜要使用嗎？／〜有帶嗎？（コンビニの丁寧表現）',ex:'袋はご利用ですか？ポイントカードはお持ちですか？',exZh:'請問需要袋子嗎？需要集點卡嗎？'},
    {lesson:6,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'〜はそのままで お願いします',audioFront:'〜はそのままでお願いします',reading:'',def:'〜不用加熱，維持原樣就好',ex:'お弁当はそのままでお願いします。',exZh:'便當不用加熱，謝謝。'},
    {lesson:7,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'真っ〜（色の強調）',audioFront:'真っ黒、真っ赤、真っ白、真っ青、真っ黄色',reading:'まっくろ・まっか・まっしろ・まっさお・まっきいろ',def:'加強顏色深度（非常〜色）',ex:'大丈夫ですか？顔が真っ青ですよ。',exZh:'你還好嗎？臉都白了。'},
    {lesson:7,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'〜たことがあります',audioFront:'〜たことがあります',reading:'',def:'曾經〜過（過去的經驗）',ex:'長崎の原爆資料館に行ったことがあります。',exZh:'我曾經去過長崎原爆資料館。'},
    {lesson:7,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'〜ない方がいい',audioFront:'〜ない方がいい',reading:'',def:'最好不要〜（建議避免）',ex:'水蓮菜は炒め過ぎない方がいいです。',exZh:'水蓮菜最好不要炒太久。'},
    {lesson:7,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'〜てはいけません',audioFront:'〜てはいけません',reading:'',def:'不可以〜（禁止）',ex:'長く炒めてはいけません。',exZh:'不可以炒太長時間。'},
    {lesson:7,jlpt:'n4',type:'gram',badge:'文法 · N4',front:'〜はずです',audioFront:'〜はずです',reading:'',def:'應該〜（根據理由做出推測或期待）',ex:'山蘇は、きっと日本人の口に合うはずです。',exZh:'山蘇應該很合日本人的口味。'},
    /* ── 文法 · N3 ── */
    {lesson:3,jlpt:'n3',type:'gram',badge:'文法 · N3',front:'こういう ／ このような ／ これみたいな',audioFront:'こういう、このような、これみたいな',reading:'',def:'像這樣的〜（口語：これみたいな＞こういう＞このような）',ex:'最近このような健康にいいお弁当があります。',exZh:'最近有這樣對身體好的便當。'},
  ];
