import React from 'react'

export default function Home() {
  return (
    <>
      <div >
        <h1 style={{ textAlign: 'center', marginTop: '100px', fontSize: '70px' }}>Welcome to TuneBlend</h1>
        <p style={{ textAlign: 'center', marginTop: '20px', fontWeight: '9rem', fontSize: '20px' }}>Create stunning videos with your favorite tracks effortlessly.</p>
      </div>
      <section>
        <div style={{ backgroundColor: '#A2A2A1FF' }}>
          <h2 style={{ textAlign: 'center', marginTop: '100px', fontSize: '40px', padding: '20px' }}>How to use TuneBlend</h2>
          <div className="container my-5 ">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card text-center" style={{ borderRadius: '20px', backgroundColor: '#F1F4FFFF' }}>
                  <i className="bi bi-upload" style={{ fontSize: '3rem', marginTop: '20px' }}></i>
                  <div className="card-body">
                    <p className="card-text">Choose the videos and photos you would like to merge. Several files can be chosen simultaneously or they can be added one by one after the first file is uploaded.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card text-center" style={{ borderRadius: '20px', backgroundColor: '#F1F4FFFF' }}>
                  <i className="bi bi-union" style={{ fontSize: '3rem', marginTop: '20px' }}></i>
                  <div className="card-body">
                    <p className="card-text">Rearrange them using drag-and-drop until they're the desired order. Then add audio or select your favorite track from your Spotify playlist by logging into your Spotify account, and click the "Download" button.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card text-center" style={{ borderRadius: '20px', backgroundColor: '#F1F4FFFF' }}>
                  <i className="bi bi-download" style={{ fontSize: '3rem', marginTop: '20px' }}></i>
                  <div className="card-body">
                    <p className="card-text">Once your files have been merged, watch the preview. If you want to change something, click on "Edit", otherwise click on the "Download" button to save the video.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div style={{ padding: '200px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: '1', paddingRight: '20px', }}>
            <h2 style={{ fontSize: '40px', fontWeight: '9rem', }}>TuneBlend provides you some cool features</h2>
          </div>
          <div style={{ flex: '1', paddingLeft: '20px' }}>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="/panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <strong>Easy to Use</strong>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                  <div className="accordion-body" style={{ backgroundColor: '#A2A2A1FF' }}>
                    Our intuitive interface allows you to merge videos and music in just a few clicks.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="/panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    <strong>High Quality</strong>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                  <div className="accordion-body" style={{ backgroundColor: '#A2A2A1FF' }}>
                    Produce high-quality videos with seamless audio integration.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="/panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    <strong>Fast Processing</strong>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                  <div className="accordion-body" style={{ backgroundColor: '#A2A2A1FF' }}>
                    Get your videos ready in no time with our fast processing technology.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="footer" className="gradient-background py-5" style={{backgroundColor: '#A2A2A1FF'}}>
        <div className="container">
          <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 mt-5 border-top">
            <div className="col mb-3">
              <h5>TuneBlend</h5>
              <p className="text-muted">© 2024 TuneBlend</p>
            </div>

            <div className="col mb-3">
              <h5>Features</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Easy to Use</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">High Quality</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Fast Processing</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Integration</a></li>
              </ul>
            </div>

            <div className="col mb-3">
              <h5>Quick Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="/features" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="/pricing" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="/faqs" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col mb-3">
              <h5>Follow Us</h5>
              <ul className="nav">
                <li className="nav-item mb-2"><a href="/facebook" className="nav-link p-0 text-muted mx-2"><i className="bi bi-facebook"></i> Facebook</a></li>
                <li className="nav-item mb-2"><a href="/twitter" className="nav-link p-0 text-muted mx-2"><i className="bi bi-twitter"></i> Twitter</a></li>
                <li className="nav-item mb-2"><a href="/instagram" className="nav-link p-0 text-muted mx-2"><i className="bi bi-instagram"></i> Instagram</a></li>
                <li className="nav-item mb-2"><a href="/linkedin" className="nav-link p-0 text-muted mx-2"><i className="bi bi-linkedin"></i> LinkedIn</a></li>
              </ul>
            </div>
          </footer>
        </div>
      </section>

    </>
  )
}
