import { models } from 'mongoose';
// 删除单张轮播图
export async function DELETE(req, res) {
  const { id } = req.params;
  try {
    const result = await models.sliders.findOneAndUpdate({
      _id: id
    }, { $set: { status: 1 } });
    res.json({
      code: 0,
      data: result
    })
  } catch(e) {
    res.json({
      code: 1,
      errorMsg: e.message
    })
  }
}

// 查询单张轮播图
export async function GET(req, res) {
  const { id } = req.params;
  try {
    const result = await models.sliders.findOne({
      _id: id
    });
    res.json({
      code: 0,
      data: result
    })
  } catch(e) {
    res.json({
      code: 1,
      errorMsg: e.message
    })
  }
}