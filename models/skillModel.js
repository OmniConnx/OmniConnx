module.exports = mongoose => {
  const skillSchema = mongoose.Schema(
    {
      skillName: { type: String, required: true },
      upvotes: { type: Number, required: true },
      downvotes: { type: Number, required: true},
    }
  );

  const Skill = mongoose.model("skill", skillSchema);
  return Skill;
};
