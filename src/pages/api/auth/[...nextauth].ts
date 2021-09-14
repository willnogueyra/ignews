import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],
})

/* 
  Next usa back-end serveless -> não fica 24hrs conectado ao servidor sendo assim,
  faz varias conexões se for autenticada.

  FaunaDB -> melhor opção para db com serverless nextjs

  dynamoDB, mongoDB -> fica conectado 24hrs com servidor sendo assim mantém conexao uma unica vez
*/