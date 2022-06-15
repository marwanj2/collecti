const mongoose =  require('mongoose')
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
        length:8
      },
      password: {
        type: String,
        required: true,
      },
      pic: {
        type: String,
        required: true,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
      type: {
        type: String,
        required: true,
        default:'Citoyen'
      },
    },
    {
      timestamps: true,
    }
  );

  userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

  // will encrypt password everytime its saved
  userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });

  const User = mongoose.model("User", userSchema);

  export default User;