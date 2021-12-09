module.exports = mongoose => {
  const skillSchema = mongoose.Schema(
    {
      skillName: { type: String, required: true },
      // upvotes: { type: Number, required: true },
      // downvotes: { type: Number, required: true},
      posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
      users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    }
  );

  const Skill = mongoose.model("skill", skillSchema);
  return Skill;
};
