import mongoose from 'mongoose';

const { Schema, models, model } = mongoose;

const Slider = new Schema({
  /**
   * 轮播图标题
   */
  title: {
    type: String,
    required: true
  },
  /**
   * 轮播图描述
   */
  description: {
    type: String,
    required: true
  },
  /**
   * 按钮文案
   */
  buttonText: {
    type: String,
    required: true
  },
  /**
   * 轮播图图片
   */
  backgroundImage: {
    type: String,
    required: true
  },
  /**
   * 轮播图图片 0 显示 1 删除
   */
  status: {
    type: Number,
    default: 0
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

export default models.sliders || model('sliders', Slider);