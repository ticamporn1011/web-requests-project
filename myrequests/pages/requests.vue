<template>
  <v-data-table
    :headers="headers"
    :items="requestslist"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Manage Requests</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              New Requests
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.fiscal_year"
                      label="Fiscal Year"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.meeting_number"
                      label="Meeting number"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.fullname"
                      label="Full name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.school"
                      label="School"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.publication"
                      label="Publication"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.level_type"
                      label="Level Type"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.level"
                      label="Level"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.type"
                      label="Type"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.compensation"
                      label="Compensation"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.request_date"
                      label="request_date"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-radio-group
                      v-model="editedItem.budget_source"
                      column
                      label="Budget Source"
                    >
                      <v-radio label="มฟล." value="มฟล."></v-radio>
                      <v-radio
                        label="Reinventing"
                        value="Reinventing"
                      ></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.publication_name"
                      label="publication_name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.published_year_issue_pages"
                      label="published_year_issue_pages"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.first_author"
                      label="first_author"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.all_author"
                      label="all_author"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.remark"
                      label="remark"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4"> </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
const url = "http://localhost:5000/api/requests";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Request ID",
        align: "start",
        value: "request_id",
      },

      { text: "Fiscal Year", value: "fiscal_year" },
      { text: "Meeting Number", value: "meeting_number" },
      { text: "Full name", value: "fullname" },
      { text: "School", value: "school" },
      { text: "Publication", value: "publication" },
      { text: "Level Type", value: "level_type" },
      { text: "Level", value: "level" },
      { text: "Type", value: "type" },
      { text: "Compensation", value: "compensation" },
      { text: "Request date", value: "request_date" },
      { text: "Budget sorce", value: "budget_source" },
      { text: "Publication name", value: "publication_name" },
      {
        text: "published_year_issue_pages",
        value: "published_year_issue_pages",
      },
      { text: "First author", value: "first_author" },
      { text: "All author", value: "all_author" },
      { text: "Remark", value: "remark" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    requestslist: [],
    editedIndex: -1,
    editedItem: {
      fiscal_year: "",
      meeting_number: "",
      fullname: "",
      school: "",
      publication: "",
      level_type: "",
      level: "",
      type: "",
      compensation: "",
      request_date: "",
      budget_source: "",
      publication_name: "",
      published_year_issue_pages: "",
      first_author: "",
      all_author: "",
      remark: null,
    },
    defaultItem: {
      fiscal_year: "",
      meeting_number: "",
      fullname: "",
      school: "",
      publication: "",
      level_type: "",
      level: "",
      type: "",
      compensation: "",
      request_date: "",
      budget_source: "",
      publication_name: "",
      published_year_issue_pages: "",
      first_author: "",
      all_author: "",
      remark: null,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      const res = await this.$axios.get(url);
      this.requestslist = res.data.response;
    },

    editItem(item) {
      this.editedIndex = this.requestslist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.requestslist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      console.log(this.editItem.request_id);
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      const delurl = url + "/" + this.editedItem.request_id;
      try {
        const res = await this.$axios.delete(delurl);
        this.requestslist.splice(this.editedIndex, 1);
      } catch (e) {
        console.log(e);
      }
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedIndex > -1) {
        const putapi = url + "/" + this.editedItem.request_id;
        Object.assign(this.requestslist[this.editedIndex], this.editedItem);
        try {
          const res = await this.$axios.put(putapi, this.editedItem);
        } catch (e) {
          console.log(e);
        }
        //PUT API here
      } else {
        this.requestslist.push(this.editedItem);
        try {
          const res = await this.$axios.post(url, this.editedItem);
          this.initialize();
        } catch (e) {
          console.log(e);
        }
        //POST API
      }
      this.close();
    },
  },
};
</script>