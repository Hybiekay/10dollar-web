
import React from 'react';

const LandingPage = () => {
    return (
      <div>
        {/* WRAPPER */}
        {/* Preloader */}
        <div className="wrapper preloader" id="site-home">
          {/* NAVIGATION AND SLIDER HOLDER */}
          <section className="site-holder" role="banner">
            {/* HEADER */}
            <header className="site-header">
              {/* STICKY HEADER */}
              <div className="sticky-header" id="sticky-header">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-8 col-sm-3">
                      {/* LOGO */}
                      <div className="site-logo">
                        <a href="index.html">
                          <img src="images/logo.png" alt="Logo" />
                          <span>10dollar</span>
                        </a>
                      </div>
                      {/* END LOGO */}
                    </div>
                    <div className="col-xs-4 col-sm-9">
                      {/* NAVIGATION */}
                      <nav className="site-nav" id="site-nav" role="navigation">
                        {/* MOBILE VIEW BUTTON */}
                        <div className="nav-mobile">
                          <i className="fa fa-bars show" />
                          <i className="fa fa-close hide" />
                        </div>
                        {/* LINKS */}
                        <ul className="nav-off-canvas">
                          {/* ACTIVE ITEM */}
                          <li className="active"><a href="#site-home">Home</a></li>
                          <li><a href="#amazing-features">Features</a></li>
                          <li><a href="#site-quick-view">Screens</a></li>
                          <li><a href="#site-download">Download</a></li>
                          <li><a href="#site-team">Team</a></li>
                          <li><a href="#site-packages">Pricing</a></li>
                          <li><a href="#">Sub Menu <i className="fa fa-angle-down" /> </a>
                            {/* SUB MENU */}
                            <ul className="site-sub-menu">
                              <li><a href="#site-more-features">Some Seatures</a></li>
                              <li><a href="#amazing-features">About App</a></li>
                              <li><a href="#left-content-section">left Content</a></li>
                              <li><a href="#right-content-section">Right Content</a></li>
                              <li><a href="#how-it-works">How It Works</a></li>
                              <li><a href="#site-accordion">Accordian</a></li>
                              <li><a href="#site-testimonial">Testimonials</a></li>
                              <li><a href="#site-subscribe">Subscribe</a></li>
                            </ul>
                          </li>
                          <li><a href="#quick-support">Contact us</a></li>
                        </ul>
                      </nav>
                      {/* END NAVIGATION */}
                    </div>
                  </div>
                </div>
              </div>
              {/* START SLIDER */}
              <div id="header-slider" className="header-slider blue-purple-gredient">
                <ul className="seq-canvas">
                  {/* SLIDE 1 */}
                  <li className="step1 slides">
                    {/* MAIN IMAGE */}
                    <div className="bg-img" style={{backgroundImage: 'url(images/header-slide-1.png)'}} />
                    {/* Caption */}
                    <div className="slide-caption">
                      {/* H1 Heading */}
                      <h1>10dollar</h1>
                      {/* H2 Heading */}
                      <h2>Your Passport to the Future<br></br> of Entertainment and Empowerment</h2>
                      {/* Paragraph */}
                      <p>
                      Bringing Together Entertainment Enthusiasts and Rising Artists for an Unforgettable Experience"
                      <br></br> Join us in celebrating the boundless realm of creativity, where every vote <br></br>And interaction shapes the future of entertainment."
                      </p>
                      {/* Buttons */}
                      <a href="#" className="slide-button slide-button-active">Download</a>
                      {/* Button */}
                      <a href="#" className="slide-button">Learn more</a>
                    </div>
                  </li>
                  {/* SLIDE 2 */}
                  <li className="step2 slides">
                    {/* MAIN IMAGE */}
                    <div className="bg-img" style={{backgroundImage: 'url(images/header-slide-2.png)'}} />
                    {/* Caption */}
                    <div className="slide-caption">
                      {/* H1 Heading */}
                      <h1>10dollar</h1>
                      {/* H2 Heading */}
                      <h2>Empowering Artists and Fans:<br></br> Unleash Your Creativity with 10dollar</h2>
                      {/* Paragraph */}
                      <p>
                      Elevate your passion for entertainment with 10dollar,<br></br>
                      a groundbreaking platform designed for both emerging artists and devoted fans.<br></br>
                      Discover fresh talent, support your favorite performers, and engage in a dynamic <br></br>community that celebrates creativity like never before.<br></br>
                     
                      </p>
                      {/* Buttons */}
                      <a href="#" className="slide-button slide-button-active">Download </a>
                      {/* Button */}
                      <a href="#" className="slide-button">Learn more</a>
                    </div>
                  </li>
                  {/* SLIDE 3 */}
                  <li className="step3 slides">
                    {/* MAIN IMAGE */}
                    <div className="bg-img" style={{backgroundImage: 'url(images/header-slide-1.png)'}} />
                    {/* Caption */}
                    <div className="slide-caption">
                      {/* H1 Heading */}
                      <h1>10dollar</h1>
                      {/* H2 Heading */}
                      <h2>Where Creativity is Encouraged</h2>
                      {/* Paragraph */}
                      <p>
                      From thrilling live shows to interactive voting and generous rewards,<br></br>
                      10dollar is your gateway to a world of artistry, connection, and shared success.
                      </p>
                      {/* Buttons */}
                      <a href="#" className="slide-button slide-button-active">Download </a>
                      {/* Button */}
                      <a href="#" className="slide-button">Learn more</a>
                    </div>
                  </li>
                  {/* SLIDE 4 */}
                  <li className="step4 slides">
                    {/* MAIN IMAGE */}
                    <div className="bg-img" style={{backgroundImage: 'url(images/header-slide-2.png)'}} />
                    {/* Caption */}
                    <div className="slide-caption">
                      {/* H1 Heading */}
                      <h1>10dollar</h1>
                      {/* H2 Heading */}
                      <h2>Fostering Creativity, Fueling Dreams:<br></br> Where Artists and Fans Unite</h2>
                      {/* Paragraph */}
                      <p>
                      Immerse yourself in a world where artistic visions come to life.<br></br> 10dollar-App is the convergence of burgeoning talents and dedicated fans,<br></br> igniting a journey of shared dreams and vibrant connections.

                      </p>
                      {/* Buttons */}
                      <a href="#" className="slide-button slide-button-active">Download now</a>
                      {/* Button */}
                      <a href="#" className="slide-button">Learn more</a>
                    </div>
                  </li>
                </ul>
                {/* PAGINATION */}
                <ul className="seq-pagination">
                  <li>01</li>
                  <li>02</li>
                  <li>03</li>
                  <li>04</li>
                </ul>
                {/* NAVIGATION */}
                <button type="button" className="seq-next"><span className="icon-play" /></button>
                <button type="button" className="seq-prev"><span className="icon-play-flip" /></button>
              </div>
            </header>
            {/* END HEADER */}
          </section>
          {/* STORE ICONS */}
          <section className="site-store-icons" style={{display: 'none'}}>
            <div className="align-center">
              {/* BUTTON 1 */}
              <a href="#">
                {/* FIGURE */}
                <figure><i className="fa fa-mobile" /></figure>
                {/* h6 heading */}
                <h6>Available on the</h6>
                {/* h5 */}
                <h5>iOS App Store</h5>
              </a>
              {/* BUTTON 2 */}
              <a href="#">
                {/* FIGURE */}
                <figure><img src="images/store-google-icon.png" alt="store icon" /></figure>
                {/* h6 heading */}
                <h6>Available on the</h6>
                {/* h5 */}
                <h5>Google Store</h5>
              </a>
              {/* BUTTON 3 */}
              <a href="#">
                {/* FIGURE */}
                <figure><i className="fa fa-windows adjust" /></figure>
                {/* h6 heading */}
                <h6>Available on the</h6>
                {/* h5 */}
                <h5>Windows Store</h5>
              </a>
            </div>
          </section>
          {/* AMAZING FEATURES */}
          <section id="amazing-features" className="site-amazing-features section-white">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  {/* H1 HEADING */}
                  <h1>Amazing Features</h1>
                  <div className="row">
                    <div className="col-xs-12 col-sm-4">
                      {/* FEATURE 1 */}
                      <div className="features move wow fadeInDown" data-wow-duration="1s">
                        {/* ICON */}
                        <figure><span className> <img src="images/feature1.png" alt="feature1" /> </span></figure>
                        {/* H5 HEADING */}
                        <h5>Free Support</h5>
                        {/* PARAGRAPH */}
                        <p> Lorem Ipsum is simply dummy text the printing and typeseing industry Lorem Ipsum has been standard.</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                      {/* FEATURE 1 */}
                      <div className="features wow fadeInDown" data-wow-duration="2s">
                        {/* ICON */}
                        <figure><span className><img src="images/feature2.png" alt="feature2" /></span></figure>
                        {/* H5 HEADING */}
                        <h5>Quick Loading</h5>
                        {/* PARAGRAPH */}
                        <p>Lorem Ipsum is simply dummy text the printing and typeseing industry Lorem Ipsum has been standard.</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                      {/* FEATURE 1 */}
                      <div className="features move wow fadeInDown" data-wow-duration="3s">
                        {/* ICON */}
                        <figure><span className> <img src="images/feature3.png" alt="feature3" /></span></figure>
                        {/* H5 HEADING */}
                        <h5>Awesome Design</h5>
                        {/* PARAGRAPH */}
                        <p>Lorem Ipsum is simply dummy text the printing and typeseing industry Lorem Ipsum has been standard.</p>
                      </div>
                    </div>
                    <div className="col-xs-12">
                      {/* Mobile PICTURE */}
                      <figure className="device wow fadeInUp" data-wow-duration="3s">
                        <img src="images/features-mobile.png" alt="Device" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ABOUT APP */}
          <section id="about-10dollar" className="site-about-app left-heading section-grey">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6">
                  <div className="about-half-colom-section">
                    {/* H1 HEADING */}
                    <h1>About 10dollar</h1>
                    <div className="about-half-colom-section-content">
                      <p>
                      Welcome to 10dollar-App, the ultimate platform that redefines the way artists and fans interact, collaborate, and celebrate talent. 
                        <strong className="bold-color"> Amazing 10dollar app</strong> Our innovative ecosystem bridges the gap between emerging artists and their dedicated supporters, offering a dynamic space for discovery, empowerment, and shared success<br />
                        <br /> From interactive voting and staking to a vibrant community hub, <strong className="bold-color"> 10dollar-App </strong> transforms entertainment into an engaging and rewarding journey for all.
                      </p>
                      <section className="site-download-icons about-icon">
                        {/* BUTTON 1 */}
                        <a href="#" className="app-download-icons">
                          {/* FIGURE */}
                          <figure><i className="fa fa-mobile" /></figure>
                          {/* h6 heading */}
                          <h6>Available on the</h6>
                          {/* h5 */}
                          <h5>iOS App Store</h5>
                        </a>
                        {/* BUTTON 2 */}
                        <a href="#" className="app-download-icons">
                          {/* FIGURE */}
                          <figure><i className="fa fa-android" /></figure>
                          {/* h6 heading */}
                          <h6>Available on the</h6>
                          {/* h5 */}
                          <h5>Google Store</h5>
                        </a>
                      </section>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                  <div className="about-half-colom-section-image wow fadeInRight" data-wow-duration="2s">
                    <img src="images/about.png" alt="aboutimage" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* MORE FEATURES */}
          <div className="site-more-features section-blue blue-purple-gredient" id="site-more-features">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  {/* heading */}
                  <h1>More Features</h1>
                  <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 ">
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ">
                    <div className="heading-text">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting indus orem Ipsum has been the industry's standard dummy text ever since the when an own printer took a galley of type and scrambled it to make.
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 ">
                  </div>
                </div>
                {/* clearfix */}
                <div className="clearfix" />
                <div className="col-xs-12 col-sm-12 col-md-4 col-md-push-4">
                  {/* mobile image */}
                  <figure className="featured-img wow fadeInDown" data-wow-duration="2s">
                    <img src="images/feature-mobile.png" alt="Image" />
                  </figure>
                  {/* end */}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-md-pull-4">
                  {/* feature 1 */}
                  <div className="feature align-right">
                    <h5>Application records</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typeseing</p>
                    <figure>
                      <span className="icon-micro" />
                    </figure>
                  </div>
                  {/* feature 2 */}
                  <div className="feature align-right move">
                    <h5>Best for business</h5>
                    <p>Lorem Ipsum is simply dummyof the printing and typeseing</p>
                    <figure>
                      <span className="icon-portfolio" />
                    </figure>
                  </div>
                  {/* feature 3 */}
                  <div className="feature align-right">
                    <h5>Full free chat</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typeseing</p>
                    <figure>
                      <span className="icon-chat" />
                    </figure>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                  {/* feature 1 */}
                  <div className="feature align-left">
                    <h5>Retina ready</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typeseing</p>
                    <figure>
                      <span className="icon-albums" />
                    </figure>
                  </div>
                  {/* feature 2 */}
                  <div className="feature align-left move">
                    <h5>Secure extra</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and.</p>
                    <figure>
                      <span className="icon-lock" />
                    </figure>
                  </div>
                  {/* feature 3 */}
                  <div className="feature align-left">
                    <h5>Night vision</h5>
                    <p>Lorem Ipsum is simply dummy of the printing and industry.</p>
                    <figure>
                      <span className="icon-moon" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* LEFT CONTENT & RIGHT IMAGE */}
          <section id="left-content-section" className="site-amazing-features left-heading two-colom-section">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6">
                  <div className="half-colom-left-section">
                    {/* H1 HEADING */}
                    <div className="left-heading-icon wow fadeInLeft" data-wow-duration="2s"> <img src="images/design-icon.png" alt="design-icon" />
                    </div>
                    <h1>Beautiful, unique Vibrant &amp; Modern Design </h1>
                    <div className="two-colom-content">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typeseing indury Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply dummy text of the dummy text of the printing anprinting
                        <strong className="highlited-text">Amazing 10dollar app landing page</strong> Lorem Ipsum has been the industry's standard dummy text ever since the when.Lorem Ipsum is simply text of the y Lorem Ipsum has been the indushe
                        industry's stry's standard dummy text ever since the when an Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                  <div className="half-colom-right-section wow fadeInDown" data-wow-duration="2s">
                    <img src="images/right-image1.png" alt="rightimage" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* LEFT IMAGE & RIGHT  CONTENT */}
          <section id="right-content-section" className="site-amazing-features left-heading two-colom-section">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-md-push-6">
                  <div className="half-colom-left-section half-colom-padding">
                    {/* H1 HEADING */}
                    <div className="left-heading-icon wow fadeInRight" data-wow-duration="2s"> <img src="images/perfomance-icon.png" alt="perfomanceicon" />
                    </div>
                    <h1>Beautiful, unique Vibrant &amp; Modern Design </h1>
                    <div className="two-colom-content">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typeseing indury Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply dummy text of the dummy text of the printing anprinting
                        <strong className="highlited-text">Amazing 10dollar app landing page</strong> Lorem Ipsum has been the industry's standard dummy text ever since the when.Lorem Ipsum is simply text of the y Lorem Ipsum has been the indushe
                        industry's stry's standard dummy text ever since the when an Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-md-pull-6 ">
                  <div className="half-colom-right-section wow fadeInLeft" data-wow-duration="2s">
                    <img src="images/left-image1.png" alt="leftimage" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* HOW IT WORKS */}
          <section className="site-how-it-works section-grey" id="how-it-works">
            <div className="container-fluid wide">
              <div className="row">
                <div className="col-xs-12">
                  {/* H1 HEADING */}
                  <h1>How it Works?</h1>
                  {/* START SLIDER */}
                  {/* Slider main container */}
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12 col-sm-11 ">
                        <div className="swiper-container" id="how-it-works-slider">
                          {/* Additional required wrapper */}
                          <ul className="swiper-wrapper">
                            {/* Slides */}
                            {/* SLIDE 1 */}
                            <li className="swiper-slide">
                              <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                  {/* H5 HEADING */}
                                  <h3>First tab title - How to install ?</h3>
                                  {/* PARAGRAPH */}
                                  <p>Lorem Ipsum is simply dummy text of the printing and typese ing industry Lorem Ipsum has been the industry's standard dummy text Lorem is simply dummy </p>
                                  {/* BOX */}
                                  <div className="section first">
                                    {/* FIGURE */}
                                    <figure><span className="icon-config" /></figure>
                                    {/* H4 HEADING */}
                                    <h4>Confing your mobile</h4>
                                    {/* PARAGRAPH */}
                                    <p> Lorem Ipsum is simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus. </p>
                                  </div>
                                  {/* BOX */}
                                  <div className="section">
                                    {/* FIGURE */}
                                    <figure><span className="icon-refresh" /></figure>
                                    {/* H4 HEADING */}
                                    <h4>Refresh setup</h4>
                                    {/* PARAGRAPH */}
                                    <p>Simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus try's standard.</p>
                                  </div>
                                  {/* BOX */}
                                  <div className="section">
                                    {/* FIGURE */}
                                    <figure><span className="icon-comment" /></figure>
                                    {/* H4 HEADING */}
                                    <h4>Chat with your love</h4>
                                    {/* PARAGRAPH */}
                                    <p>Ipsum is simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus standard.</p>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                  {/* DEVICE */}
                                  <figure className="device">
                                    <img src="images/how-it-works-device.png" alt="Device" />
                                  </figure>
                                </div>
                              </div>
                            </li>
                            {/* SLIDE 2 */}
                            <li className="swiper-slide">
                              <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                  {/* H5 HEADING */}
                                  <h3>First tab title - How to install ?</h3>
                                  {/* PARAGRAPH */}
                                  <p>Lorem Ipsum is simply dummy text of the printing and typese ing industry Lorem Ipsum has been the industry's standard dummy text Lorem is simply dummy </p>
                                  {/* BOX */}
                                  <div className="section first">
                                    {/* FIGURE */}
                                    <figure><span className="icon-config" /></figure>
                                    {/* H4 HEADING */}
                                    <h4>Confing your mobile</h4>
                                    {/* PARAGRAPH */}
                                    <p> Lorem Ipsum is simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus. </p>
                                  </div>
                                  {/* BOX */}
                                  <div className="section">
                                    {/* FIGURE */}
                                    <figure><span className="icon-refresh" /></figure>
                                    {/* H4 HEADING */}
                                    <h4>Refresh setup</h4>
                                    {/* PARAGRAPH */}
                                    <p>Simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus try's standard.</p>
                                  </div>
                                  {/* BOX */}
                                  <div className="section">
                                    {/* FIGURE */}
                                    <figure><span className="icon-comment" /></figure>
                                    {/* H4 HEADING */}
                                    <h4>Chat with your love</h4>
                                    {/* PARAGRAPH */}
                                    <p>Ipsum is simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus standard.</p>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                  {/* DEVICE */}
                                  <figure className="device">
                                    <img src="images/how-it-works-screen2.png" alt="Device" />
                                  </figure>
                                </div>
                              </div>
                            </li>
                            {/* SLIDE 3 */}
                            <li className="swiper-slide">
                              <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                  {/* H5 HEADING */}
                                  <h3>First tab title - How to install ?</h3>
                                  {/* PARAGRAPH */}
                                  <p>Lorem Ipsum is simply dummy text of the printing and typese ing industry Lorem Ipsum has been the industry's standard dummy text Lorem is simply dummy </p>
                                  {/* BOX */}
                                  <div className="section first">
                                    {/* FIGURE */}
                                    <figure><span className="icon-config" /></figure>
                                    {/* H4 HEADING */}
                                    <h4>Confing your mobile</h4>
                                    {/* PARAGRAPH */}
                                    <p> Lorem Ipsum is simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus. </p>
                                  </div>
                                  {/* BOX */}
                                  <div className="section">
                                    {/* FIGURE */}
                                    <figure><span className="icon-refresh" /></figure>
                                    {/* H4 HEADING */}
                                    <h4>Refresh setup</h4>
                                    {/* PARAGRAPH */}
                                    <p>Simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus try's standard.</p>
                                  </div>
                                  {/* BOX */}
                                  <div className="section">
                                    {/* FIGURE */}
                                    <figure><span className="icon-comment" /></figure>
                                    {/* H4 HEADING */}
                                    <h4>Chat with your love</h4>
                                    {/* PARAGRAPH */}
                                    <p>Ipsum is simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus standard.</p>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                  {/* DEVICE */}
                                  <figure className="device">
                                    <img src="images/how-it-works-device.png" alt="Device" />
                                  </figure>
                                </div>
                              </div>
                            </li>
                            {/* SLIDE 4 */}
                            <li className="swiper-slide">
                              <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                  {/* H5 HEADING */}
                                  <h3>First tab title - How to install ?</h3>
                                  {/* PARAGRAPH */}
                                  <p>Lorem Ipsum is simply dummy text of the printing and typese ing industry Lorem Ipsum has been the industry's standard dummy text Lorem is simply dummy </p>
                                  {/* BOX */}
                                  <div className="section first">
                                    {/* FIGURE */}
                                    <figure><span className="icon-config" /></figure>
                                    {/* H4 HEADING */}
                                    <h4>Confing your mobile</h4>
                                    {/* PARAGRAPH */}
                                    <p> Lorem Ipsum is simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus. </p>
                                  </div>
                                  {/* BOX */}
                                  <div className="section">
                                    {/* FIGURE */}
                                    <figure><span className="icon-refresh" /></figure>
                                    {/* H4 HEADING */}
                                    <h4>Refresh setup</h4>
                                    {/* PARAGRAPH */}
                                    <p>Simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus try's standard.</p>
                                  </div>
                                  {/* BOX */}
                                  <div className="section">
                                    {/* FIGURE */}
                                    <figure><span className="icon-comment" /></figure>
                                    {/* H4 HEADING */}
                                    <h4>Chat with your love</h4>
                                    {/* PARAGRAPH */}
                                    <p>Ipsum is simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus standard.</p>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                  {/* DEVICE */}
                                  <figure className="device">
                                    <img src="images/how-it-works-screen2.png" alt="Device" />
                                  </figure>
                                </div>
                              </div>
                            </li>
                            {/* SLIDE 5 */}
                            <li className="swiper-slide">
                              <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                  {/* H5 HEADING */}
                                  <h3>First tab title - How to install ?</h3>
                                  {/* PARAGRAPH */}
                                  <p>Lorem Ipsum is simply dummy text of the printing and typese ing industry Lorem Ipsum has been the industry's standard dummy text Lorem is simply dummy </p>
                                  {/* BOX */}
                                  <div className="section first">
                                    {/* FIGURE */}
                                    <figure><span className="icon-config" /></figure>
                                    {/* H4 HEADING */}
                                    <h4>Confing your mobile</h4>
                                    {/* PARAGRAPH */}
                                    <p> Lorem Ipsum is simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus. </p>
                                  </div>
                                  {/* BOX */}
                                  <div className="section">
                                    {/* FIGURE */}
                                    <figure><span className="icon-refresh" /></figure>
                                    {/* H4 HEADING */}
                                    <h4>Refresh setup</h4>
                                    {/* PARAGRAPH */}
                                    <p>Simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus try's standard.</p>
                                  </div>
                                  {/* BOX */}
                                  <div className="section">
                                    {/* FIGURE */}
                                    <figure><span className="icon-comment" /></figure>
                                    {/* H4 HEADING */}
                                    <h4>Chat with your love</h4>
                                    {/* PARAGRAPH */}
                                    <p>Ipsum is simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus standard.</p>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                  {/* DEVICE */}
                                  <figure className="device">
                                    <img src="images/how-it-works-device.png" alt="Device" />
                                  </figure>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* If we need navigation buttons */}
                  <div id="how-it-works-prev" className="swiper-button-prev"><i className="fa fa-angle-up hidden-xs" /><span className="icon-play-flip visible-xs" /></div>
                  <div id="how-it-works-next" className="swiper-button-next"><i className="fa fa-angle-down hidden-xs" /><span className="icon-play visible-xs" /></div>
                  {/* If we need pagination */}
                  <div id="how-it-works-paging" className="swiper-pagination" data-icons="[
                         &quot;fa fa-mobile&quot;,
                         &quot;icon-config&quot;,
                         &quot;icon-help&quot;,
                         &quot;fa fa-shopping-basket&quot;,
                         &quot;icon-unlock&quot;,
                         &quot;icon-shopbag&quot;
                         ]" />
                </div>
              </div>
            </div>
          </section>
          {/* DOWNLOAD */}
          <section id="site-download" className="site-download section-blue">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  {/* H1 HEADING */}
                  <h1>10dollar Download</h1>
                  {/* DOWNLOAD ICONS */}
                  <section className="site-download-icons">
                    <div className="align-center">
                      {/* BUTTON 1 */}
                      <a href="#" className="app-download-icons wow fadeInLeft" data-wow-duration="1s">
                        {/* FIGURE */}
                        <figure><i className="fa fa-mobile" /></figure>
                        {/* h6 heading */}
                        <h6>Available on the</h6>
                        {/* h5 */}
                        <h5>iOS App Store</h5>
                      </a>
                      {/* BUTTON 2 */}
                      <a href="#" className="app-download-icons wow fadeInDown" data-wow-duration="2s">
                        {/* FIGURE */}
                        <figure><i className="fa fa-android" /></figure>
                        {/* h6 heading */}
                        <h6>Available on the</h6>
                        {/* h5 */}
                        <h5>Google Store</h5>
                      </a>
                      {/* BUTTON 3 */}
                      <a href="#" className="app-download-icons wow fadeInRight" data-wow-duration="3s">
                        {/* FIGURE */}
                        <figure><i className="fa fa-windows adjust" /></figure>
                        {/* h6 heading */}
                        <h6>Available on the</h6>
                        {/* h5 */}
                        <h5>Windows Store</h5>
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
          {/* QUICK VIEW */}
          <section className="site-quick-view section-white" id="site-quick-view">
            <div className="container-fluid wide">
              <div className="row">
                <div className="col-sm-12">
                  {/* heading */}
                  <h1>Quick View</h1>
                  {/* Slider main container */}
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="swiper-container" id="quick-view-slider">
                          {/* Additional required wrapper */}
                          <ul className="swiper-wrapper">
                            {/* slide 1 */}
                            <li className="swiper-slide">
                              {/* box URL */}
                              <a href="#" className="box">
                                {/* image */}
                                <figure>
                                  <img src="images/quick-view-1.png" alt="Image" />
                                </figure>
                              </a>
                            </li>
                            {/* slide 2 */}
                            <li className="swiper-slide">
                              {/* box URL */}
                              <a href="#" className="box">
                                {/* image */}
                                <figure>
                                  <img src="images/quick-view-2.png" alt="Image" />
                                </figure>
                              </a>
                            </li>
                            {/* slide 3 */}
                            <li className="swiper-slide">
                              {/* box URL */}
                              <a href="#" className="box">
                                {/* image */}
                                <figure>
                                  <img src="images/quick-view-3.png" alt="Image" />
                                </figure>
                              </a>
                            </li>
                            {/* slide 4 */}
                            <li className="swiper-slide">
                              {/* box URL */}
                              <a href="#" className="box">
                                {/* image */}
                                <figure>
                                  <img src="images/quick-view-4.png" alt="Image" />
                                </figure>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* If we need navigation buttons */}
                  <div id="quick-view-prev" className="swiper-button-prev"><span className="icon-play-flip" /></div>
                  <div id="quick-view-next" className="swiper-button-next"><span className="icon-play" /></div>
                  {/* If we need pagination */}
                  <div id="quick-view-paging" className="swiper-pagination visible-xs" />
                </div>
              </div>
            </div>
          </section>
          {/* ACCORDION */}
          <section id="site-accordion" className="site-accordion section-grey left-heading ">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <div className="accordian-main">
                    <h1> FAQs</h1>
                    {/* accordion */}
                    <div className="panel-group" id="accordion">
                      {/* section 1 */}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" className="collapsed">
                              What is the Start App ?
                              <span>icon</span>
                            </a>
                          </h4>
                        </div>
                        <div id="collapse1" className="panel-collapse collapse">
                          <div className="panel-body-container">
                            <div className="panel-body">
                              Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* section 2 */}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title active">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                              Where can i download this app ?
                              <span>icon</span>
                            </a>
                          </h4>
                        </div>
                        <div id="collapse2" className="panel-collapse collapse in">
                          <div className="panel-body-container">
                            <div className="panel-body">
                              Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply. Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem
                              Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply. Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem Ipsum has been the industry's
                              standard dummy text ever since the when an Lorem Ipsum is simply.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* section 3 */}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" className="collapsed">
                              How to install this app ?
                              <span>icon</span>
                            </a>
                          </h4>
                        </div>
                        <div id="collapse3" className="panel-collapse collapse">
                          <div className="panel-body-container">
                            <div className="panel-body">
                              Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* section 4 */}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse4" className="collapsed">
                              Is this app useful for business purpose ?
                              <span>icon</span>
                            </a>
                          </h4>
                        </div>
                        <div id="collapse4" className="panel-collapse collapse">
                          <div className="panel-body-container">
                            <div className="panel-body">
                              Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* section 5 */}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse5" className="collapsed">
                              Is this app useful for business purpose ?
                              <span>icon</span>
                            </a>
                          </h4>
                        </div>
                        <div id="collapse5" className="panel-collapse collapse">
                          <div className="panel-body-container">
                            <div className="panel-body">
                              Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end */}
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  {/* mobile image */}
                  <figure className="accordion-img wow fadeIn" data-wow-duration="3s">
                    <img src="images/accordion-image.png" alt="Image" />
                  </figure>
                  {/* end */}
                </div>
              </div>
            </div>
          </section>
          {/* TEAM */}
          <section className="site-team section-white" id="site-team">
            <div className="container-fluid wide">
              <div className="row">
                <div className="col-sm-12">
                  {/* heading */}
                  <h1>Innovative Team</h1>
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="main-heading-text">
                      <p>Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem Ipsum has been the industry's standard dummy text Lorem is simply dummy text of the printing and
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  </div>
                  {/* Slider main container */}
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="swiper-container" id="team-slider">
                          {/* Additional required wrapper */}
                          <ul className="swiper-wrapper">
                            {/* slide 1 */}
                            <li className="swiper-slide">
                              {/* box */}
                              <div className="site-box">
                                {/* image */}
                                <figure>
                                  <img src="images/team-1.png" alt="User" />
                                </figure>
                                {/* heading */}
                                <h5>Jhon Due Stive</h5>
                                {/* description */}
                                <h6>Founder &amp; CEO</h6>
                                {/* paragraph */}
                                <p>Lorem Ipsum is simply dummy text of the printing and typeseing in dustry Lorem Ipsum</p>
                                {/* social icons */}
                                <div className="site-social-icons">
                                  <a href="#"><i className="fa fa-facebook" /></a>
                                  <a href="#"><i className="fa fa-twitter" /></a>
                                  <a href="#"><i className="fa fa-google-plus" /></a>
                                </div>
                              </div>
                            </li>
                            {/* slide 2 */}
                            <li className="swiper-slide">
                              {/* box */}
                              <div className="site-box">
                                {/* image */}
                                <figure>
                                  <img src="images/team-2.png" alt="User" />
                                </figure>
                                {/* heading */}
                                <h5>Mark Denial</h5>
                                {/* description */}
                                <h6>Chief Developer</h6>
                                {/* paragraph */}
                                <p>Lorem Ipsum is simply dummy text of the printing and typeseing in dustry Lorem Ipsum</p>
                                {/* social icons */}
                                <div className="site-social-icons">
                                  <a href="#"><i className="fa fa-facebook" /></a>
                                  <a href="#"><i className="fa fa-twitter" /></a>
                                  <a href="#"><i className="fa fa-google-plus" /></a>
                                </div>
                              </div>
                            </li>
                            {/* slide 3 */}
                            <li className="swiper-slide">
                              {/* box */}
                              <div className="site-box">
                                {/* image */}
                                <figure>
                                  <img src="images/team-3.png" alt="User" />
                                </figure>
                                {/* heading */}
                                <h5>Worner Smith</h5>
                                {/* description */}
                                <h6>UI Designer</h6>
                                {/* paragraph */}
                                <p>Lorem Ipsum is simply dummy text of the printing and typeseing in dustry Lorem Ipsum</p>
                                {/* social icons */}
                                <div className="site-social-icons">
                                  <a href="#"><i className="fa fa-facebook" /></a>
                                  <a href="#"><i className="fa fa-twitter" /></a>
                                  <a href="#"><i className="fa fa-google-plus" /></a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* If we need navigation buttons */}
                  <div id="team-prev" className="swiper-button-prev hidden-lg"><span className="icon-play-flip" /></div>
                  <div id="team-next" className="swiper-button-next hidden-lg"><span className="icon-play" /></div>
                  {/* If we need pagination */}
                  <div id="team-paging" className="swiper-pagination visible-xs" />
                </div>
              </div>
            </div>
          </section>
          {/* STATISTIC */}
          <section className="site-statistic section-white" id="site-statistic">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-5 col-sm-offset-1 col-md-3 col-md-offset-0">
                  {/* number */}
                  <div className="site-number">
                    {/* icon */}
                    <div className="stat-icon"> <img src="images/cloud.png" alt="cloud" /></div>
                    {/* h5 heading */}
                    <h5 className="counter-count">200 <span>K</span></h5>
                    {/* paragraph */}
                    <p>App Download</p>
                  </div>
                  {/* end */}
                </div>
                <div className="col-xs-12 col-sm-5 col-sm-offset-1 col-md-3 col-md-offset-0">
                  {/* number */}
                  <div className="site-number">
                    {/* icon */}
                    <div className="stat-icon"> <img src="images/thumbsup.png" alt="thumbsup" /></div>
                    {/* h5 heading */}
                    <h5 className="counter-count">50 <span>K</span></h5>
                    {/* paragraph */}
                    <p>Free Download</p>
                  </div>
                  {/* end */}
                </div>
                <div className="col-xs-12 col-sm-5 col-sm-offset-1 col-md-3 col-md-offset-0">
                  {/* number */}
                  <div className="site-number">
                    {/* icon */}
                    <div className="stat-icon"> <img src="images/users.png" alt="users" /></div>
                    {/* h5 heading */}
                    <h5 className="counter-count">95 <span>%</span></h5>
                    {/* paragraph */}
                    <p>Return Customers</p>
                  </div>
                  {/* end */}
                </div>
                <div className="col-xs-12 col-sm-5 col-sm-offset-1 col-md-3 col-md-offset-0">
                  {/* number */}
                  <div className="site-number">
                    {/* icon */}
                    <div className="stat-icon"> <img src="images/star.png" alt="star" /></div>
                    {/* h5 heading */}
                    <h5 className="counter-count">10 <span>+</span></h5>
                    {/* paragraph */}
                    <p>Best Awards</p>
                  </div>
                  {/* end */}
                </div>
              </div>
            </div>
          </section>
          {/* TESTIMONIAL */}
          <section className="site-testimonial section-grey" id="site-testimonial">
            <div className="container-fluid wide">
              <div className="row">
                <div className="col-sm-12">
                  {/* H1 HEADING */}
                  <h1>Trusted by 1000+ clients</h1>
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="main-heading-text">
                      <p>Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem Ipsum has been the industry's standard dummy text Lorem is simply dummy text of the printing and
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  </div>
                  <div className="clearfix"> </div>
                  {/* Slider main container */}
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <div className="swiper-container" id="testimonial-slider">
                          {/* Additional required wrapper */}
                          <ul className="swiper-wrapper">
                            {/* slide 1 */}
                            <li className="swiper-slide">
                              <div className="swiper-slide-box">
                                {/* image */}
                                <figure>
                                  <img src="images/testimonial-user.png" alt="User" />
                                </figure>
                                {/* user name */}
                                <h5>Mr. Jhon Due</h5>
                                <span className="testimonial-degignation">Founder at 10dollar Technologies</span>
                                {/* paragraph */}
                                <p>
                                  Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem Ipsum has been the industry standard dummy text Lorem is simply.
                                </p>
                              </div>
                              <div className="swiper-slide-back-box">
                              </div>
                            </li>
                            {/* slide 2 */}
                            <li className="swiper-slide">
                              <div className="swiper-slide-box">
                                {/* image */}
                                <figure>
                                  <img src="images/testimonial-user2.png" alt="User" />
                                </figure>
                                {/* user name */}
                                <h5>Devil Shohe</h5>
                                <span className="testimonial-degignation">Founder at 10dollar Technologies</span>
                                {/* paragraph */}
                                <p>
                                  Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem Ipsum has been the industry standard dummy text Lorem is simply.
                                </p>
                              </div>
                              <div className="swiper-slide-back-box">
                              </div>
                            </li>
                            {/* slide 3 */}
                            <li className="swiper-slide">
                              <div className="swiper-slide-box">
                                {/* image */}
                                <figure>
                                  <img src="images/testimonial-user.png" alt="User" />
                                </figure>
                                {/* user name */}
                                <h5>Devil Shohe</h5>
                                <span className="testimonial-degignation">Founder at 10dollar Technologies</span>
                                {/* paragraph */}
                                <p>
                                  Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem Ipsum has been the industry standard dummy text Lorem is simply.
                                </p>
                              </div>
                              <div className="swiper-slide-back-box">
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                      </div>
                    </div>
                  </div>
                  {/* If we need navigation buttons */}
                  <div id="testimonial-prev" className="swiper-button-prev hidden-lg"><span className="icon-play-flip" /></div>
                  <div id="testimonial-next" className="swiper-button-next hidden-lg"><span className="icon-play" /></div>
                  {/* If we need pagination */}
                  <div id="testimonial-paging" className="swiper-pagination" />
                </div>
              </div>
            </div>
          </section>
          {/* LATEST BLOG */}
          <section className="latest-blog section-grey" id="latest-blog">
            <div className="container-fluid wide">
              <div className="row">
                <div className="col-xs-12">
                  {/* H1 HEADING */}
                  <h1>Latest Blog Post</h1>
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="main-heading-text">
                      <p>Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem Ipsum has been the industry's standard dummy text Lorem is simply dummy text of the printing and
                      </p>
                    </div>
                  </div>
                  {/*- blog post 1 */}
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="blog-post-box">
                      {/*- image */}
                      <figure> <img src="images/blog-images/blog-post1.jpg" alt="blogimg" /></figure>
                      <div className="blog-post-content">
                        {/*- admin details */}
                        <ul>
                          <li> By Admin &nbsp; &nbsp;|</li>
                          <li> (20) Comments </li>
                        </ul>
                        {/*- title */}
                        <a href="#">
                          <h4>A process behind app </h4>
                        </a>
                        {/*- date */}
                        <span> May 24, 2017</span>
                        {/*- paragraph */}
                        <p>Lorem Ipsum is simply dummy text of the printing and typeseg indury Lorem Ipsum e printing and has been the industry's standard dummy text ever since the. </p>
                      </div>
                    </div>
                    <a className="blog-more-button" href="#">read more </a>
                  </div>
                  {/*- blog post 2 */}
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="blog-post-box">
                      {/*- image */}
                      <figure> <img src="images/blog-images/blog-post2.jpg" alt="blogimg" /></figure>
                      <div className="blog-post-content">
                        {/*- admin details */}
                        <ul>
                          <li> By Admin &nbsp; &nbsp;|</li>
                          <li> (20) Comments </li>
                        </ul>
                        {/*- title */}
                        <a href="#">
                          <h4>Blog title goes here </h4>
                        </a>
                        {/*- date */}
                        <span> May 24, 2017</span>
                        {/*- paragraph */}
                        <p>Lorem Ipsum is simply dummy text of the printing and typeseg indury Lorem Ipsum e printing and has been the industry's standard dummy text ever since the. </p>
                      </div>
                    </div>
                    <a className="blog-more-button" href="#">read more </a>
                  </div>
                  {/*- blog post 3 */}
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="blog-post-box">
                      {/*- image */}
                      <figure> <img src="images/blog-images/blog-post3.jpg" alt="blogimg" /></figure>
                      <div className="blog-post-content">
                        {/*- admin details */}
                        <ul>
                          <li> By Admin &nbsp; &nbsp;|</li>
                          <li> (20) Comments </li>
                        </ul>
                        {/*- title */}
                        <a href="#">
                          <h4>A process behind app </h4>
                        </a>
                        {/*- date */}
                        <span> May 24, 2017</span>
                        {/*- paragraph */}
                        <p>Lorem Ipsum is simply dummy text of the printing and typeseg indury Lorem Ipsum e printing and has been the industry's standard dummy text ever since the. </p>
                      </div>
                    </div>
                    <a className="blog-more-button" href="#">read more </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SUBSCRIBE */}
          <section id="site-subscribe" className="site-subscribe section-white">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 wow flipInX" data-wow-duration="2s">
                  {/* H1 HEADING */}
                  <h1>Sunscribe us</h1>
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="main-heading-text">
                      <p>Subscribe to our Newsletter to get daily updates by us!! Lorem Ipsum is simply dummy text of the printing and typeseing
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  </div>
                  {/* BOX */}
                  <div className="site-box">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                        {/* FORM */}
                        <form action="#" method="post" className="site-form">
                          <label>
                            <input type="email" placeholder="enter your email id here" required="required" />
                          </label>
                          <input type="submit" defaultValue="SUBMIT" />
                        </form>
                        {/* END FORM */}
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* TWITTER */}
          <section className="site-twitter section-blue" id="site-twitter" style={{display: 'none'}}>
            <div className="container-fluid wide">
              <div className="row">
                <div className="col-xs-12">
                  {/*  H1 HEADING*/}
                  <h1 className="heading-inverse">Tweet @ <strong>Start</strong></h1>
                  {/* Slider main container */}
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                        <div className="swiper-container" id="tweet-slider">
                          {/* Tweets */}
                          <ul className="swiper-wrapper tweet" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* If we need navigation buttons */}
                  <div id="tweet-prev" className="swiper-button-prev hidden-lg"><span className="icon-play-flip" /></div>
                  <div id="tweet-next" className="swiper-button-next hidden-lg"><span className="icon-play" /></div>
                  {/* If we need pagination */}
                  <div id="tweet-paging" className="swiper-pagination" />
                </div>
              </div>
            </div>
          </section>
          {/* QUICK SUPPORT */}
          <section id="quick-support" className="site-quick-support section-white">
            <div className="container">
              <div className="contact-box blue-purple-gredient">
                <div className="col-xs-12">
                  <div className="box">
                    {/* INFO */}
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                      <div className="site-info">
                        <h5> Contact Info</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting indus orem Ipsum has been the industrys.
                        </p>
                        {/* BOX */}
                        <a href="tel:+911234567890" className="site-box-row">
                          {/* ICON */}
                          <h6><i className="fa fa-phone" /> Call us </h6>
                          {/* PARAGRAPH */}
                          <p>+91 123 456 7890</p>
                        </a>
                        {/* BOX */}
                        <a href="mailto:support@gmail.com" className="site-box-row last">
                          {/* ICON */}
                          <h6><i className="fa fa-envelope" /> Email us</h6>
                          {/* Mail */}
                          <p>support@gmail.com</p>
                        </a>
                        {/* BOX */}
                        <a target="_blank" href="../../../../../../external.html?link=http://maps.google.com/?q=Location,125BusinessEvenue,Huston,USA" className="site-box-row">
                          {/* ICON */}
                          <h6><i className="fa fa-map-marker" /> Location</h6>
                          {/* ADDRESS */}
                          <address>Location, 125 Business Evenue, Huston, USA</address>
                        </a>
                      </div>
                    </div>
                    {/* CONTACT FORM */}
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                      <div className="site-info form">
                        <h5> Send us message! </h5>
                        <form action="../../../../../../external.html?link=http://kalanidhithemes.com/live-preview/landing-page/10dollar-app-landing-page/all-demo/default-version-purple-blue-gredient/php/form.php" method="post" className="site-contact-form" id="myForm">
                          <label>
                            <input className="app-btn value-clear" type="text" name="app_name" placeholder="Name" required="required" />
                          </label>
                          <label>
                            <input className="app-btn value-clear" type="email" name="app_email" placeholder="Email" required="required" />
                          </label>
                          <label>
                            <input className="app-btn value-clear" type="tel" name="app_phone" placeholder="Phone" required="required" />
                          </label>
                          <label>
                            <input className="app-btn value-clear" type="url" name="app_website" placeholder="Website" />
                          </label>
                          <label className="last">
                            <textarea className="app-btn value-clear" name="app_message" placeholder="Message" required defaultValue={""} />
                          </label>
                          <label className="move">
                            <button id="form-submit-btn" className="app-btn" type="submit">Submit <i className="fa fa-spin fa-spinner" /></button>
                          </label>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SUBSCRIBE */}
          <section className="site-subscribe" style={{display: 'none'}}>
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  {/* BOX */}
                  <div className="site-box">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 no-space">
                        {/* PARAGRAPH */}
                        <p>Subscribe to our Newsletter to get first Gift voucher by Start</p>
                        {/* END PARAGRAPH */}
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 no-space">
                        {/* FORM */}
                        <form action="#" method="post" className="site-form">
                          <label>
                            <input type="email" placeholder required="required" />
                          </label>
                          <input type="submit" defaultValue="SUBMIT" />
                        </form>
                        {/* END FORM */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* FOOTER */}
          <footer className="site-footer section-blue">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1> Download 10dollar Now</h1>
                  {/* DOWNLOAD ICONS */}
                  <section className="site-download-icons">
                    <div className="align-center">
                      {/* BUTTON 1 */}
                      <a href="#" className="app-download-icons wow fadeInDown" data-wow-duration="1s">
                        {/* FIGURE */}
                        <figure><i className="fa fa-mobile" /></figure>
                        {/* h6 heading */}
                        <h6>Available on the</h6>
                        {/* h5 */}
                        <h5>iOS App Store</h5>
                      </a>
                      {/* BUTTON 2 */}
                      <a href="#" className="app-download-icons wow fadeInDown" data-wow-duration="2s">
                        {/* FIGURE */}
                        <figure><i className="fa fa-android" /></figure>
                        {/* h6 heading */}
                        <h6>Available on the</h6>
                        {/* h5 */}
                        <h5>Google Store</h5>
                      </a>
                      {/* BUTTON 3 */}
                      <a href="#" className="app-download-icons wow fadeInDown" data-wow-duration="3s">
                        {/* FIGURE */}
                        <figure><i className="fa fa-windows adjust" /></figure>
                        {/* h6 heading */}
                        <h6>Available on the</h6>
                        {/* h5 */}
                        <h5>Windows Store</h5>
                      </a>
                    </div>
                  </section>
                  {/* END LOGO */}
                  {/* SOCIAL ICONS */}
                  <div className="site-social-icons">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-google-plus" /></a>
                    <a href="#"><i className="fa fa-pinterest" /></a>
                    <a href="#"><i className="fa fa-youtube" /></a>
                  </div>
                  {/* END SOCIAL ICONS */}
                  {/* COPYRIGHT */}
                  <div className="site-copyright">
                    <p>© Copyright 2016 Start. Designed by <a href="../../../../../../external.html?link=https://graphicriver.net/user/kalanidhithemes" target="_blank">Kalanidhi Themes</a></p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* END WRAPPER */}
        {/*------------------------------------------------------------------------ SCRIPTS */}
        {/* JQuery */}
        {/* Preloader */}
        {/* Carousel slider */}
        {/* Custom scroll bar */}
        {/* Modernizr */}
        {/* Header Slider */}
        {/* Header Slider */}
        {/* Header Slider */}
        {/* Twitter Feed */}
        {/* Counter */}
        {/* Bootstrap */}
        {/* Sticky Header */}
        {/* scroll top */}
        {/* Template Changeable Plugin Options */}
        {/*Wow animation js */}
        {/* Mirrored from kalanidhithemes.com/live-preview/landing-page/10dollar-app-landing-page/all-demo/default-version-purple-blue-gredient/index.html by HTTrack Website Copier/3.x [XR&CO'2017], Thu, 24 Aug 2023 16:28:30 GMT */}
      </div>
    );
  }
export default LandingPage;