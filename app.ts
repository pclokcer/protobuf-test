import { loadSync } from 'protobufjs'

const main = async () => {

  const Test = loadSync('./test.proto')
  const protoPacket = Test.lookupType('Test.Response')

  const data = {
    id: 2,
    name: 'he is name'
  }

  const encoded = protoPacket.encode(data).finish()

  console.log(protoPacket.toObject(protoPacket.decode(Buffer.from(encoded))))

}

main()