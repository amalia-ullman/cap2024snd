import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    author: {
      name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
      age: {
        type: Number
      },
      pfp: {
        type: String
      }
    },
    tags: {
      type: [String],
      required: true
    }
  },
  { timestamps: true }
);

export const Post = model("Post", postSchema);
