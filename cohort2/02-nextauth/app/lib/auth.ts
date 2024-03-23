import CredentialsProvider from 'next-auth/providers/credentials';
export const NEXT_AUTH = {
    providers: [
      CredentialsProvider({
        name: "Email",
        credentials: {
          username: { label: "email", type: "text", placeholder: "Email" },
          password: {
            label: "password",
            type: "password",
            placeholder: "Password",
          }
        },
        async authorize(credentials: any) {
          return {
           const username = credentials.username;
           const password = credentials.password;
  
      
  
          };
        },
      }),
  
    ],
    secret: process.env.SECRET,
    callbacks: {
      jwt: ({token, user}) => {
        console.log("jwt callback", token, user);
        token.userId = 'asads'
  
        return token;
      },
      session: ({session, token}) => {
        console.log("session callback", session, token);
        if(session && session.user){
  
          session.user.id = token.userId;
        }
        return session;
      }
  
    }
  }
  