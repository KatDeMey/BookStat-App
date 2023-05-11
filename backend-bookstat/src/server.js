const express = require("express");
const app = express();
const port = 4000;
// const port = process.env.PORT || 4000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "BookStat server is good to go" });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


// export default app;
