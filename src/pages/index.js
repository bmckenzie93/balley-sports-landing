import Head from 'next/head'
import Image from 'next/image'
import ballyIcon from '../../public/bs-icon_400x2000.jpg'
import tvLogo from '../../public/tv-logo.png'
import bsLogo from '../../public/bs-logo.png'
import bsRemote from '../../public/bs-remote.png'


export default function Home() {
  return (
        <>
      <Head>
        <title>Balley Sports | TV Screen Saver</title>
        <meta name="description" content="Inflatable Bally Sports TV Screen Saver with air from your lungs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <nav>
        <div className="container--lg">
          <Image src={ bsLogo } className="logo" alt='Bally Sports Logo' /> 
          <a href="https://www.ballysports.com/packages/" target='_blank' className="btn">sign up</a>          
        </div>
      </nav>

      <header className='container'>
        <Image src={ bsLogo } className="logo" alt='Bally Sports Logo' />
        <h1>tv screen saver</h1>
      </header>

      <main>
        <section className="hero">
          <div className="container--lg">
          <Image className ="hero-image" src={bsRemote} alt="Remote with red pool arm inflatable around it." />
            <div className="hero-content">
              <h2>
                say goodbye to
                  <br /> 
                shattered tv screens due 
                  <br /> 
                to playoff hockey rage!
              </h2>
              <div className="hero-copy">
                <p>
                Simply inflate your Bally Sports TV Screen Saver with <br></br> air from your lungs, snugly slide your remote inside,<br></br>and watch the anger bounce right off your screen!
                </p>
                <Image src={ tvLogo } alt='No broken TV icon' />
              </div>
            </div>
          </div>
        </section>

        <section className="video container">
          <div className="video-container">
              <iframe src="https://www.youtube.com/embed/0QCx5pvlUIc" 
                title="FPO Video Player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
              </iframe>
          </div>
          <p>sold out! so sorry!</p>
        </section>

        <section className="cta container">
          <h2>to make it up to you, here's a super secret deal on bally sports+!</h2>
          <div className='cta-box'>
            <span>7-day free trial</span>
            <p>subscribe to bally sports+ <br />for just <s>$19.99</s> $14.99/month and <br></br> start streaming today!</p>
              <a href="#" target="_blank" rel="noopener noreferrer">see packages</a>
            <span>view team packages available in your area</span>
          </div>
        </section>
      </main>

      <footer className='container'>
        <a href="#">boring legal copy</a>
        <p>
          bally sports does not endorse throwing your remote at your tv, and is not responsible for any screens 
          <br />
          broken while using this product. although it bears a striking resemblance to a pool arm floaty thing,
          <br />
          the bally sports tv screen saver is definitely not one, and is therefore not approved for aquatic use. 
          <br />
          &copy; 2023 bally sports. all rights reserved
        </p>
      </footer>    
    </>
  )
}
