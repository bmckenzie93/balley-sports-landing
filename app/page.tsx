import styles from './page.module.css'


export default function Home() {
  return (
    <>
      <header className='container'>
        <span>bally sports</span>
        <h1>tv screen saver</h1>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-image">video of remote inflating</div>
            <div className="hero-content">
              <h2>say goodbye to shattered tv screens due to playoff hockey rage!</h2>
              <div className="hero-copy">
                <p>Simply inflate you Balley Sports TB Screen Saver with air from your lungs, snugly slide your remote inside, and watch the anger bounce fight off your screen!</p>
                <img src="#" alt="broken tv icon" />
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
              <input type="button" value="see packages" />
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
