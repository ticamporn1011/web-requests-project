<template>
  <div>
    <h1>Requests</h1>
    <div class="container">
      <v-row>
        <v-col cols="12">
          <v-card>
            <bar-chart
              v-if="loaded"
              :barchartdata="apidata"
              :barchartoptions="chartoptions"
            />
          </v-card>
        </v-col>
       <v-col>
          <v-card cols="12">
            <pie-chart
              v-if="school"
              :piechartdata="piedata"
              :piechartoptions="chartoptions"
              />
          </v-card> 
        </v-col> 
      </v-row>
    </div>
  </div>
</template>
<script>
//const url = "http://localhost:5000/api/requests";
const counturl = "http://localhost:5000/api/countrequests";
const schoolurl = "http://localhost:5000/api/schoolrequests";
export default {
  data() {
    return {
      loaded: false,
      apidata: {
        labels: [],
        datasets: [],
      },
      school: false,
      piedata: {
        labels: [],
        datasets: [],
      },
      // bardata: {
      //   labels: ["2563", "2564", "2565"],
      //   datasets: [
      //     {
      //       label: "Requests",
      //       data: [26, 176, 2],
      //       backgroundColor: [
      //         "rgba(255, 99, 132, 0.2)",
      //         "rgba(54, 162, 235, 0.2)",
      //       ],
      //       borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      //       borderWidth: 1,
      //     },
      //   ],
      // },
      //  piechartdata: {
      //   labels: ["2563", "2564"],
      //   datasets: [
      //     {
      //       label: "Requests",
      //       data: [70,50,20, 19, 3, 5, 0],
      //       backgroundColor: [
      //         "rgba(255, 99, 132, 0.2)",
      //         "rgba(54, 162, 235, 0.2)",
      //       ],
      //       borderColor: [
      //         "rgba(255, 99, 132, 1)",
      //         "rgba(54, 162, 235, 1)",
      //       ],
      //       borderWidth: 1,
      //     },
      //   ],
      // },
      chartoptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                // Max: 100
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    this.getcountrequests();
    this.getschoolrequests();
  },

  methods: {
    async getcountrequests() {
      this.loaded = false;
      try {
        const res = await this.$axios.get(counturl);
        //console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.fiscal_year);
          tempdata.push(x.sumrequests);
        });
        console.log(templabels);
        console.log(tempdata);
        const tempAPIdata = {
          labels: templabels,
          datasets: [
            {
              label: "Year",
              backgroundColor: ['Lavender', 'MediumPurple','SeaGreen', 'MediumSpringGreen','MediumSlateBlue', 'Magenta','PaleGoldenrod', 'Salmon','PeachPuff', 'MediumOrchid','Olive', 'Aquamarine','PowderBlue','Navy','NavajoWhite','DeepSkyBlue','YellowGreen','Pink'],
              //borderColor: "blue",
              data: tempdata,
            },
          ],
        };
        this.apidata = tempAPIdata;
        console.log("apidata=", this.piedata);
        this.loaded = true;
      } catch (e) {
        console.error(e);
      }
    },
    async getschoolrequests() {
      this.school = false;
      try {
        const res = await this.$axios.get(schoolurl);
        //console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.school);
          tempdata.push(x.schoolrequests);
        });
        console.log(templabels);
        console.log(tempdata);
        const tempAPIdata = {
          labels: templabels,
          datasets: [
            {
              label: "school",
              backgroundColor: ['Cyan', 'DarkSeaGreen','SeaGreen', 'MediumSpringGreen','MediumSlateBlue', 'Magenta','PaleGoldenrod', 'Salmon','PeachPuff', 'MediumOrchid','Olive', 'Aquamarine','PowderBlue','Navy','NavajoWhite','DeepSkyBlue','YellowGreen','Pink'],
              //borderColor:
              data: tempdata,
            },
          ],
        };
        this.piedata = tempAPIdata;
        console.log("piedata=", this.piedata);
        this.school = true;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>