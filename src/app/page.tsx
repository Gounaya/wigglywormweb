
import Image from 'next/image';
import Tokenomics from './components/Tokenomics/Tokenomics';
import JoinTelegram from './components/JoinTelegram/JoinTelegram';
import wigglywormlogo from './assets/wigglywormAI.png';
import BigTitle from './components/BigTitle/BigTitle';
import Linker from './components/Linker/Linker';

export default function Home() {
  return (
    <div>
      <header>
        <div className='header-container'>
          <h1 className='logo'>Wiggly Worm</h1>
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
          <div className="">
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
          <Linker />
        </div>
      </footer>
    </div>
  );
}
