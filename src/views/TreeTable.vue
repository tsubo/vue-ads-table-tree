<template>
  <div class="tree-table container">
    <h1>Tree Table</h1>

    <vue-ads-table
      :columns="columns"
      :rows="rows"
      :start="start"
      :end="end"
    >
    </vue-ads-table>
  </div>
</template>

<script>
import { VueAdsTable } from "vue-ads-table-tree";
import "vue-ads-table-tree/dist/vue-ads-table-tree.css";

export default {
  name: "TreeTable",

  components: {
    VueAdsTable
  },

  data() {
    const rows = [
      {
        id: 1,
        name: "Hoge",
        city: "Tokyo"
      },
      {
        id: 2,
        name: "Fuga",
        city: "Saitama"
      },
      {
        id: 3,
        name: "Puyo",
        city: "Chiba"
      }
    ];

    const columns = [
      {
        property: "id",
        title: "ID",
        direction: null,
        filterble: true
      },
      {
        property: "name",
        title: "Name",
        direction: null,
        filterble: true
      },
      {
        property: "city",
        title: "City",
        direction: null,
        filterble: true
      }
    ];

    return {
      rows,
      columns,
      start: 0,
      end: 2
    };
  }
};
</script>

<style>
.tree-table {
  text-align: left;
}
</style>
