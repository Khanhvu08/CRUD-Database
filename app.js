const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./model/user");
const config = require("./config");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  try {
    await mongoose.connect(config.uri);
    const labModels = await userModel.find();
    res.send(JSON.stringify(labModels));
  } catch (error) {
    console.log(error);
  }
});
app.get("/add", async (req, res) => {
  await mongoose.connect(config.uri);
  const newUsers = [
    {
      name: "Alice",
      birthday: "1990-01-01",
      age: 31,
    },
    {
      name: "Bob",
      birthday: "1985-04-15",
      age: 36,
    },
    {
      name: "Charlie",
      birthday: "2000-12-31",
      age: 21,
    },
  ];
  try {
    await userModel.insertMany(newUsers);
    const labModels = await userModel.find();
    res.send(JSON.stringify(labModels));
  } catch (error) {
    console.log(error);
  }
});
// app.get("/update", async (req, res) => {
//   try {
//     await mongoose.connect(config.uri);

//     await userModel.updateOne({age:21}, {age:61})
//     // 3 tham so
//     // upsert: thêm bản ghi mới, nếu điều kiện không tìm thấy 
//     // await userModel.updateOne({age:21}, {$set:{age:61}},{upsert:true})
    
//      console.log('cap nhat thanh cong');
//      const labModels = await userModel.find();
//     res.send(JSON.stringify(labModels))

//   } catch (error) {
//     console.log(error);
//   }
// });

// app.get("/delete", async (req, res) => {
//   try {
//     await mongoose.connect(config.uri);

//       await userModel.deleteOne({age:36})
//      console.log('xoa thanh cong');
//      const labModels = await userModel.find();
//     res.send(JSON.stringify(labModels))

//   } catch (error) {
//     console.log(error);
//   }
// });

app.listen(port, (err) =>
  console.log(`Server listening on http://localhost:${port}`)
);
