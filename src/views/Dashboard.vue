<template>
  <!--Main Navigation-->
  <header>
    <!-- Sidebar -->
    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-5">
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i class="fas fa-tachometer-alt fa-fw me-3 text-primary py-4"></i>
            <span class="fs-5">Dashboard</span>
          </a>

          <!--- ORDERS --->
          <div class="list-group-item list-group-item-action">
            <a
              class="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample1"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              <div class="sb-nav-link-icon">
                <i class="fa-solid fa-boxes-stacked fa-2xl py-3"></i>
              </div>
              <div class="sb-nav-link-icon">
                <span class="h5" style="padding-right: 57%">Orders</span
                ><i class="fas fa-angle-down"></i>
              </div>
            </a>
            <div
              class="collapse"
              id="multiCollapseExample1"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
              style="padding-left: 10%"
            >
              <nav class="sb-sidenav-menu-nested nav">
                <router-link
                  class="nav-link text-black"
                  aria-current="page"
                  to="/Accepted-order"
                  >Accepted Order</router-link
                >
                <router-link
                  class="nav-link text-black"
                  aria-current="page"
                  to="/Track-order"
                  >Track Order</router-link
                >
                <router-link
                  class="nav-link text-black"
                  aria-current="page"
                  to="/Track-order"
                  >Transaction History</router-link
                >
              </nav>
            </div>
          </div>

          <!--- SHIPMENTS --->
          <div class="list-group-item list-group-item-action">
            <a
              class="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample2"
              aria-expanded="false"
              aria-controls="multiCollapseExample2"
            >
              <div class="sb-nav-link-icon">
                <i class="fa-solid fa-truck-moving fa-2xl py-3"></i>
              </div>
              <div class="sb-nav-link-icon">
                <span class="h5" style="padding-right: 37%">Shipments</span
                ><i class="fas fa-angle-down"></i>
              </div>
            </a>
            <div
              class="collapse"
              id="multiCollapseExample2"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
              style="padding-left: 10%"
            >
              <nav class="sb-sidenav-menu-nested nav">
                <router-link
                  class="nav-link text-black"
                  aria-current="page"
                  to="/Transit-shipment"
                  >In-transit</router-link
                >
                <router-link
                  class="nav-link text-black"
                  aria-current="page"
                  to="/Pending-shipment"
                  >Pending</router-link
                >
                <router-link
                  class="nav-link text-black"
                  aria-current="page"
                  to="/Delivered-shipment"
                  >Delivered</router-link
                >
                <router-link
                  class="nav-link text-black"
                  aria-current="page"
                  to="/Cancelled-shipment"
                  >Cancelled</router-link
                >
              </nav>
            </div>
          </div>

          <!---fleet-->
          <div class="list-group-item list-group-item-action">
            <a
              class="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample3"
              aria-expanded="false"
              aria-controls="multiCollapseExample3"
            >
              <div class="sb-nav-link-icon">
                <i class="fa-solid fa-boxes-stacked fa-2xl py-3"></i>
              </div>
              <div class="sb-nav-link-icon">
                <span class="h5" style="padding-right: 18%"
                  >Fleet Managements</span
                ><i class="fas fa-angle-down"></i>
              </div>
            </a>
            <div
              class="collapse"
              id="multiCollapseExample3"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
              style="padding-left: 10%"
            >
              <nav class="sb-sidenav-menu-nested nav">
                <router-link
                  class="nav-link text-black"
                  aria-current="page"
                  to="/Accepted-order"
                  >Accepted Order</router-link
                >
                <router-link
                  class="nav-link text-black"
                  aria-current="page"
                  to="/Track-order"
                  >Track Order</router-link
                >
                <router-link
                  class="nav-link text-black"
                  aria-current="page"
                  to="/Track-order"
                  >Transaction History</router-link
                >
              </nav>
            </div>
          </div>

          <!---billing and charges-->
          <div class="list-group-item list-group-item-action">
            <a
              class="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample4"
              aria-expanded="false"
              aria-controls="multiCollapseExample4"
            >
              <div class="sb-nav-link-icon">
                <i class="fa-solid fa-file-invoice fa-2xl py-3"></i>
              </div>
              <div class="sb-nav-link-icon">
                <span class="h5" style="padding-right: 50%"
                  >Billing and Charges</span
                ><i class="fas fa-angle-down"></i>
              </div>
            </a>
            <div
              class="collapse"
              id="multiCollapseExample4"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
              style="padding-left: 10%"
            >
              <nav class="sb-sidenav-menu-nested nav">
                <router-link
                  class="nav-link text-black"
                  aria-current="page"
                  to="/Accepted-order"
                  >Accepted Order</router-link
                >
                <router-link
                  class="nav-link text-black"
                  aria-current="page"
                  to="/Track-order"
                  >Track Order</router-link
                >
                <router-link
                  class="nav-link text-black"
                  aria-current="page"
                  to="/Track-order"
                  >Transaction History</router-link
                >
              </nav>
            </div>
          </div>

          <!---profile-->
          <div class="list-group-item list-group-item-action">
            <a
              class="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample5"
              aria-expanded="false"
              aria-controls="multiCollapseExample5"
            >
              <div class="sb-nav-link-icon">
                <i class="fa-solid fa-user fa-2xl py-3"></i>
              </div>
              <div class="sb-nav-link-icon">
                <span class="h5" style="padding-right: 57%">Profile</span
                ><i class="fas fa-angle-down"></i>
              </div>
            </a>
            <div
              class="collapse"
              id="multiCollapseExample5"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
              style="padding-left: 10%"
            >
              <nav class="sb-sidenav-menu-nested nav">
                <router-link
                  class="nav-link text-black"
                  aria-current="page"
                  to="/Accepted-order"
                  >Accepted Order</router-link
                >
                <router-link
                  class="nav-link text-black"
                  aria-current="page"
                  to="/Track-order"
                  >Track Order</router-link
                >
                <router-link
                  class="nav-link text-black"
                  aria-current="page"
                  to="/Track-order"
                  >Transaction History</router-link
                >
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Sidebar -->

    <!-- Navbar -->
    <nav
      id="main-navbar"
      class="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top"
    >
      <!-- Container wrapper -->
      <div class="container">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Brand -->
        <div class="logo">
          <img src="../assets/img/icargologo.png" width="70" height="70" /><span
            class="text-primary fw-bold p-1 fs-4"
            >iCargo</span
          >
          <span class="text-warning fw-bold fs-4"> Pacific </span>
        </div>

        <!-- Right links -->
        <div class="navbar-nav ms-auto d-flex flex-row">
          <button
            type="button"
            class="btn btn-warning btn-sm m-4 text-white shadow"
          >
            <router-link
              class="route text-decoration-none text-light fw-bold p-2"
              to="/"
              >Help</router-link
            >
          </button>
        </div>
        <div class="d-flex align-items-center">
          <font-awesome-icon icon="fa-user" />
          <i class="fas fa-user-circle fs-3 text-primary"></i>
          <span class="p-3"> Hi, user.</span>
        </div>
        <!-- logout button (testing) -->
        <button @click="handleSignOut" v-if="isLoggedIn">Logout</button>
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </header>
  <!--Main Navigation-->

  <!--Main layout-->
  <main style="margin-top: 58px">
    <div class="container pt-4"></div>
  </main>

  <!--Main layout-->
  <main class="mt-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h3>Dashboard</h3>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <!-- <div class="row"> -->
          <!--============== ORDERS OVERVIEW ==============-->
          <div class="col">
            <div class="card h-20">
              <div class="card-header">
                <span class="me-2"><i class="bi bi-bar-chart-fill"></i></span>
                Orders Overview
              </div>

              <div class="card-body">
                <div class="btn-group dropend">
                  <button
                    type="button"
                    class="btn btn-white border dropdown-toggle p-4 justify-content-center me-4"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <p class="fs-4 fw-bold">21</p>
                    <span class="fs-6">Accepted Orders</span>
                  </button>
                  <ul class="dropdown-menu">
                    <!---dropdown menu links-->
                  </ul>
                </div>

                <div class="btn-group dropend">
                  <button
                    type="button"
                    class="btn btn-white border dropdown-toggle p-4 justify-content-center me-4"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <p class="fs-4 fw-bold">14</p>
                    <span class="fs-6">Available Orders to accept</span>
                  </button>
                  <ul class="dropdown-menu">
                    <!---dropdown menu links-->
                  </ul>
                </div>

                <canvas class="chart" width="60" height="60"></canvas>
              </div>
            </div>
          </div>
          <!-- </div> -->
          <br />

          <!--============== FLEET OVERVIEW ==============-->
          <div class="row">
            <div class="col">
              <div class="card h-80">
                <div class="card-header">
                  <span class="me-2"><i class="bi bi-bar-chart-fill"></i></span>
                  Fleet Overview
                </div>

                <div class="card-body" style="height: 20%">
                  <div class="btn-group dropend">
                    <button
                      type="button"
                      class="btn btn-white border dropdown-toggle p-4 justify-content-center me-4"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <p class="fs-4 fw-bold">5</p>
                      <span class="fs-6">Drivers</span>
                    </button>
                    <ul class="dropdown-menu">
                      <!---dropdown menu links-->
                    </ul>
                  </div>

                  <div class="btn-group dropend">
                    <button
                      type="button"
                      class="btn btn-white border dropdown-toggle p-4 justify-content-center me-4"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <p class="fs-4 fw-bold">6</p>
                      <span class="fs-6">Vehicles</span>
                    </button>
                    <ul class="dropdown-menu">
                      <!---dropdown menu links-->
                    </ul>
                  </div>

                  <div class="btn-group dropend">
                    <button
                      type="button"
                      class="btn btn-white border dropdown-toggle p-4 justify-content-center me-4"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <p class="fs-4 fw-bold">11</p>
                      <span class="fs-6">hsdjsdgsf</span>
                    </button>
                    <ul class="dropdown-menu">
                      <!---dropdown menu links-->
                    </ul>
                  </div>

                  <canvas class="chart" width="70" height="70"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <!--============== SHIPMENT OVERVIEW ==============-->
          <div class="col">
            <div class="card h-100">
              <div class="card-header">
                <span class="me-2"><i class="bi bi-bar-chart-fill"></i></span>
                Shipment Overview
              </div>

              <div class="card-body">
                <!-- <div class="col"> -->
                <div class="btn-group dropend">
                  <button
                    type="button"
                    class="btn btn-white border dropdown-toggle p-4 justify-content-center me-4"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <p class="fs-4 fw-bold">4</p>
                    <span class="fs-6">hjsjdsjd</span>
                  </button>
                  <ul class="dropdown-menu">
                    <!---dropdown menu links-->
                  </ul>
                </div>

                <div class="btn-group dropend">
                  <button
                    type="button"
                    class="btn btn-white border dropdown-toggle p-4 justify-content-center me-4"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <p class="fs-4 fw-bold">12</p>
                    <span class="fs-6">Delivered</span>
                  </button>
                  <ul class="dropdown-menu">
                    <!---dropdown menu links-->
                  </ul>
                </div>

                <div class="btn-group dropend">
                  <button
                    type="button"
                    class="btn btn-white border dropdown-toggle p-4 justify-content-center me-4"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <p class="fs-4 fw-bold">7</p>
                    <span class="fs-6">Pending</span>
                  </button>
                  <ul class="dropdown-menu">
                    <!---dropdown menu links-->
                  </ul>
                </div>

                <div class="btn-group dropend">
                  <button
                    type="button"
                    class="btn btn-white border dropdown-toggle p-4 justify-content-center me-4"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <p class="fs-4 fw-bold">4</p>
                    <span class="fs-6">hjsjdsjd</span>
                  </button>
                  <ul class="dropdown-menu">
                    <!---dropdown menu links-->
                  </ul>
                </div>
                <canvas class="chart" width="70" height="70"></canvas>
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!----Recent order tables-->
    <div
      class="row"
      id="table"
      style="padding-top: 2%; padding-left: 2%; padding-right: 2%"
    >
      <div class="col-md-12 mb-3">
        <div class="card">
          <div class="card-header">
            <span><i class="bi bi-table me-2"></i></span> Recent Orders
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                id="example"
                class="table table-striped data-table"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>Order Number</th>
                    <th>Sender</th>
                    <th>Recefient</th>
                    <th>Pick-Up Point</th>
                    <th>Drop-Off Point</th>
                    <th>Date Delivered</th>
                    <th>Assigned Driver</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12345678</td>
                    <td>Jeanie Allanza</td>
                    <td>recep</td>
                    <td>pick</td>
                    <td>Drop</td>
                    <td>date</td>
                    <td>assigned</td>
                    <td>status</td>
                  </tr>
                  <tr>
                    <td>12345678</td>
                    <td>Hershey Mae Dungao</td>
                    <td>recep</td>
                    <td>pick</td>
                    <td>Drop</td>
                    <td>date</td>
                    <td>assigned</td>
                    <td>status</td>
                  </tr>
                  <tr>
                    <td>12345678</td>
                    <td>Bk Pecho</td>
                    <td>recep</td>
                    <td>pick</td>
                    <td>Drop</td>
                    <td>date</td>
                    <td>assigned</td>
                    <td>status</td>
                  </tr>
                  <tr>
                    <td>12345678</td>
                    <td>Ash Sanchez</td>
                    <td>recep</td>
                    <td>pick</td>
                    <td>Drop</td>
                    <td>date</td>
                    <td>assigned</td>
                    <td>status</td>
                  </tr>
                  <tr>
                    <td>12345678</td>
                    <td>Smol Kona</td>
                    <td>recep</td>
                    <td>pick</td>
                    <td>Drop</td>
                    <td>date</td>
                    <td>assigned</td>
                    <td>status</td>
                  </tr>
                  <tr>
                    <td>12345678</td>
                    <td>Jhudiel Suelto</td>
                    <td>recep</td>
                    <td>pick</td>
                    <td>Drop</td>
                    <td>date</td>
                    <td>assigned</td>
                    <td>status</td>
                  </tr>
                  <tr>
                    <td>12345678</td>
                    <td>Gil Pangan</td>
                    <td>recep</td>
                    <td>pick</td>
                    <td>Drop</td>
                    <td>date</td>
                    <td>assigned</td>
                    <td>status</td>
                  </tr>
                  <tr>
                    <td>12345678</td>
                    <td>Kischella Mae David</td>
                    <td>recep</td>
                    <td>pick</td>
                    <td>Drop</td>
                    <td>date</td>
                    <td>assigned</td>
                    <td>status</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
