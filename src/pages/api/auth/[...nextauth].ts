import { query } from "faunadb"

import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { fauna } from "../../../services/fauna"

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],
  jwt: {
    signingKey: process.env.SIGNING_KEY,
  },
  callbacks: {
    async signIn( user, account, profile ) {
      const { email } = user

      try {
        await fauna.query(
          query.Create(
            query.Collection('users'),
            { data: { email } }
          )
        )

        return true

      } catch {
        return false;
      }

      
    },
  }
})

/* 
  Next usa back-end serveless -> não fica 24hrs conectado ao servidor sendo assim,
  faz varias conexões se for autenticada.

  FaunaDB -> melhor opção para db com serverless nextjs

  dynamoDB, mongoDB -> fica conectado 24hrs com servidor sendo assim mantém conexao uma unica vez
*/