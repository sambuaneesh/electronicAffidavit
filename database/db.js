const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb+srv://stealthspectre:FsnROGuq19Kt2281@cluster0.4xcubyk.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection
  .once("open", () => console.log("Connected to the database!"))
  .on("error", (err) => console.log("Error with the database!", err));
