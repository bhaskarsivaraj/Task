import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  postId: String,
  title: String,
  score: Number,
  answerCount: Number,
  views: Number,
  tags: Array
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
}
)

const Question = mongoose.model('Question', questionSchema);


export default Question;