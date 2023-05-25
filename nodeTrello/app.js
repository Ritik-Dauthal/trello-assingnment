const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/create-card", async (req, res) => {
  const { name, desc, due, start } = req.body;
  console.log("testing");
  try {
    const response = await axios.post(
      "https://api.trello.com/1/cards?idList=646ce697c046d490eac7a6af&key=f4565c966a4d1b57b7befbec8d2ace9b&token=ATTA32dd9f7d4368932d9f916f545fc7992ce2282b06d9bea24ccc7eb9b1db1fe18e42C0C707",
      {
        name,
        desc,
        due,
        start,
      }
    );
    res.json({ status: 200, data: response.data });
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});
app.listen(3001, () => console.log("running"));
