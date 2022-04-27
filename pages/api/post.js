// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Text from "../../model/post"
const connect = require('../../utils/mongodb')

connect()

export default async (req, res)=>{
  const method = req.method
  let text
  switch(method){
    case 'GET':
      text = await Text.find()
      res.status(200).json({data: text})
      break
    case 'POST':
      text = new Text(req.body)
      await text.save()
      res.status(201).redirect('/')
      break
    default:
      res.status(400).redirect('/')
  }
}
