import { loadSync } from 'protobufjs'

const main = async () => {

  const Test = loadSync('./test.proto')
  const protoPacket = Test.lookupType('Test.Response')

  const data = {
    id: 2,
    name: 'he is name'
  }

  // giving 28 
  console.log(JSON.stringify(data).length)

  const encoded = protoPacket.encode(data).finish()

  // giving 14
  console.log(encoded.length)

  console.log(protoPacket.toObject(protoPacket.decode(Buffer.from(encoded))))

}

main()