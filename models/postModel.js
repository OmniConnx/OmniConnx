module.exports = mongoose => {
    const postSchema = mongoose.Schema(
      {
         title : { type: String, required: true },
         content : { type: String, required: true },
         author : { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
         skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],

      },
      { timestamps: { createdAt: "created_at" } }
      
    );

    const Post = mongoose.model("post", postSchema);
    return Post;
  };
