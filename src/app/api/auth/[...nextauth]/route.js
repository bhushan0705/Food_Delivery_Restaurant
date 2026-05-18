// import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/connectDB";
import User from "@/models/RestroUser";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        name: {},
        email: {},
        password: {},
        type: {},
      },

      async authorize(credentials) {
        await connectDB();

        // LOGIN
        if (credentials.type === "login") {
          const user = await User.findOne({ email: credentials.email });
          if (!user) throw new Error("User not found");

          const ok = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!ok) throw new Error("Wrong password");

          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
          };
        }

        // SIGNUP
        if (credentials.type === "signup") {
          const exists = await User.findOne({ email: credentials.email });
          if (exists) throw new Error("User already exists");

          const hash = await bcrypt.hash(credentials.password, 10);

          const newUser = await User.create({
            name: credentials.name,
            email: credentials.email,
            password: hash,
            role: "restaurant_owner",
          });

          return {
            id: newUser._id.toString(),
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
          };
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      await connectDB();

      const exists = await User.findOne({ email: user.email });

      if (!exists) {
        await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
          role: "restaurant_owner",
        });
      }

      return true;
    },

    async session({ session }) {
      await connectDB();

      const dbUser = await User.findOne({ email: session.user.email });

      if (dbUser) {
        session.user.id = dbUser._id.toString();
        session.user.role = dbUser.role;
      }

      return session;
    },

    async redirect() {
      return "/restaurant/dashboard";
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };