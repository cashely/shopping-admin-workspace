import mongoose from 'mongoose';

const { Schema, models, model } = mongoose;

const User = new Schema({
  name: [String, '用户名']
});

export default models.users || model('users', User);