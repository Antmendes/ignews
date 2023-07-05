import NextAuth from 'next-auth/next';
import GitHubProvider from "next-auth/providers/github";

import { fauna } from '../../../services/fauna'
import { query } from 'faunadb'

 export const authOption = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            
          })
    ],

    callbacks: {                         // configuração para inserir o usuario logado no BD
        async signIn({user, account, profile}) {
            const { email } = user

            try {
                await fauna.query(
                    query.If(
                        query.Not(
                            query.Exists(
                                query.Match(
                                    query.Index('user_by_email'),
                                    query.Casefold(user.email)
                                )
                            )
                        ),
                        query.Create(
                            query.Collection('users'),
                            { data: { email }}
                        ),
                        query.Get(
                            query.Match(
                                query.Index('user_by_email'),
                                query.Casefold(user.email)
                            )
                        )
                    )
                )
                return true
            } catch {
                return false
            }

            
        }
    }
   
}

const handler = NextAuth(authOption)


export { handler as GET, handler as POST }