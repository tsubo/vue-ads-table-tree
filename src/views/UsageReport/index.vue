<template>
  <div class="usage-report mx-5">
    <h1>利用者報告一覧</h1>

    <vue-ads-table :columns="columns" :rows="rows">
      <div slot="action" slot-scope="props" class="action-columns">
        <button class="btn btn-primary btn-sm m-1">編集</button>
        <button class="btn btn-danger btn-sm m-1">削除</button>
      </div>
    </vue-ads-table>
  </div>
</template>

<script scoped>
import { VueAdsTable } from 'vue-ads-table-tree';
import rows from './rows';
import columns from './columns';

export default {
  name: 'UsageReport',

  components: {
    VueAdsTable,
  },

  data() {
    return {
      rows,
      columns,
    };
  },
};
</script>

<style lang="scss" scoped>
.usage-report {
  text-align: left;
}
.action-columns {
  width: 110px;
}
</style>
