import mongoose from "mongoose";

// const connectDB = (URI) => {
//   return mongoose
//     .connect(URI)
//     .then(() => {
//       console.log(`DataBase Connected...`);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// Same Function in Async Await
const connectDB = async (URI) => {
  try {
    await mongoose.connect(URI).then(() => {
      console.log(`DataBase Connected...`);
    });
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
