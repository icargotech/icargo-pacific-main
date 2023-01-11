<template>
  <!-- Sub-header Section-->
  <div class="sub-header bg-primary navbar-expand-sm">
    <div class="container-fluid">
      <div class="menu-item p-2 d-flex flex-row bd-highlight">
        <div class="bd-highlight ps-3">
          <a
            style="font-size: 12px"
            class="menu-icon text-white text-decoration-none me-2"
            href="#"
            ><i class="fa-solid fa-phone fa-fw me-1"></i>0917-692-4203 |</a
          >
        </div>
        <div class="bd-highlight me-3">
          <a
            style="font-size: 12px"
            class="menu-icon text-white text-decoration-none me-2"
            href="#"
            ><i class="fa-sharp fa-solid fa-envelope me-1"></i>
            info@icargo@gmail.com</a
          >
        </div>
        <div class="bd-highlight ms-auto">
          <a style="font-size: 12px" class="menu-icon me-1 text-white" href="#"
            ><i class="fa-brands fa-facebook-f me-2"></i
          ></a>
          <a style="font-size: 12px" class="menu-icon me-1 text-white" href="#"
            ><i class="fa-brands fa-twitter me-2"></i
          ></a>
          <a style="font-size: 12px" class="menu-icon m-1 text-white" href="#"
            ><i class="fa-brands fa-linkedin me-2"></i
          ></a>
          <a style="font-size: 12px" class="menu-icon m-1 text-white" href="#"
            ><i class="fa-brands fa-telegram me-2"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
  <!-- Sub-header Section-->

  <!---Main Navbar-->
  <nav
    class="bottomnav navbar navbar-expand-lg navbar-primary sticky-top bg-light shadow"
  >
    <div class="container">
      <div class="logo text-primary fw-bold fs-5">
        <img
          src="../assets/img/icargologo.png"
          width="70"
          height="70"
          class="me-2"
        />iCargo
        <span class="text-warning"> Pacific </span>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#partner">Partnership</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#track">Track</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#instant">Instant Quote</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <button
            class="btn btn-warning text-white btn-sm shadow me-4"
            type="submit"
            @click.prevent="book"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  </nav>
  <!---Main Navbar-->

  <!---Home Page-->
  <section class="homepage" id="home">
    <div class="container-fluid py-5">
      <div class="lc-block" style="padding: 3rem">
        <div class="lc-block">
          <div editable="rich">
            <h2 class="fw-bolder display-3 text-warning">
              WE MOVE IT DIFFERENTLY.
            </h2>
          </div>
        </div>
        <div class="lc-block col-md-8">
          <div editable="rich">
            <p class="lead fw-bold text-white">
              The leading software technology integration platform for logistics
              and supply chain management solution.
            </p>
          </div>
        </div>
        <div class="lc-block">
          <button
            class="btn btn-warning text-white btn-md shadow me-4 fw-bold"
            type="submit"
            @click.prevent="book"
          >
            Book Now
          </button>
        </div>

        <!-- Company-->
        <div class="py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"
                  ><img
                    class="img-fluid img-brand d-block mx-auto"
                    width="80"
                    height="80"
                    src="../assets/img/lbc.png"
                    alt="..."
                    aria-label=""
                /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"
                  ><img
                    class="img-fluid img-brand d-block mx-auto"
                    width="150"
                    height="150"
                    src="../assets/img/sanmig.png"
                    alt="..."
                    aria-label=""
                /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"
                  ><img
                    class="img-fluid img-brand d-block mx-auto"
                    width="100"
                    height="100"
                    src="../assets/img/fedex.png"
                    alt="..."
                    aria-label=""
                /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"
                  ><img
                    class="img-fluid img-brand d-block mx-auto"
                    width="150"
                    height="150"
                    src="../assets/img/cebu.png"
                    alt="..."
                    aria-label=""
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section class="Servicespage" id="services">
    <div class="container py-5 mb-4 min-vh-100">
      <div class="row d-flex justify-content-center">
        <div class="col-md-15">
          <div class="lc-block">
            <h6 editable="inline" class="fw-bold text-primary text-center">
              <b>Our Solution for you business growth</b>
            </h6>
            <p editable="inline" class="fw-bold text-center">
              Thousand of merchants, millions of cargo deliveries.
            </p>
          </div>
          <!-- /lc-block -->

          <!---Carousel item-->
          <div id="carousels" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <!---Active -->
              <div class="carousel-item active">
                <!----Cards-->
                <div class="container d-flex align-items-center">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="lc-block">
                        <div class="card shadow-lg p-3 bg-white text-dark">
                          <img
                            class="card-img-top"
                            src="../assets/img/QR.png"
                          />
                          <div class="card-body text-center">
                            <h3
                              class="card-title mb-2"
                              editable="inline"
                              style="font-size: 15px"
                            >
                              QR Tracking and Monitoring
                            </h3>
                            <h4
                              class="card-subtitle"
                              editable="inline"
                              style="font-size: 10px"
                            >
                              The system will implement QR codes as the main
                              selling feature, allowing iCargo partners and
                              partner’s customers to easily make new shipments
                              and track their packages via smartphone in
                              real-time
                            </h4>
                          </div>
                        </div>
                      </div>
                      <!-- /lc-block -->
                    </div>
                    <!-- /col -->
                    <div class="col-md-4">
                      <div class="lc-block">
                        <div class="card shadow-lg p-3 bg-white text-dark">
                          <img
                            class="card-img-top"
                            src="../assets/img/waybill.png"
                          />
                          <div class="card-body text-center">
                            <h3
                              class="card-title mb-2"
                              editable="inline"
                              style="font-size: 15px"
                            >
                              Printing of Waybill
                            </h3>
                            <h4
                              class="card-subtitle"
                              editable="inline"
                              style="font-size: 10px"
                            >
                              The system will generate a shipment tracking
                              number, which the customer can use to track their
                              package. This number is also printed on the
                              shipping label, so when a customer requests a
                              pickup package, the courier can scan it to update
                              the shipment status.
                            </h4>
                          </div>
                        </div>
                      </div>
                      <!-- /lc-block -->
                    </div>
                    <!-- /col -->
                    <div class="col-md-4">
                      <div class="lc-block">
                        <div class="card shadow-lg p-3 bg-white text-dark">
                          <img
                            class="card-img-top"
                            src="../assets/img/price-quotation.png"
                          />
                          <div class="card-body text-center">
                            <h3
                              class="card-title mb-2"
                              editable="inline"
                              style="font-size: 15px"
                            >
                              Card title
                            </h3>
                            <h4
                              class="card-subtitle"
                              editable="inline"
                              style="font-size: 10px"
                            >
                              The system provides a quotation that gives a
                              customer an idea of the possible total price
                              depending on the sender and recipient location
                              provided.
                            </h4>
                          </div>
                        </div>
                      </div>
                      <!-- /lc-block -->
                    </div>
                    <!-- /col -->
                  </div>
                </div>
              </div>

              <!-- Left and right controls -->
              <a
                class="carousel-control-prev"
                href="#carousels"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a
                class="carousel-control-next"
                href="#carousels"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!----Partnership-->
  <section class="partnership" id="partner" style="background-color: #2a3990">
    <div class="container text-center py-4 py-md-6">
      <div
        class="lc-block card border-0 text-center rounded p-4 p-lg-6"
        style="background-color: #2a3990"
      >
        <div class="row card-body mb-3 mb-lg-4">
          <div class="col-xl-11 col-xxl-9 mx-auto">
            <div class="lc-block mb-4">
              <div editable="rich">
                <p class="text-white">PARTNERSHIP</p>
              </div>
            </div>
            <div class="lc-block">
              <div editable="rich">
                <h3 class="text-white fw-bold display-6">
                  Become Our Partner Today
                </h3>
                <p class="text-white">
                  The satisfaction and trust of your customers with easy-to-use
                  yet powerful logistics from iCargo Pacific.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="lc-block">
          <a class="btn" role="button">
            <router-link
              to="/signup"
              class="btn btn-light btn-sm fw-bold rounded-pill px-3"
              >Sign Up Now</router-link
            ></a
          >
        </div>
      </div>
    </div>
  </section>

  <!-- track-->
  <section class="page-section vh-100 py-5" id="track">
    <div class="container text-center py-4" style="background-color: #fff">
      <div class="card border-0 text-center p-4 p-lg-6">
        <div class="row card-body text-center mb-3 mb-lg-4">
          <h3 class="track-subheading text-uppercase fw-bold text-primary fs-6">
            Track your Parcel
          </h3>
          <h2 class="track-heading fw-bold fs-5">
            Check your parcel's delivery details and status.
          </h2>
        </div>
        <label class="form-label fw-light">Enter Tracking Number</label>
        <input
          type="text"
          class="form-control bg-light shadow rounded-pill"
          style="width: 20rem"
        />

        <div
          class="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <button
                type="button"
                class="btn-close text-center me-3 mx-auto"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <h3
                class="track-subheading text-uppercase fw-bold text-center py-1"
              >
                Track your Parcel
              </h3>

              <div class="card-body p-5">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex flex-column">
                    <span class="lead fw-normal">Driver's Name</span>
                    <span class="text-muted small text-justify"
                      >Delivery Partner: AIGood Logistics</span
                    >
                  </div>
                  <div>
                    <span class="text-muted small text-justify"
                      >Tracking Number:
                    </span>
                    <span class="text-muted small">xxx123-456-789</span>
                  </div>
                </div>
                <hr class="my-4" />

                <div
                  class="d-flex flex-row justify-content-between align-items-center align-content-center"
                >
                  <span class="dot"></span>
                  <hr class="flex-fill track-line" />
                  <span
                    class="d-flex justify-content-center align-items-center big-dot dot"
                  >
                    <i class="fa fa-check text-white"></i
                  ></span>
                </div>

                <div
                  class="d-flex flex-row justify-content-between align-items-center"
                >
                  <div class="d-flex flex-column align-items-start">
                    <span>Arrived at Siquijor sorting center</span>
                    <span class="text-muted small text-justify"
                      >Your package has arrived at the sorting center and is
                      being prepared for shipment</span
                    >
                  </div>
                  <div class="d-flex flex-column align-items-end">
                    <span>Package shipped out</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="btn btn-primary"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
        >Track</a
      >
    </div>
  </section>

  <!-- SubFooter-->
  <footer class="subfooter py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 text-lg-start text-warning fw-bold">
          Contact Us <br />
          <div class="copyright text-white fw-bold mt-3">
            <span class="fas fa-map-marker-alt"></span> 1616 Celadon Park,
            Manila, Philippines
          </div>
          <div class="copyright text-white fw-bold">
            <span class="fas fa-phone"></span> (+63)912-345-6789
          </div>
          <div class="copyright text-white fw-bold">
            <span class="fas fa-envelope"></span> info@icargo.ph
          </div>
        </div>

        <div class="col-lg-4 text-lg-center text-warning fw-bold">
          Learn More <br />
          <div class="copyright text-white fw-bold mt-3">
            <span class="fas fa-caret-right"> </span>Home
          </div>
          <div class="copyright text-white fw-bold">
            <span class="fas fa-caret-right"> </span>About Us
          </div>
          <div class="copyright text-white fw-bold">
            <span class="fas fa-caret-right"> </span>Services
          </div>
          <div class="copyright text-white fw-bold">
            <span class="fas fa-caret-right"> </span>Contact Us
          </div>
        </div>
        <!--<div class="col-lg-4 my-3 my-lg-0">
                         <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                         <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                         <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                     </div>-->
        <div class="col-lg-4 text-lg-end text-warning fw-bold">
          Subscribe to our Newsletter <br />
          <div class="text-decoration-none me-3 text-white">
            Let's GO beyond logistics, make the world go round and revolutionize
            boundaries.
          </div>
          <br />
          <!-- The form -->
          <div class="input-group">
            <input
              type="text"
              class="form-control form-control-md"
              placeholder="Email"
            />
            <button class="btn btn-primary btn-md fw-bold">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Footer-->
  <footer class="footer py-3" style="border-top: 1px solid #eee">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 text-lg-start text-warning fw-bold">
          &copy; iCargo Pacific.
          <span class="copyright text-white">All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html::-webkit-scroller {
  width: 1rem;
}

