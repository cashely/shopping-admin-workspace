import { models } from "mongoose"
// 获取轮播图数据
export async function GET(req, res) {
  try {
    const sliders = await models.sliders.find({
      status: 0 // 仅查询显示的图片
    });
    res.json({
      code: 0,
      data: sliders
    })
  } catch(e) {
    res.json({
      code: 1,
      errorMsg: e.message
    })
  }
}
// 增加轮播图数据
export async function POST(req, res) {
  const { title, description, buttonText, backgroundImage } = req.body
  const Slider = new models.sliders({
    title,
    description,
    buttonText,
    backgroundImage
  });

  try {
    const result = await Slider.save();
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