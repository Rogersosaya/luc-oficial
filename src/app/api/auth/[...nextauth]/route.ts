import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Check if email exists
      // console.log(user.email)

      // console.log(userExists);

      if (!user.email?.endsWith("@uni.pe")) {
        return false;
      }

      if (user.email && user.name) {
        console.log(user);
        const existUser = await prisma.user.findUnique({
          where: {
            email: user.email,
          },
        });
        const userExists = !!existUser;
        
        if (!userExists) {
          await prisma.user.create({
            data: {
              id: user.id,
              name: user.name,
              email: user.email,
              image: user.image,
            },
          });
        }
      }
      // console.log()
      return true;
    },
  },
});

export { handler as GET, handler as POST };
