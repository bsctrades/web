<template>
  <div>
   <div class="container">
      <section id="pool-sec">
          <div class="pool-head">
              <h3>Pool Details</h3>
          </div>
          <div class="search-box-a"><span><i class="fas fa-search"></i></span><input placeholder="Search by Pool ID, Pool name, Token contract address, Token symbol" /></div>
        
        <div class="table-a">
            <div class="widget-content widget-content-area br-6">
                <div class="table-responsive mb-4">
                  <table
                    id="zero-config"
                    class="table table-hover"
                    style="width:100%"
                  >
                    <thead>
                      <tr class="">
                        <th>Pool Name</th>
                        <th>Ratio</th>
                        <th>access</th>
                        <th>Progress</th>
                        <th class="blank-th"></th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>BSCTRADES</td>
                        <td class="prdz-color">1 BNB = 16.5 BSCTD</td>
                        <td>Public</td>
                        <td>0%</td>
                        <td>
                        <div class="wrp-process">
                        <div class="progress"> 
                        <div class="progress-bar" role="progressbar" aria-valuenow="0"
                        aria-valuemin="0" aria-valuemax="100" style="width:0%">
                            <span class="sr-only">0% Complete</span>
                        </div>
                        </div>
                        </div>
                        </td>
                        <td><a href="/#/poldex"><span class="filled">upcoming</span></a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
  name: "Pooldetails",

  mounted() {
    
  },
};
</script>
