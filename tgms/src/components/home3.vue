<template>
  <div class="bg col-sm-12 page">
    <!-- Vertical navbar -->

    <div class="vertical-nav" id="sidebar">
      <div class="py-4 px-3 mb-4 bg-light">
        <div class="media d-flex align-items-center">
          <div class="media-body" id="logo">
            <h4 class="m-0 text-dark font-bold">FARMER HOMEPAGE</h4>
            <h4 class="m-0 text-dark font-bold">Sultan Tea Garden</h4>
          </div>
          <!-- <div>

            <img src="../assets/bg-2.jpg" alt="Girl in a jacket" width="500" height="600">
          </div> -->
        </div>
      </div>

      <p
        class="text-light font-weight-bold text-uppercase px-3 small pb-4 mb-0"
      >
        Main
      </p>

      <ul class="nav flex-column mb-0">
        <li class="nav-item">
          <a href="/fprofile" class="nav-link text-light font-italic">
            <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
            Profile
          </a>
        </li>

        <li class="nav-item">
          <a href="/files" class="nav-link text-light font-italic">
            <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
            File Upload
          </a>
        </li>
        <br />

        <li>
          <button
            @click="
              () => {
                logout();
              }
            "
          >
            Logout
          </button>
        </li>
      </ul>

      <!--
      <p
        class="text-light font-weight-bold text-uppercase px-3 small py-4 mb-0"
      >
        Charts
      </p>

     <ul class="nav flex-column mb-0">
        <li class="nav-item">
          <a href="#" class="nav-link text-light font-italic">
            <i class="fa fa-area-chart mr-3 text-primary fa-fw"></i>
            Area charts
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-light font-italic">
            <i class="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
            Bar charts
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-light font-italic">
            <i class="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
            Pie charts
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-light font-italic">
            <i class="fa fa-line-chart mr-3 text-primary fa-fw"></i>
            Line charts
          </a>
        </li>
      </ul> -->
    </div>
    <!-- End vertical navbar -->

    <!-- Page content holder -->
    <div>
      <div class="page-content p-5" id="content">
        <!-- <button
          id="sidebarCollapse"
          type="button"
          class="btn btn-light bg-black rounded-pill shadow-sm px-4 mb-4"
        >
          <i class="fa fa-bars mr-2"></i
          ><small class="text-uppercase font-weight-bold">Toggle</small>
        </button>

        <h2 class="display-4 text-black">Bootstrap vertical nav</h2>
        <p class="lead text-black mb-0">
          Build a fixed sidebar using Bootstrap 4 vertical navigation and media
          objects.
        </p>
        <p class="lead text-black">
          Snippet by
          <a href="https://bootstrapious.com/snippets" class="text-black">
            <u>Bootstrapious</u></a
          >
        </p> -->
        <img id="chobi" src="../assets/bg-2.jpg" />
        <!-- <div class="separator" ></div>

        <div class="row">
          <div class="col-sm-4" style="background-color: darkcyan">
            .col-sm-4
          </div>
          <div class="col-sm-4" style="background-color: green">.col-sm-4</div>
          <div class="col-sm-4" style="background-color: slategray">
            .col-sm-4
          </div>
        </div> -->

        <div style="padding-top: 50px">
          <div class="col-sm-12 content">
            <div class="col-lg-12">
              <p class="lead">
                Now there are about 61,000 hectares of land suitable for tea
                cultivation. Although there is an opportunity to increase the
                coverage of tea in this country, the production per hectare is
                comparatively less. Bangladesh produces 1,100 kg of tea per
                hectare. On the other hand, the production of tea per hectare in
                Kenya is 1,934 kg. Besides, 1,843 kg in India and 1,450 kg in
                Sri Lanka. Adoption of modern tea cultivation methods and
                intensive attention can be helpful in increasing tea production
                per hectare. Along with this tea needs to be processed and
                modernized. Our Garden started at 2011 by the name Green field
                tea estate ltd besides the indian border . located at Nitaldoba
                under Baliadangi upazila, Thakurgaon, which is Northern side of
                Bangladesh and very near to Darjeeling.
              </p>
            </div>
          </div>
        </div>

        <div class="separator"></div>

        <img id="chobi" src="../assets/bg-2.jpg" />

        <div class="col-sm-12">
          <div class="col-lg-12">
            <div class="bg-black p-5 rounded my-5 shadow-sm">
              <p class="lead font-italic mb-5 text-muted">
                SULTAN Tea owns one tea garden by named ‘Green field tea estate’
                which is located at Nitaldoba very close to Indian border. It is
                in Paria union under Baliadangi upazila,Thakurgaon. Besides that
                we have contract farmers. In all, we have tea garden on 400
                acres of land. Skilled tea labors are hand planting regularly
                six day’s in a week between March to December. The tea leaves
                are of very good quality. After planting leaves transfers to
                factory very swiftly by own vehicle to ensure best performance
                of tea.
              </p>
            </div>

            <p class="lead">
              SULTAN Tea owns one tea garden by named ‘Green field tea estate’
              which is located at Nitaldoba very close to Indian border. It is
              in Paria union under Baliadangi upazila,Thakurgaon. Besides that
              we have contract farmers. In all, we have tea garden on 400 acres
              of land. Skilled tea labors are hand planting regularly six day’s
              in a week between March to December. The tea leaves are of very
              good quality. After planting leaves transfers to factory very
              swiftly by own vehicle to ensure best performance of tea.
            </p>
            <p class="lead">
              SULTAN Tea owns one tea garden by named ‘Green field tea estate’
              which is located at Nitaldoba very close to Indian border. It is
              in Paria union under Baliadangi upazila,Thakurgaon. Besides that
              we have contract farmers. In all, we have tea garden on 400 acres
              of land. Skilled tea labors are hand planting regularly six day’s
              in a week between March to December. The tea leaves are of very
              good quality. After planting leaves transfers to factory very
              swiftly by own vehicle to ensure best performance of tea.
            </p>
          </div>
        </div>
        <img src="../assets/bg-1.jpg" />
        <br />
        <br />
        <p class="lead">
          SULTAN Tea owns one tea garden by named ‘Green field tea estate’ which
          is located at Nitaldoba very close to Indian border. It is in Paria
          union under Baliadangi upazila,Thakurgaon. Besides that we have
          contract farmers. In all, we have tea garden on 400 acres of land.
          Skilled tea labors are hand planting regularly six day’s in a week
          between March to December. The tea leaves are of very good quality.
          After planting leaves transfers to factory very swiftly by own vehicle
          to ensure best performance of tea.
        </p>
        <br />
        <br />

        <img src="../assets/freepik-1.jpg" />

        <img src="../assets/freepik-5.jpg" />

        <br />
        <br />

        <p class="lead">
          SULTAN Tea owns one tea garden by named ‘Green field tea estate’ which
          is located at Nitaldoba very close to Indian border. It is in Paria
          union under Baliadangi upazila,Thakurgaon. Besides that we have
          contract farmers. In all, we have tea garden on 400 acres of land.
          Skilled tea labors are hand planting regularly six day’s in a week
          between March to December. The tea leaves are of very good quality.
          After planting leaves transfers to factory very swiftly by own vehicle
          to ensure best performance of tea.
        </p>
        <br />
        <br />
      </div>
    </div>
    <!-- End demo content -->

    <div class="separator"></div>

    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="/about">about us</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="#">privacy policy</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">shipping</a></li>
              <li><a href="#">returns</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><a href="#">watch</a></li>
              <li><a href="#">bag</a></li>
              <li><a href="#">shoes</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="https://www.facebook.com/SultanTeaBangladesh"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a href="https://sultantea.com.bd/"
                ><i class="fab fa-google"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
      console.log("Succesfull");
    },
  },
};
</script>

