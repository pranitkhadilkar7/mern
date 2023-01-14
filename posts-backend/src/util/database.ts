import { MongoClient } from "mongodb"

const url =
  "mongodb+srv://pranitk:0eTOYD9NNXh0T6sN@cluster0.n30exs1.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(url)

export async function run() {
  try {
    await client.connect()
    await client.db("admin").command({ ping: 1 })
    console.log("Connected successfully to server")
  } finally {
    await client.close()
  }
}
