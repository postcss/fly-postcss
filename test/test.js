const test = require('tape')
const Fly = require('fly')
const path = require('path')

const fixture = 'style.css'
const src = path.join(__dirname, 'fixture')
const dist = path.join(__dirname, 'tmp')

test('fly-postcss', t => {
  t.plan(2)

  const fly = new Fly({
    plugins: [{
      func: require('../')
    }],
    tasks: {
      fixture: function * () {
        t.ok(fly['postcss'], '`postcss` plugin successfully attached')
        yield this.source(path.join(src, fixture)).postcss({plugins: [require('autoprefixer')]}).target(dist)
        var result = yield this.$.read(path.join(dist, fixture), 'utf8')
        t.ok((result.length && /-webkit-box/.test(result)), '`postcss` transform is correct')
        this.clear(dist)
      }
    }
  })

  fly.start('fixture')
})
