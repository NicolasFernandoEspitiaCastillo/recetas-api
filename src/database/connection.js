import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mi_api", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ Conectado a MongoDB");
  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error.message);
    process.exit(1);
  }
};
