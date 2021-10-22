module.exports = mongoose => {

//Implement random id generation later
  const UserSchema = mongoose.Schema(
    {
      //  first_name: { type: String, required: true },
      //  last_name: { type: String, required: true },
      username: { type: String, required: true },
      password: { type: String, required: true },
      // phone: { type: String, required: true },
      // location_value: { type: String, required: true },
      // account_type: { type: String, required: true },
      // company_id: { type: Number, required: true },
      // calendar_id: { type: String, required: true },
      // CV_ID: { type: Number, required: true },
      //posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    },
    { timestamps: { createdAt: "created_at" } }
  
  );
  
  //If you use this app with a front-end that needs id field instead of _id, you have to override toJSON 
  //method that map default object to a custom object. So the Mongoose model could be modified as following code:
  // UserSchema.method("toJSON", function() {
  //   const { __v, _id, ...object } = this.toObject();
  //   object.id = _id;
  //   return object;
  // });

  const User = mongoose.model("user", UserSchema);
  return User;
};