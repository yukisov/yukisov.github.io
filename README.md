Web site resources for yukisov.github.io
=====


ディレクトリ構成
----------------

- [Directory structure - Jekyll • Simple, blog-aware, static sites](https://jekyllrb.com/docs/structure/)



How to Update articles
----------------------

1. Edit some files
2. $ jekyll serve
    - Build files
    - Run Web Server on local

jekyll コマンド
---------------

ウェブサーバ起動

```
bundle exec jekyll server
```

ウェブサーバ起動（自動ビルドつき）

```
bundle exec jekyll server --watch
```

各HTML(or Markdown)ファイルを_siteフォルダに反映させる

```
bundle exec jekyll build
```

Changelog
---------

- 2019-06
  - 現時点でサイトには何も表示していない。
  - 利用ツールも一旦白紙に戻す。

- 2016-05-10
  - JS, CSSの生成ツールは GulpをやめてWebpackを使うようにした。