<style scoped>
/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* ==========================================
*
*/

/* .body {
  background: url(../assets/img-01.png);
} */

.bg {
  /* The image used */

  /* Full height */
  height: 20%;
  width: 100%;
  /* Center and scale the image nicely */
  background-position: top;
  background-repeat: no-repeat;
  /* background-size: cover; */
  background-size: 1000px 300px;
}

.logo {
  background-image: url("../assets/bg-2.jpg");
}

.vertical-nav {
  min-width: 17rem;
  width: 19rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  border-style: groove;
  box-shadow: 3px 3px 10px rgba(95, 92, 92, 0.1);
  transition: all 0.4s;
  background-color: #161414;
}

.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}

/* for toggle behavior */

#sidebar.active {
  margin-left: -17rem;
}

#content.active {
  width: 100%;
  margin: 0;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -17rem;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
    margin: 0;
  }
  #content.active {
    margin-left: 17rem;
    width: calc(100% - 17rem);
  }
}

/*
*
* ==========================================
* FOR DEMO PURPOSE
* ==========================================
*
*/

body {
  background: #599fd9;
  background: -webkit-linear-gradient(to right, #599fd9, #c2e59c);
  background: linear-gradient(to right, #599fd9, #c2e59c);
  min-height: 100vh;
  overflow-x: hidden;
}

.separator {
  margin: 3rem 0;
  border-bottom: 1px dashed rgb(15, 15, 15);
}

.text-uppercase {
  letter-spacing: 0.1em;
}

.text-gray {
  color: rgb(14, 13, 13);
}

.lead {
  font-family: sans-serif;
}

img {
  display: block;
  margin-left: 30px;
  margin-right: auto;

  height: 500px;
  width: 1400px;
  padding-left: 50px;
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
body {
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
}

.container {
  max-width: 1170px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
ul {
  list-style: none;
}

.footer {
  background-color: #161414;
  padding: 70px 0;
}
.footer-col {
  width: 25%;
  padding: 0 15px;
}
.footer-col h4 {
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
}
.footer-col h4::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: #e91e63;
  height: 2px;
  box-sizing: border-box;
  width: 50px;
}
.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}
.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 300;
  color: #bbbbbb;
  display: block;
  transition: all 0.3s ease;
}
.footer-col ul li a:hover {
  color: #ffffff;
  padding-left: 8px;
}
.footer-col .social-links a {
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #ffffff;
  transition: all 0.5s ease;
}
.footer-col .social-links a:hover {
  color: #24262b;
  background-color: #ffffff;
}

/*responsive*/
@media (max-width: 767px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}
@media (max-width: 574px) {
  .footer-col {
    width: 100%;
  }
}

.page {
  background-color: #accc9e;
}

#chobi {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 50%;
  padding: 2px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}

button {
  color: #e91e63;
}
</style>
