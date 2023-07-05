import NextAuth from 'next-auth/next';
import GitHubProvider from "next-auth/providers/github";



 export const authOption = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            
          })
    ],
   
}

const handler = NextAuth(authOption)


export { handler as GET, handler as POST }