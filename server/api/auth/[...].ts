import type { Session } from 'next-auth'
import { NuxtAuthHandler } from '#auth'

interface BlaguesAPIUser {
  id: string;
  username: string;
  avatar: string;
}
interface BlaguesAPIUserExtended extends BlaguesAPIUser {
  token: string;
  token_key: string;
}

declare module 'next-auth' {
  interface User extends BlaguesAPIUser {}
  interface Session {
    user: BlaguesAPIUser,
    token: string;
    token_key: string;
  }
}

export default NuxtAuthHandler({
  // secret needed to run nuxt-auth in production mode (used to encrypt data)
  secret: process.env.NUXT_SECRET,
  providers: [
    {
      id: 'discord',
      name: 'discord',
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      client: {
        token_endpoint_auth_method: 'client_secret_post'
      },
      type: 'oauth',
      authorization: {
        url: 'https://discord.com/api/oauth2/authorize',
        params: {
          scope: 'identify email',
          prompt: 'none'
        }
      },
      token: `${process.env.API_URL}/api/auth/token`,
      userinfo: `${process.env.API_URL}/api/auth/user`,
      profile (profile) {
        // Workaround because non reformated data is not allowed :c
        return profile
      }
    }
  ],
  callbacks: {
    // Workaround because extra data is forbidden :c
    jwt: ({ token, user }) => {
      return user ? { ...token, ...user } : token
    },
    session: ({ session, token: data }: { session: Session, token: unknown }) => {
      const { token, token_key: tokenKey, ...rest } = data as BlaguesAPIUserExtended
      session.user = rest
      session.token = token
      session.token_key = tokenKey
      return session
    }
  }
})
