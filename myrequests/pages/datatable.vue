<template>
  <v-card>
    <v-card-title>
      Requests
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="requestslist"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
const url = "http://localhost:5000/api/requests";

export default {
  data() {
    return {
      search: "",

      headers: [
        {
          text: "Requests",
          align: "center",
          sortable: true,
          value: "id",
        },
        { text: "Fiscal year", value: "fiscal_year" },
        { text: "Meeting room", value: "meeting_number" },
        { text: "Fullname", value: "fullname" },
        { text: "School", value: "school" },
        { text: "Publication", value: "publication" },
        { text: "Level type", value: "level_type" },
        { text: "Level", value: "level" },
        { text: "Type", value: "type" },
        { text: "Compensation", value: "compensation" },
        { text: "Request date", value: "request_date" },
        { text: "Budget source", value: "budget_source" },
        { text: "Publication name", value: "publication_name" },
        {
          text: "Published year issue pages",
          value: "published_year_issue_pages",
        },
        { text: "First author", value: "first_author" },
        { text: "All author", value: "all_author" },
        { text: "Remark", value: "remark" },
      ],

      requestslist: [],
    };
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      const res = await this.$axios.get(url);
      this.requestslist = res.data.response;
    },
  },
};
</script>
