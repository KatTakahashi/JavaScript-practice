# 確かな力が身につく JavaScript「超」入門　第 2 版

## Chapter 4 インプットとデータの加工

### フォームの入力内容を取得

#### フォーム

<form action="#" id="id名">
  <input type="text" name="name名">
  <input type="submit" value="検索">
</form>

- HTML に記述
- action にはフォームの送信先を記述　※"#"はページの最上部を指す

#### フォームから送信された際のファンクション

取得した要素.onsubmit = function() { 処理内容 };

#### HTML のタグの基本動作をキャンセル

ファンクションの引数.preventDefault();
