# fly-postcss

> [Fly](https://github.com/flyjs/fly) plugin for [PostCSS](https://github.com/postcss/postcss)

## Usage

### Install

```shell
$ npm install --save-dev fly-postcss
```

## Example

```js
exports.stylus = function* () {
  yield this
    .source('src/*.css')
    .postcss([
        require('cssnext')(), require('cssnano')()
    ], {
        from: 'a.css',
        to: 'a.out.css'
    })
    .target('dist')
}
```

## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
