<template>
  <v-row>
    <div>
      <v-img src="images/logo.png" width="30%" alt="MFU"> </v-img>
    </div>
    <v-col>
      <div class="text-left">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red darken-4"
          dark
          v-bind="attrs"
          v-on="on"
        >
         Meeting number
        </v-btn>
       
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <div>
            <p><a href="https://meet.google.com/pmp-wziv-tin?authuser=0">Room1</a></p>
            <p><a href="https://meet.google.com/pmp-wziv-tin?authuser=0">Room2</a></p>
            <p><a href="https://meet.google.com/pmp-wziv-tin?authuser=0">Room3</a></p>
            <p><a href="https://meet.google.com/pmp-wziv-tin?authuser=0">Room4</a></p>
            <p><a href="https://meet.google.com/pmp-wziv-tin?authuser=0">Room5</a></p>
              </div>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red darken-4"
          dark
          v-bind="attrs"
          v-on="on"
        >
         Budget source
        </v-btn>
       
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <div>
            <p><a href="https://meet.google.com/pmp-wziv-tin?authuser=0">MFU</a></p>
            <p><a href="https://meet.google.com/pmp-wziv-tin?authuser=0">Reinventing</a></p>
              </div>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
      <v-row>
        <v-col cols="12">
          <v-carousel :show-arrows="false" cycle height="350">
            <v-carousel-item
              v-for="(item, i) in banner"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <br />

      

      <v-main>
        <v-container>
          <v-row>
            <h1 style="color: darkred">
              Research and Research Support Services
            </h1>
          </v-row>
        </v-container>
      </v-main>

      <v-container>
        <v-row>
          <v-col>
            <v-row>
              <v-col cols="12" md="4">
                <a
                  href="https://www.library.mfu.ac.th/th/turnitin/"
                  rel="stylesheet"
                >
                  <v-img src="images/1.png" width="100%" hight="100%"> </v-img>
                </a>
              </v-col>

              <v-col cols="12" md="4">
                <a
                  href="https://www.library.mfu.ac.th/th/endnote-4/"
                  rel="stylesheet"
                >
                  <v-img src="images/2.png"> </v-img>
                </a>
              </v-col>

              <v-col cols="12" md="4">
                <a
                  href="https://www.library.mfu.ac.th/th/ez-proxy/"
                  rel="stylesheet"
                >
                  <v-img src="images/3.png">
                    <div class="fill-height repeating-gradient"></div>
                  </v-img>
                </a>
              </v-col>

              <v-col cols="12" md="4">
                <a
                  href="https://www.library.mfu.ac.th/th/home/"
                  rel="stylesheet"
                >
                  <v-img src="images/4.png">
                    <div class="fill-height repeating-gradient"></div>
                  </v-img>
                </a>
              </v-col>

              <v-col cols="12" md="4">
                <a
                  href="https://sites.google.com/mfu.ac.th/recommended/subject-guide"
                  rel="stylesheet"
                >
                  <v-img src="images/5.png">
                    <div class="fill-height repeating-gradient"></div>
                  </v-img>
                </a>
              </v-col>

              <v-col cols="12" md="4">
                <a
                  href="https://mfu-reading-guide.web.app/course-guide"
                  rel="stylesheet"
                >
                  <v-img src="images/6.png">
                    <div class="fill-height repeating-gradient"></div>
                  </v-img>
                </a>
              </v-col>

              <v-col cols="12" md="4">
                <a
                  href="https://www.library.mfu.ac.th/th/thesis-manual/"
                  rel="stylesheet"
                >
                  <v-img src="images/7.png">
                    <div class="fill-height repeating-gradient"></div>
                  </v-img>
                </a>
              </v-col>

              <v-col cols="12" md="4">
                <a
                  href="https://www.library.mfu.ac.th/th/library-tutorials/"
                  rel="stylesheet"
                >
                  <v-img src="images/8.png">
                    <div class="fill-height repeating-gradient"></div>
                  </v-img>
                </a>
              </v-col>

              <v-col cols="12" md="4">
                <a
                  href="https://sites.google.com/mfu.ac.th/library/training"
                  rel="stylesheet"
                >
                  <v-img src="images/9.png">
                    <div class="fill-height repeating-gradient"></div>
                  </v-img>
                </a>
              </v-col>
            </v-row>
          </v-col>

          <v-spacer></v-spacer>
          <v-row>
            <v-col>
              <v-sheet rounded="lg">
                <v-list class="text-center">
                  <v-list-item-title style="color: SteelBlue"
                    ><b> SCHOOL OF </b></v-list-item-title
                  >

                  <v-divider class="my-2"></v-divider>

                  <v-list-item-group v-model="selectedItem" color="primary">
                    <v-list-item v-for="(item, i) in list" :key="i">
                      <v-list-item-content>
                        <v-list-item-title v-text="item.text">
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-sheet>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
      <br />

      <v-main>
        <v-container>
          <v-row>
            <h1 style="color: darkred">Popular Publication</h1>
          </v-row>
        </v-container>
      </v-main>

      <v-row>
        <v-col cols="12" md="9">
          <v-row>
            <v-col cols="7">
              <v-avatar color="red darken-4" size="50">
                <span class="white--text text-h5">1</span>
              </v-avatar>
              <v-btn rounded>Wireless Personal Communications</v-btn>
            </v-col>

            <v-col>
              <v-avatar color="red darken-4" size="50">
                <span class="white--text text-h5">2</span>
              </v-avatar>
              <v-btn rounded>Phytotaxa</v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-avatar color="red darken-4" size="50">
                <span class="white--text text-h5">3</span>
              </v-avatar>
              <v-btn rounded>Lecture Note in Electrical Engineering</v-btn>
            </v-col>

            <v-col cols="5">
              <v-avatar color="red darken-4" size="50">
                <span class="white--text text-h5">4</span>
              </v-avatar>
              <v-btn rounded>Key Engineering Materials</v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col align="center">
          <v-sheet color="teal lighten-4" height="100%" width="100%"
            ><br />
            <p style="color: grey">MEMBER</p>
            <a href="https://www.facebook.com/Ga.De.555/" rel="stylesheet">
              <v-avatar>
                <img src="images/Gade.jpg" alt="Gade" />
              </v-avatar>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100005672298886"
              rel="stylesheet"
            >
              <v-avatar>
                <img src="images/Bam.jpg" alt="BamBam" />
              </v-avatar>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100004899939465"
              rel="stylesheet"
            >
              <v-avatar>
                <img src="images/Gift.jpg" alt="Gift" />
              </v-avatar>
            </a>
            <a href="https://www.facebook.com/paer.sppjpm" rel="stylesheet">
              <v-avatar>
                <img src="images/Pear.jpg" alt="Pearry" />
              </v-avatar>
            </a>
          </v-sheet>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
   
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    banner: [
      {
        src: "images/banner1.png",
      },
      {
        src: "images/banner2.jpg",
      },
      {
        src: "images/banner3.jpg",
      },
      {
        src: "images/banner4.jpg",
      },
      {
        src: "images/banner5.jpg",
      },
    ],

    selectedItem: 1,
    list: [
      { text: "วิทยาศาสตร์" },
      { text: "การจัดการ" },
      { text: "วิทยาศาสตร์สุขภาพ" },
      { text: "เทคโนโลยีสารสนเทศ" },
      { text: "อุตสาหกรรมเกษตร" },
      { text: "................." },
    ],
  }),
};
</script>


