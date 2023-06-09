import '../style/index.css'
import Header from './../components/Header'
import Head from 'next/head'
import { StoreProvider } from './../utils/Store';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Footer from './../components/Footer';


 function MyApp({ Component, pageProps:  { session, ...pageProps } }) {

  return( 
  <>
  
  <SessionProvider session={session}>
  <StoreProvider>
  <Header/>
  <br/>
  <br/>
  <br/>
  <br/>

  {Component.auth ? (
          <Auth adminOnly={Component.auth.adminOnly}>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
        <br/>
        <br/>
        <br/>
    <Footer/>
    </StoreProvider>
    </SessionProvider>
  </>
  )


function Auth({ children,  adminOnly }) {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required');
    },
  });
  if (status === 'loading') {
    return <div className='container'>Loading...</div>;
  }
  if (adminOnly && !session.user.isAdmin) {
    router.push('/unauthorized?message=admin login required');
  }

  return children;
}

}
export default MyApp