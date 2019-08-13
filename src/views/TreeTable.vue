<template>
  <div class="tree-table container">
    <h1>Tree Table</h1>

    <vue-ads-table
      :columns="columns"
      :rows="rows"
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
        city: "Tokyo",
        _children: [
          {
            id: "1-1",
            name: "Hoge-1",
            city: "Tokyo-1"
          },
          {
            id: "1-2",
            name: "Hoge-2",
            city: "Tokyo-2"
          },
          {
            id: "1-3",
            name: "Hoge-3",
            city: "Tokyo-3"
          }
        ]
      },
      {
        id: 2,
        name: "Fuga",
        _children: [
          {
            id: "2-1",
            name: "Fuga-1",
            city: "Tokyo-1"
          },
          {
            id: "2-2",
            name: "Fuga-2",
            city: "Tokyo-2"
          }
        ]
      },
      {
        id: 3,
        city: "Chiba",
        _children: [
          {
            id: "3-1",
            name: "Puyo-1",
            city: "Tokyo-1"
          }
        ]
      }
    ];

    const columns = [
      {
        property: "id",
        title: "ID",
        direction: null,
        filterble: true,
        collapseIcon: true
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
      columns
    };
  }
};
</script>

<style>
.tree-table {
  text-align: left;
}
</style>