html::-webkit-scroller-track {
  background-color: var(--color-white);
}

html::-webkit-scroller-thumb {
  background-color: var(--color-primary);
}

section {
  padding: 5rem 10%;
}
@keyframes fadeIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
}

nav .navbar-nav .nav-item .nav-link {
  padding: 10px 25px;
  text-align: center;
}

.nav-item .nav-link:hover {
  color: blue;
  background: rgb(0, 212, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 212, 255, 0.2665441176470589) 100%,
    rgba(9, 83, 121, 1) 100%
  );
  border-radius: 25px;
}

.homepage {
  background-image: url('../assets/img/header-bg.png');
  background-size: cover;
}

section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 70px;
}

/* track */
/*--TRACK PAGE--*/

section#track {
  background-image: url('../assets/img/bg.png');
  background-size: cover;
}

.track-line {
  height: 2px !important;
  background-color: #488978;
  opacity: 1;
}

.dot {
  height: 10px;
  width: 10px;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 0px;
  background-color: #488978;
  border-radius: 50%;
  display: inline-block;
}

.big-dot {
  height: 25px;
  width: 25px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  background-color: #488978;
  border-radius: 50%;
  display: inline-block;
}

.big-dot i {
  font-size: 12px;
}

.card-stepper {
  z-index: 0;
}

footer {
  background-color: #35013f;
}
</style>
