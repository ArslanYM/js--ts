import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// import { Provider } from "next-auth/providers/index"


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET,
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24* 60* 60,
  },
  jwt : {
    encryption : true
  },
}


export default NextAuth(authOptions)