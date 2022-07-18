import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "597988800884-d2ebae1sirboi2h5gb2iovo18p2l1smi.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // FacebookProvider({
    //   clientId: process.env.FB_CLIENT_ID,
    //   clientSecret: process.env.FB_SECREY_KEY,
    // }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      var raw = "";

      var requestOptions = {
        method: "POST",
        headers: {
          Authorization:
            "Basic c0xKVHJPRk0zMEVKSWhEdHZUclJvNEh3OmJJUjVOSndXcUFhRE52eGpVcVVnbE4tdGhDbFFsMnBn",
        },
        body: raw,
        redirect: "follow",
      };

      let data = await fetch(
        "https://auth.us-central1.gcp.commercetools.com/oauth/token?grant_type=client_credentials",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          return JSON.parse(result);
        })
        .catch((error) => console.log("error", error));

      let accessToken = data.access_token;

      var requestOptions = {
        method: "GET",
        headers: { Authorization: "Bearer " + accessToken },

        redirect: "follow",
      };
      let allcustomers = await fetch(
        "https://api.us-central1.gcp.commercetools.com/onlinestore-poc/customers?limit=500",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          return JSON.parse(result);
        })
        .catch((error) => console.log("error", error));

      let userexist = false;
      allcustomers.results.map((cust) => {
        if (cust.email === profile.email) {
          userexist = true;
        }
      });

      if (!userexist) {
        var raw = JSON.stringify({
          email: profile.email,
          firstName: "akshay",
          lastName: "test",
          password: "sneakerhead123",
        });

        var requestOptions = {
          method: "POST",
          headers: { Authorization: "Bearer " + accessToken },
          body: raw,
          redirect: "follow",
        };
        let newaccount = await fetch(
          "https://api.us-central1.gcp.commercetools.com/onlinestore-poc/customers",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            return JSON.parse(result);
          })
          .catch((error) => console.log("error", error));
      }
      return profile;
    },
    session: async ({ session, token }) => {
      //   console.log("session", session);
      if (session?.user) {
        session.user.id = token.email;
      }
      return session;
    },
    jwt: async ({ profile, token }) => {
      //   console.log("token", token, "user", profile);
      if (profile) {
        token.uid = profile.email;
      }
      return token;
    },
  },
  secret: "324234234234sdewdqwed13",
  session: {
    strategy: "jwt",
  },
});
