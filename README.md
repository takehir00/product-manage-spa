# restful-api-frontApp

## アプリケーションの概要
商品情報の検索・登録・更新・削除を行うresutfulAPIを利用した商品管理SPA

###コンポーネントの親子関係
[コンポーネント図](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.html#R7VnRkpowFP0aH7djEkF4rO5u25m2s9Ntp%2B1jlAhpI2FiXLVf3xsIIAanux2w1V1fTA5JgHPuuZfAgEyX2zeKZskHGTExwMNoOyDXA4zRiAzhzyC7AhmHfgHEikd2UA3c81%2FMgnZevOYRWzUGaimF5lkTnMs0ZXPdwKhSctMctpCiedaMxswB7udUuOhXHumkQAM8rvG3jMdJeWbkh8WRJS0H2ztZJTSSmz2I3AzIVEmpi9ZyO2XCkFfyUsy7PXK0ujDFUv2YCTMSRSgMfG%2BGFvMZurILPFCxtvd6p2S0nuvVuzRiW3vRelcyodkWzjNJ9FIAgKCp2Ir%2ForN8wBD6meSpzvn2JgPvGhC61nJVaGomUMHjFNqCLcxSD0xpDlS%2FtrCWGaCrjM55Gn82neurkUG0kj%2FZVAqpAEplCutN7NXDEmx7lBFU8QwByuSSabWDIXYCDooZuzLkbGhuaqFDK16yp3EpKLWhFVcL1%2BxDwwrwODE8h24WQRzarlQ6kbFMqbip0YmSaxAqsuTv6cK2XH8z8CvP9r7bIz%2BY1jtrMqMNQPXa72VOOarINZfwVGoVE1Tzh%2Ba8Nqbs1DsTM7Uk%2FrApCfGbK6zkWs2ZnbQf7E9cR1MVM%2B2sk8tW3c1fKek7tnKkhUyQmSbQqTkVnyBv0TTONd0kXLN7cIA5voGUeuA4G4VG8NwteWsmtZZL21lwIQ6sAoGiwVFT0I4pExhXRWQ0fTXAZJj%2FujHX6EAB7Jpr3GIuREbduys4H00iruDUXJp8CMFuqOpEDdJUwxs6apBxixrI716NsrS3VJ6PbPMf1Z0OeA8PXDByeT9ViUHj83FBr5kJDQ9E8V1R2lJTL6KcUWo6LkpPScsRKnCFwi1C%2BX0IFTpC3Uq1vKxshfAB4WOX8NGJnIHdKvHijCPlvNot%2F6mc9yLU8Y3klyyiml2WRwKvaZEwcKiv8lbvHsGX4JEeKgVGriqnKumYPIdKgZo2qN6l%2FItK4V2CC070DIVJW75yhQpxD0JdxA6kr5J%2BoFPLpqTNUAj14Sh3V1KWdMg1F17Rccu7kVPt0bG7yzhDh%2FSRtnz39WHQJkoPbw%2FJy07kCUKFrnva6ks1r1Ol3K3IM3j0ankr0tGjF3Tr75PFt5H6Ky%2B5%2BQ0%3D)

### 開発環境
- 使用言語: javascript
- フレームワーク: React @ 16.4.2
- 使用しているモジュール:
- node @ 8.11.1
- npm @ 6.2.0
- yarn @ 1.10.1
- react-dom @ 16.6.3
- react-scripts @ 2.1.1
- react-bootstrap @ 0.32.4

### 環境構築手順
#### Homebrew のインストール
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### Node.jsのインストール
```
$ brew install node
```
#### yarnのインストール
````
$ npm install --global yarn
````
#### リポジトリのクローン
```
$ git clone git@bitbucket.org:teamlabengineering/okuyama-react-front.git
```
#### http://localhost:3000/ で起動
````
$ yarn run start
````

#### コンポーネントの親子関係
[コンポーネント図](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.html#R7VnRkpowFP0aH7djEkF4rO5u25m2s9Ntp%2B1jlAhpI2FiXLVf3xsIIAanux2w1V1fTA5JgHPuuZfAgEyX2zeKZskHGTExwMNoOyDXA4zRiAzhzyC7AhmHfgHEikd2UA3c81%2FMgnZevOYRWzUGaimF5lkTnMs0ZXPdwKhSctMctpCiedaMxswB7udUuOhXHumkQAM8rvG3jMdJeWbkh8WRJS0H2ztZJTSSmz2I3AzIVEmpi9ZyO2XCkFfyUsy7PXK0ujDFUv2YCTMSRSgMfG%2BGFvMZurILPFCxtvd6p2S0nuvVuzRiW3vRelcyodkWzjNJ9FIAgKCp2Ir%2ForN8wBD6meSpzvn2JgPvGhC61nJVaGomUMHjFNqCLcxSD0xpDlS%2FtrCWGaCrjM55Gn82neurkUG0kj%2FZVAqpAEplCutN7NXDEmx7lBFU8QwByuSSabWDIXYCDooZuzLkbGhuaqFDK16yp3EpKLWhFVcL1%2BxDwwrwODE8h24WQRzarlQ6kbFMqbip0YmSaxAqsuTv6cK2XH8z8CvP9r7bIz%2BY1jtrMqMNQPXa72VOOarINZfwVGoVE1Tzh%2Ba8Nqbs1DsTM7Uk%2FrApCfGbK6zkWs2ZnbQf7E9cR1MVM%2B2sk8tW3c1fKek7tnKkhUyQmSbQqTkVnyBv0TTONd0kXLN7cIA5voGUeuA4G4VG8NwteWsmtZZL21lwIQ6sAoGiwVFT0I4pExhXRWQ0fTXAZJj%2FujHX6EAB7Jpr3GIuREbduys4H00iruDUXJp8CMFuqOpEDdJUwxs6apBxixrI716NsrS3VJ6PbPMf1Z0OeA8PXDByeT9ViUHj83FBr5kJDQ9E8V1R2lJTL6KcUWo6LkpPScsRKnCFwi1C%2BX0IFTpC3Uq1vKxshfAB4WOX8NGJnIHdKvHijCPlvNot%2F6mc9yLU8Y3klyyiml2WRwKvaZEwcKiv8lbvHsGX4JEeKgVGriqnKumYPIdKgZo2qN6l%2FItK4V2CC070DIVJW75yhQpxD0JdxA6kr5J%2BoFPLpqTNUAj14Sh3V1KWdMg1F17Rccu7kVPt0bG7yzhDh%2FSRtnz39WHQJkoPbw%2FJy07kCUKFrnva6ks1r1Ol3K3IM3j0ankr0tGjF3Tr75PFt5H6Ky%2B5%2BQ0%3D)

#### 画面仕様
- 一覧画面
- 新規作成画面
- 更新画面
- 削除画面

##### 一覧画面
- https://gyazo.com/086296bacabf059c11ee7558c639e1ff
- 検索フォームに商品名を入力し、該当する商品があれば一覧画面に表示される。

##### 新規作成画面 
- https://gyazo.com/9ae9d7dfde1fc2c6cf109b76add56ba7
- 商品作成フォームに商品情報を入力し、submitボタンを押下すると商品情報が登録され商品一覧画面に遷移する。

##### 更新画面
- https://gyazo.com/21c0b77e83840a578955d290ead9708c
- 更新したい情報を編集し、submitボタンを押下すると商品情報が更新され商品一覧画面に遷移する。

##### 削除画面
- https://gyazo.com/5660e396da00e5fa2cdceef5368ad90d
- 削除ボタンを押下すると指定した商品情報が削除され、一覧画面に遷移する。


