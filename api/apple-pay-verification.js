import { readFileSync } from 'fs'
import { join } from 'path'

export default function handler(req, res) {
  const file = readFileSync(
    join(process.cwd(), 'client/public/.well-known/apple-developer-merchantid-domain-association')
  )
  res.setHeader('Content-Type', 'application/text')
  res.send(file)
}
