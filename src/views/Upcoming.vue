<template>
  <div>
   <div class="container">
       <section id="upcoming-sec">
            <div class="upcoming-head">
                <h3>Upcoming Pools</h3>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <a href="/#/poldex">
                        <div class="upcoming-box">
                        <div class="hours-btn-wrp">
                            <div class="hours-img">
                                <img src="../assets/images/himg.png" />
                            </div>
                            <div class="hours-btn">
                                <button>7th May 2021</button>
                            </div>
                        </div>
                        <h3>BSCTRADES</h3>
                        <p>Total Raise</p>
                        <span>750 BNB</span>
                        <div class="location-wrp">
                            <div class="location-child1">
                               <p>Min Allocation</p>
                               <span>TBA</span>
                            </div>
                            <div class="location-child1">
                                <p>Max Allocation</p>
                                <span>TBA</span>
                            </div>
                            <div class="location-child1">
                                <p>Access</p>
                                <span>Public</span>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
                
               
            </div>
       </section>
   </div>
  </div>
</template>

<script>
// import ApexCharts from "apexcharts";
// import Chart from "chart.js";
// @ is an alias to /src
/* eslint-env jquery */
export default {
  name: "Upcoming",

  mounted() {
    $(document).ready(function() {
      $(".customer-logos").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    });
  },
};
</script>
