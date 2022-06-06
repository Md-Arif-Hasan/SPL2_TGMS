<template>
  <div class="bg col-sm-12 page">
    <!-- Vertical navbar -->

    <div class="vertical-nav" id="sidebar">
      <div class="py-4 px-3 mb-4 bg-dark">
        <!-- <div class="media d-flex align-items-center"> -->
        <div class="media-body" id="logo">
          <h4 class="m-0 text-success font-bold">Sultan Tea Garden</h4>
        </div>

        <!-- </div> -->
      </div>

      <!-- <p
        class="text-light font-weight-bold text-uppercase px-3 small pb-4 mb-0"
      >
        Main
      </p> -->

      <ul class="nav flex-column mb-0">
        <li class="nav-item">
          <a href="/profilepage" class="nav-link text-light font-bold">
            <b>
              <span style="color: #00ff00">
                <i class="fa text-primary fa-fw"></i>
                Profile</span
              >
            </b>
          </a>
        </li>

        <!-- <li class="nav-item">
          <a
            href="/about"
            class="nav-link text-light font-italic font-size:10px"
          >
            <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
            About Us
          </a>
        </li> -->

        <li class="nav-item">
          <a href="/gallery" class="nav-link text-light font-bold">
            <span style="color: #00ff00">
              <i class="fa text-primary fa-fw"></i>
              Gallery</span
            >
          </a>
        </li>

        <!-- <li class="nav-item">
          <a href="/add" class="nav-link text-light font-italic">
            <i class="fa fa-photo-video mr-3 text-primary fa-fw"></i>
            Add User
          </a>
        </li> -->

        <li class="nav-item">
          <a href="/emplist" class="nav-link text-light font-bold">
            <span style="color: #00ff00">
              <i class="fa text-primary fa-fw"></i>
              Employee list</span
            >
          </a>
        </li>

        <li class="nav-item">
          <a href="/flist" class="nav-link text-light font-bold">
            <span style="color: #00ff00">
              <i class="fa text-primary fa-fw"></i>
              Farmer list</span
            >
          </a>
        </li>

        <li class="nav-item">
          <a href="/attend" class="nav-link text-light font-bold">
            <span style="color: #00ff00">
              <i class="fa text-primary fa-fw"></i>
              Attendance</span
            >
          </a>
        </li>

        <li class="nav-item">
          <a href="/adminpayslip" class="nav-link text-light font-bold">
            <span style="color: #00ff00">
              <i class="fa text-primary fa-fw"></i>
              Monthly payslip</span
            >
          </a>
        </li>

        <li class="nav-item">
          <a href="/ypayslip" class="nav-link text-light font-bold">
            <span style="color: #00ff00">
              <i class="fa text-primary fa-fw"></i>
              Yearly payslip</span
            >
          </a>
        </li>

        <li class="nav-item">
          <a href="/download" class="nav-link text-light font-bold">
            <span style="color: #00ff00">
              <i class="fa text-primary fa-fw"></i>
              Application download</span
            >
          </a>
        </li>

        <li class="nav-item">
          <a href="/sin" class="nav-link text-light font-bold">
            <span style="color: #00ff00">
              <i class="fa text-primary fa-fw"></i>
              Salary insert
            </span>
          </a>
        </li>

        <li class="nav-item">
          <a href="/salarytrans" class="nav-link text-light font-bold">
            <span style="color: #00ff00">
              <i class="fa text-primary fa-fw"></i>
              Salary transaction</span
            >
          </a>
        </li>

        <li class="nav-item">
          <a href="/wagestrans" class="nav-link text-light font-bold">
            <span style="color: #00ff00">
              <i class="fa text-primary fa-fw"></i>
              Wages Transaction</span
            >
          </a>
        </li>

        <li class="nav-item">
          <a href="/alltrans" class="nav-link text-light font-bold">
            <span style="color: #00ff00">
              <i class="fa text-primary fa-fw"></i>
              Transaction history</span
            >
          </a>
        </li>

        <!-- 
        <li class="nav-item">
          <a href="/search" class="nav-link text-light font-italic">
            <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
            Search Transaction
          </a>
        </li>
      -->

        <li class="nav-item">
          <a href="/win" class="nav-link text-light font-italic">
            <span style="color: #00ff00">
              <i class="fa text-primary fa-fw"></i>
              Warehouse insert</span
            >
          </a>
        </li>

        <li class="nav-item">
          <a href="/wreport" class="nav-link text-light font-italic">
            <span style="color: #00ff00">
              <i class="fa text-primary fa-fw"></i>
              Inventory report</span
            >
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
    </div>
    <!-- End vertical navbar -->

    <!-- Page content holder -->
    <div>
      <div class="page-content p-5" id="content">
        <img src="../assets/bg-2.jpg" />

        <div style="padding-top: 50px">
          <div class="col-sm-12 content">
            <div class="col-lg-12">
              <p class="lead">
                Tea is the most popular drink in the world. It is said that
                people drink tea the most after water. The excellent taste,
                aroma, readiness of the tea is one of the reasons. It is also
                healthy and safe. Doctors also advise patients to drink tea for
                various diseases. Bangladesh is not lagging behind in the huge
                popularity of tea. It is said that tea is now a part of daily
                life. The history of tea cultivation in Bangladesh is also very
                ancient. The first commercial cultivation of tea in the country
                was started in 1858 at Malnichhera in Sylhet. In 1947, there
                were a total of 103 tea gardens in this part of the country. At
                present there are 163 tea gardens in the country. At present tea
                is cultivated in 54,106 hectare.of land in the country.
              </p>

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
            <h4></h4>
            <ul>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
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
  border-style: rgb(44, 15, 15);
  box-shadow: 3px 3px 10px rgba(95, 92, 92, 0.1);
  transition: all 0.4s;
  background-color: #080808;
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

  height: 400px;
  width: 950px;
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
  padding: 10px 0;
}
.footer-col {
  width: 25%;
  padding: 0 15px;
}
.footer-col h4 {
  font-size: 18px;
  color: #1c1b1b;
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
  background-color: #0d0d0d;
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
  color: #161414;
  text-decoration: none;
  font-weight: 300;
  color: #131212;
  display: block;
  transition: all 0.3s ease;
}
.footer-col ul li a:hover {
  color: #121111;
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
  color: #1e1d1d;
  transition: all 0.5s ease;
}
.footer-col .social-links a:hover {
  color: #24262b;
  background-color: #272323;
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
::placeholder {
  color: rgb(0, 0, 0);
  font-size: 1.5em;
  ffont-weight: bold;
}
</style>
