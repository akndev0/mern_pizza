const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes/auth");


const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");



const app = express()
app.use(cors())
env.config()

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@clustergtr.xufzw.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("Database connected");
  }).catch(err => console.log(err));



app.use(express.json())
// app.use(express.static('../client/build'))

// if (process.env.NODE_ENV === 'production') {
//   app.get('/*', function (req, res) {
//     res.sendFile(path.resolve(__dirname, ' ../client/build', 'index.html'));
// })
// }
app.use("/api", authRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);





app.listen(process.env.PORT || 2000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})
