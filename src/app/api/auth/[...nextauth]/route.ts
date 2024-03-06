import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
     
  ],
  callbacks: {
    async signIn({user}) {
      // Check if email exists
      console.log(user.email)
      
      

      // Check if email ends with @uni.pe
      if (!user.email?.endsWith("@uni.pe")) {
        return false; // Reject if email doesn't match
      }
      console.log()
      return true; // Allow access if email matches
    },
  },

});

export { handler as GET, handler as POST };
