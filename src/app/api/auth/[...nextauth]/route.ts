import NextAuth from 'next-auth/next';
import GitHubProvider from "next-auth/providers/github";



 export const authOption = {
    providers: [
        GitHubProvider({
            clientId: 'fdf79fac8c190bc9489d',
            clientSecret: '93a75f792cb006ebb2ba45d5bdc5cdbfab56f57c',
            
          })
    ],
   
}

const handler = NextAuth(authOption)


export { handler as GET, handler as POST }