const router = useRouter();
const isLoggedIn = ref(false);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/');
  });
};
</script>

<style>
body {
  background-color: #fbfbfb;
}
@media (min-width: 991.98px) {
  main {
    padding-left: 240px;
  }
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 58px 0 0; /* Height of navbar */
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
  width: 240px;
  z-index: 600;
}

@media (max-width: 991.98px) {
  .sidebar {
    width: 100%;
  }
}
.sidebar .active {
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

/* Sidenav Arrow */
.sb-sidenav .sb-sidenav-menu .nav .nav-link .sb-sidenav-collapse-arrow {
  display: inline-block;
  margin-left: auto;
  transition: transform 0.15s ease;
}
.sb-sidenav
  .sb-sidenav-menu
  .nav
  .nav-link.collapsed
  .sb-sidenav-collapse-arrow {
  transform: rotate(-90deg);
}

.sb-sidenav-dark .sb-sidenav-menu .nav-link .sb-sidenav-collapse-arrow {
  color: rgba(255, 255, 255, 0.25);
}

.sb-sidenav-light .sb-sidenav-menu .nav-link .sb-sidenav-collapse-arrow {
  color: #adb5bd;
}
/* End of Sidenav Arrow */

/* ===================== TABLE RESPONSIVE ======================== */
#table .table-responsive,
.dataTable-wrapper .dataTable-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1199.98px) {
  .table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1399.98px) {
  .table-responsive-xxl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
