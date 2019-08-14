<template>
  <div class="usage-report mx-5">
    <h1>利用者報告一覧</h1>

    <vue-ads-table
      :columns="columns"
      :rows="rows"
    >
    </vue-ads-table>
  </div>
</template>

<script scoped>
import { VueAdsTable } from "vue-ads-table-tree";
import "vue-ads-table-tree/dist/vue-ads-table-tree.css";
import rows from "./rows";
import columns from "./columns";

export default {
  name: "UsageReport",

  components: {
    VueAdsTable
  },

  data() {
    return {
      rows,
      columns
    };
  }
};
</script>

<style lang="scss" scoped>
.usage-report {
  text-align: left;
}
</style>
