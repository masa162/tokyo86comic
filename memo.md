nakayamamasayuki@nakayamamasayukinoMacBook-Air GitHub % git clone git@github.com:masa162/tokyo86comic
Cloning into 'tokyo86comic'...
warning: You appear to have cloned an empty repository.
nakayamamasayuki@nakayamamasayukinoMacBook-Air GitHub % git init
Reinitialized existing Git repository in /Users/nakayamamasayuki/Documents/GitHub/.git/

先ほど新規で作った、tokyo86comicレポジトリをクロンしました

ここで始めましょう、
あらためて、状況整理しつつ、きぼうなど伝えます、

私、中山正之が描くwetoonを
img.tokyo86.comにupして、
tokyo86.com
にスムーズにpublishしていくのが目的
運用コスト、負担をできるだけ少なくしたい、
upなどの運用導線をスムーズに

当初のコンセプトどおり、
キャラや設定の垣根なく、どんどん思いついては、ネーム感覚でラフにかいてupしていけることがきぼう、
なので、
tokyo86.com
をtopドメインとして、キャラ、タイトル関係なくどんどん放り込んでいける場としたい

そのあと、特定のキャラ、ジョニー、トーコなど世界観かたまったり、ある程度の量たまったり、したら→独立作品として、republichするかたちで、ページを作成するか、Blue Moon Madnessとして1冊出来た！
tokyo86.com/title/bluemoon
みたいに

いくつか提案
経験的に
cloudflareでの動作では、nextjsより、
honoで作ったほうが、うまくいく気がしてる
ここどう？他にwebtoonにおすすめな方法あったらおしえて

それでいくと
/Users/nakayamamasayuki/Documents/GitHub/unbelongcomic
がプロジェクト思想的にも直系、参考になると思う、

そして、unbelong時代の名残で
core機能になる、画像CDNの方に、コミック、イラストの管理画面を含めて持たせていた経緯がある、

/Users/nakayamamasayuki/Documents/GitHub/tokyo86img

これのメリットは画像UPして、そのまま、フロント側もpublishできる
というフローができること、

要件的には、自分のスタイルは
webtoonの画像はスクエアを基本にして、その画像を連続していく、
もしくは、縦に一本長い画像1000✕4000ピクセル1枚でwebtoon見せる

これは、その時々にもよるので柔軟性あったほうがいいし、
そのあとの1コマ修正にも、

markdownの記事に画像CDNを連記する

そのため、バッチupload機能をimg.tokyo86.comにもたせているのはこのため、
![](https://img.tokyo86.com/17pokm/001.webp)
![](https://img.tokyo86.com/17pokm/002.webp)
![](https://img.tokyo86.com/17pokm/003.webp)
![](https://img.tokyo86.com/17pokm/004.webp)
などのように運用できるから

これ踏まえて、今リブートでまっさらな状態からつくれる良い機会なので、
再考、取り入れるべきものあったら教えて、評価アドバイスたのむ

OK、表示できた、やっぱdistが抜けてた
https://tokyo86comic.pages.dev/

フィードバックします、
ちゃんとバッチであげたものが単位で表示されてる、

良い点
完全に作動してる、
気づきとして、やはりバッチでセットでupして、表示まで完了する
、最短、簡潔さが気持ちいい、

悪い点
今のところバッチ内の編集機能がない
固定されてる、4コマのうち3コマ目だけ画像修正してupしなおしたいな”に対応できない、

＞気づき、改善
（編集できないのはトレードオフとして割り切るか、、）

伝え忘れてたんだが、そもそも画像CDNとしても活用する前提ではいて、、もともと、医スクisk.masa86.com
中山雑記blog.masa86.com
うちのきろくuchinokiroku.com
とかにも、markdown記事にURLで呼べるようにCDNとして機能してほしくて、
植物観察いったときとか、バッチで一括で撮影写真100枚とかあげたいな、というきぼうからはじまってる、
他で運用してる画像もtokyo86.com　webtoonでみれちゃうのが今よくない、
なので、いまの私が”バッチ”といってる機能はそのまま、で
webtoonようにtoonバッチとか、”セット”とかの概念を別に作ると良い気もした、この辺評価、アドバイスたのむ



![](https://img.tokyo86.com/bpmsma/001.webp)
![](https://img.tokyo86.com/bpmsma/002.webp)
![](https://img.tokyo86.com/bpmsma/003.webp)


バッチupload試しました

ld0p5x
にほんごはどこから0412

箱はできたけど、画像はuploadされなかったような状態

uploadできた、
ファイル形式の問題だったぽい

Batch ID
fk4mz7
にほんごはどこから0412_b

webpとpngはuploadできてる、
フロントにも反映されてる、いいね、
https://tokyo86comic.pages.dev/b/fk4mz7


Batch ID
ytf46x
にほんごはどこから0412_c
アップロードに失敗しました: Request failed with status code 500

0412_1.avif
とかのファイルが失敗してるぽいね、
これは、

webp、png、jpegで運用すればいいからOK