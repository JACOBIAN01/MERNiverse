import mongoose from "mongoose"

const BookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  PublishYear: {
    type: Number,
    required: true,
  },
},
{
timestamp:true,
}
);
