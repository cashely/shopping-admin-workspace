export function GET(req, res) {
  console.log(req.params)
  res.json({
    x: 333
  })
}

export function POST(req, res) {
  res.json({
    x: 345
  })
}
