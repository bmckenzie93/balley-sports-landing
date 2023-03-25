import Head from 'next/head'
import Image from 'next/image'
import ballyIcon from '../../public/bs-icon_400x2000.jpg'
import noBreak from '../../public/bs-no-break.jpg'
// import video from '../../public/fpo-video.mp4'


export default function Home() {
  const handleClick = () => {
    console.count('click')
  }
  return (
        <>
      <Head>
        <title>Balley Sports | TV Screen Saver</title>
        <meta name="description" content="Inflatable Bally Sports TV Screen Saver with air from your lungs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='container'>
        <Image src={ ballyIcon } className="logo" />
        <h1>tv screen saver</h1>
      </header>

      <main>
        <section className="hero">
          <div className="container--lg">
          <video autoplay controls loop src={'/fpo-video.mp4'} className='hero-image' /> 
            <div className="hero-content">
              <h2>
                say goodbye to
                  <br /> 
                shattered tv screens due 
                  <br /> 
                to playoff hockey rage!
              </h2>
              <div className="hero-copy">
                <p>Simply inflate you Balley Sports TV         Screen Saver with air from your lungs, snugly slide your remote inside, and watch the anger bounce fight off your screen!</p>
                <Image src={ noBreak } />
              </div>
            </div>
          </div>
        </section>

        <section className="video container">
          <div className="video-container">
            <video src="#">Youtube bideo will go here</video>
          </div>
          <p>sold out! so sorry!</p>
        </section>

        <section className="cta container">
          <p>to make it up to you, here's a super secret deal on bally sports+!</p>
          <form action="">
            <span>7-day free trial</span>
            <p>subscrive to bally sports+ for just <s>$19.99</s> $14.99/month and start streaming today!</p>
            <div className="input-group">
              <input type="text" name='zip_code' id='zipCode'/>
              <input type="button" value="see packages" onClick={handleClick} />
            </div>
            <span>view team packages available in your area</span>
          </form>
        </section>
      </main>

      <footer className='container'>
        <a href="#">boring legal copy</a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore, blanditiis et nobis cumque animi impedit repellendus dicta fugit cum debitis, ipsum quia culpa rem sit amet veritatis quibusdam dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur quos quis cupiditate doloribus est, molestiae odit modi consequatur libero. Voluptatum fugiat, dolorum nam consequatur cumque nobis harum pariatur nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod illo id enim sed ratione quibusdam quos? Omnis impedit commodi alias nam! Aliquid ipsum ducimus recusandae magni mollitia ratione rem?</p>
      </footer>    
    </>
  )
}
