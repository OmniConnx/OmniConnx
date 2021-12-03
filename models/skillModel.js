
module.exports = mongoose => {
    const postSchema = mongoose.Schema(
      {
         title : { type: String, required: true },
         content : { type: String, required: true },
         author : { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      },
      { timestamps: { createdAt: "created_at" } }
    );
    const Skill = mongoose.model("skill", postSchema);
    return Skill;
  };

// Kept content and title just in case