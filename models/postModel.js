module.exports = mongoose => {
    const postSchema = mongoose.Schema(
      {
         title : { type: String, required: true },
         content: { type: String, required: true },
         skills: [{ type : String, required: false }],
         author : { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
         skillsList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
      },
      { timestamps: { createdAt: "created_at" } }
      
    );

    const Post = mongoose.model("post", postSchema);
    return Post;
  };
