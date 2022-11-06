const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
const port = 3001;

app.get("/api/all-jobs", (req, res) => {
  const jobList = [
    {
      id: 1,
      name: "Write down tasks in the morning",
      priority: 3,
    },
    {
      id: 2,
      name: "Start the day with a good sweat",
      priority: 2,
    },
    {
      id: 3,
      name: "Dedicate 10 minutes to being grateful",
      priority: 1,
    },
    {
      id: 4,
      name: "Write down your top three tasks for the day",
      priority: 2,
    },
    {
      id: 5,
      name: "Tackle your hardest daily or weekly task first",
      priority: 3,
    },
  ];
  res.json(jobList);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
