import { query as q } from "faunadb";

import GitHubProvider from "next-auth/providers/github";
import  NexAuth  from "next-auth";

import { fauna } from "../../../services/fauna";

export default NexAuth({
    providers: [
  GitHubProvider({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    authorization: { params: { scope: "read:user" }},
  }),
],
callbacks: {
  async signIn({ user, account, profile}) {
    const {email} = user

   await fauna.query(
    q.Create(
      q.Collection('user'),
      {data: {email}}
    )
   )

    return true
  },
}
})


