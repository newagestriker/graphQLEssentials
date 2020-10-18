import express from "express";
import ExpGrapQl from "express-graphql";
import schema from "./data/schema.js";
import resolvers from "./data/resolvers.js";

const app = express();

const { graphqlHTTP } = ExpGrapQl;

app.get("/", (req, res) => {
  res.send("GraphQl is amazing");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(8080, () => console.log("server started at port 8080"));
