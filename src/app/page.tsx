import Image from 'next/image';
import Head from 'next/head';
import wigglywormlogo from './assets/wigglywormAI.png';
import wormlogo from './assets/worm.png';
import { Tokenomics, JoinTelegram, BigTitle, Footer } from './components';

export const metadata = {
  title: "$WGLY | Wiggly Worm",
  description: "$WGLY | Wiggly Worm | Solana MEME Coin",
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="./assets/wigglywormAI.png" />
      </Head>
      <header>
        <div className='header-container'>
          <Image
            src={wormlogo}
            alt="wiggly worm logo"
            width={130}
            height={50}
            className='wiggly-logo logo'
          />
          {/* <h1 className='logo'>Wiggly Worm</h1> */}
          <JoinTelegram />
        </div>
      </header>
      <main className=''>
        <div className='grid grid-cols-2 margins'>
          <div className="left-container">
            <BigTitle fontSize="12rem">$WGLY</BigTitle>
            <BigTitle fontSize="7rem">WIGGLY WORM</BigTitle>
            <h1 style={{
              paddingTop: 30,
              fontSize: 60,
              color: 'black',
            }}>
              The latest sensation in the world of meme coins on the SOLANA blockchain
            </h1>
          </div>
          <div className="wigglywormlogo">
            <Image
              src={wigglywormlogo}
              alt="wiggly worm logo"
              width={800}
              height={800}
              priority
            />
          </div>
        </div>
        <Tokenomics />
      </main>
      <footer >
        <div>
          <Footer />
        </div>
      </footer>
    </div>
  );
}
