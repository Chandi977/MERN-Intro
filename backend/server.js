import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

const port = process.env.PORT || 3000;

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "Why did the chicken cross the road? To get to the other side.",
    },
    {
      id: 2,
      title: "Another joke",
      content: "Why did the tomato turn red? It saw the salad dressing.",
    },
    {
      id: 3,
      title: "A third joke",
      content: "Why did the cow cross the road? To get to the other side.",
    },
    {
      id: 4,
      title: "A fourth joke",
      content: "Why did the mouse get lost? It ran away from the computer.",
    },
    {
      id: 5,
      title: "A fifth joke",
      content: "Why did the pig cross the road? To get to the other side.",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
