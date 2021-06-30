import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://thegraph.bafswap.live/subgraphs/name/bafswap/exchange",
  }),
  cache: new InMemoryCache(),
});
