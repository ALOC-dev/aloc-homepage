import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // 깃허브 로그인 성공 시 추가 처리 로직
      if (account?.provider === 'github') {
        return true;
      }
      return false;
    },
    async redirect({ url, baseUrl }) {
      // 로그인 후 리다이렉트 처리
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, token }) {
      // 세션에 추가 정보 포함
      if (token) {
        session.user.id = token.sub!;
        session.user.image = token.picture;
      }
      return session;
    },
    async jwt({ token, user, account, profile }) {
      // JWT 토큰에 추가 정보 포함
      if (account) {
        token.accessToken = account.access_token;
      }
      if (profile) {
        token.picture = profile.avatar_url;
      }
      return token;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
  },
};
