import Head from 'next/head'
import Image from 'next/image'
import ballyIcon from '../../public/bs-icon_400x2000.jpg'
import tvLogo from '../../public/tv-logo.png'
import bsLogo from '../../public/bs-logo.png'
import bsPlusLogo from '../../public/bs-plus-logo.png'
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
          <a href="https://ballysports.app.link/e/screensaver" target='_blank' className="btn">sign up</a>          
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
                  <span className="spacer"> </span><br /> 
                shattered tv screens due
                <span className="spacer"> </span><br />  
                to playoff hockey rage!
              </h2>
              <div className="hero-copy">
                <p>
                Simply inflate your Bally Sports TV Screen Saver with 
                <span className="spacer"> </span><br></br> air from your lungs, snugly slide your remote inside,
                <span className="spacer"> </span><br></br>and watch the anger bounce right off your screen!
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
          <p>
          YOU MIGHT CRACK UNDER THE PRESSURE,<br></br> BUT AT LEAST YOUR SCREEN WON’T.
          </p>
        </section>

        <section className="roadblock">
          <div className="container">
            <p>
              <span>bad news:</span>
              <br /> OUR Cautious LAWYERS ARE TOO 
              <br /> Cautious TO LET US GIVE THESE AWAY! 
              <br /> BOOOOOOOOOOOO!
            </p>
          </div>
        </section>

        <section className="cta container">
          <p>
            <span>good news:</span>
            <br /> you can start watching the NHL playoffs
            <br /> with a free week of bally sports+!
          </p>

          <div className='cta-box'>
            <Image src={ bsPlusLogo } className="logo" alt='Bally Sports + Logo' />
            <span>7-day free trial</span>
            <p>
              Subscribe to Bally Sports+ and 
              <br></br>start streaming today!
            </p>
              <a href="https://ballysports.app.link/e/screensaver" target="_blank" rel="noopener noreferrer">see packages</a>
            <span>view team packages available in your area</span>
          </div>
        </section>

        <section className="video-bar"></section>
      </main>

      <footer id='boringLegalCopy'>
        <div className="container">
          <a href="#boringLegalCopy">boring legal copy</a>
          <p>
            BALLY SPORTS DOES NOT ENDORSE THROWING YOUR REMOTE AT YOUR TV, AND IS NOT RESPONSIBLE FOR ANY SCREENS BROKEN WHILE USING THIS PRODUCT. ALTHOUGH IT BEARS A STRIKING RESEMBLANCE TO A POOL ARM
            <br />FLOATY THING, THE BALLY SPORTS TV SCREEN SAVER IS DEFINITELY NOT ONE, AND IS THEREFORE NOT APPROVED FOR AQUATIC USE.
            <br /> 
            <br />*Free trial for new subscribers only. You acknowledge you are purchasing a subscription for our regional package. This package only includes access to live games in which the above-identified
            <br />teams compete. Not all of those teams’ games may be available. Access to games outside of your Home Territory also may be limited.
            <br />
            <br />Access to content is not guaranteed and varies by location at time of access. Access to certain content is based on Home Territory and our ability to access your location information. Regional restrictions and blackouts apply. Please refer to the Bally Sports+ Subscriber Agreement for details.
            <br />
            <br />&copy; 2023 Diamond Sports, LLC. All Rights Reserved.
          </p>
        </div>
      </footer>    
    </>
  )
}
