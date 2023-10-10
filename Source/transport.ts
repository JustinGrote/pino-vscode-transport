import build from 'pino-abstract-transport'

async function transport() {
  return build(async function (source) {
    for await (let obj of source) {
      console.log(obj)
    }
  }, {
    async close (err) {

    }
  })
}

export default transport
