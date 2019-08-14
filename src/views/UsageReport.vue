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

export default {
  name: "UsageReport",

  components: {
    VueAdsTable
  },

  data() {
    const rows = [
      {
        cursor: "",
        code: "0010-0056",
        name: "株式会社レコチョク",
        country: "JP",
        month: "",
        created: "",
        usageCount: "",
        income: "",
        memberCount: "",
        reportedAmount: "5,919,592",
        amount: "5,919,592",
        previousAmount: "839,760",
        status: "",
        action: "",
        _children: [
          {
            cursor: "",
            code: "XXXX1",
            name: "レコチョク MusicStore",
            country: "JP",
            month: "",
            created: "DL/通常/ハイレゾ/映像",
            usageCount: "",
            income: "",
            memberCount: "",
            reportedAmount: "744,160",
            amount: "744,160",
            previousAmount: "91,000",
            status: "",
            action: "",
            _children: [
              {
                cursor: "",
                code: "1",
                name: "シングル",
                country: "JP",
                month: "2019/4",
                created: "2019/5/10 12:35",
                usageCount: "",
                income: "",
                memberCount: "",
                reportedAmount: "100,000",
                amount: "100,000",
                previousAmount: "5,000",
                status: "完了",
                action: ""
              },
              {
                cursor: "",
                code: "2",
                name: "アルバム",
                country: "JP",
                month: "2019/4",
                created: "2019/5/10 12:35",
                usageCount: "",
                income: "",
                memberCount: "",
                reportedAmount: "120,000",
                amount: "120,000",
                previousAmount: "6,000",
                status: "完了",
                action: ""
              },
              {
                cursor: "",
                code: "3",
                name: "ビデオクリップ",
                country: "JP",
                month: "2019/4",
                created: "2019/5/10 12:35",
                usageCount: "",
                income: "",
                memberCount: "",
                reportedAmount: "120,000",
                amount: "120,000",
                previousAmount: "6,000",
                status: "完了",
                action: ""
              }
            ]
          },
          {
            cursor: "",
            code: "XXXX2",
            name: "d ミュージック",
            country: "JP",
            month: "",
            created: "DL/ハイレゾ/映像",
            usageCount: "",
            income: "",
            memberCount: "",
            reportedAmount: "905,748",
            amount: "905,748",
            previousAmount: "131,040",
            status: "",
            action: "",
            _children: [
              {
                cursor: "",
                code: "1",
                name: "シングル",
                country: "JP",
                month: "2019/4",
                created: "2019/5/10 12:35",
                usageCount: "",
                income: "",
                memberCount: "",
                reportedAmount: "100,000",
                amount: "100,000",
                previousAmount: "5,000",
                status: "完了",
                action: ""
              },
              {
                cursor: "",
                code: "2",
                name: "アルバム",
                country: "JP",
                month: "2019/4",
                created: "2019/5/10 12:35",
                usageCount: "",
                income: "",
                memberCount: "",
                reportedAmount: "120,000",
                amount: "120,000",
                previousAmount: "6,000",
                status: "完了",
                action: ""
              },
              {
                cursor: "",
                code: "3",
                name: "ビデオクリップ",
                country: "JP",
                month: "2019/4",
                created: "2019/5/10 12:35",
                usageCount: "",
                income: "",
                memberCount: "",
                reportedAmount: "120,000",
                amount: "120,000",
                previousAmount: "6,000",
                status: "完了",
                action: ""
              }
            ]
          }
        ]
      },
      {
        cursor: "",
        code: "0010-0057",
        name: "アップル",
        country: "JP",
        month: "",
        created: "",
        usageCount: "",
        income: "",
        memberCount: "",
        reportedAmount: "5,919,592",
        amount: "5,919,592",
        previousAmount: "839,760",
        status: "",
        action: "",
        _children: [
          {
            cursor: "",
            code: "XXXX1",
            name: "レコチョク MusicStore",
            country: "JP",
            month: "",
            created: "DL/通常/ハイレゾ/映像",
            usageCount: "",
            income: "",
            memberCount: "",
            reportedAmount: "744,160",
            amount: "744,160",
            previousAmount: "91,000",
            status: "",
            action: "",
            _children: [
              {
                cursor: "",
                code: "1",
                name: "シングル",
                country: "JP",
                month: "2019/4",
                created: "2019/5/10 12:35",
                usageCount: "",
                income: "",
                memberCount: "",
                reportedAmount: "100,000",
                amount: "100,000",
                previousAmount: "5,000",
                status: "完了",
                action: ""
              },
              {
                cursor: "",
                code: "2",
                name: "アルバム",
                country: "JP",
                month: "2019/4",
                created: "2019/5/10 12:35",
                usageCount: "",
                income: "",
                memberCount: "",
                reportedAmount: "120,000",
                amount: "120,000",
                previousAmount: "6,000",
                status: "完了",
                action: ""
              },
              {
                cursor: "",
                code: "3",
                name: "ビデオクリップ",
                country: "JP",
                month: "2019/4",
                created: "2019/5/10 12:35",
                usageCount: "",
                income: "",
                memberCount: "",
                reportedAmount: "120,000",
                amount: "120,000",
                previousAmount: "6,000",
                status: "完了",
                action: ""
              }
            ]
          },
          {
            cursor: "",
            code: "XXXX2",
            name: "d ミュージック",
            country: "JP",
            month: "",
            created: "DL/ハイレゾ/映像",
            usageCount: "",
            income: "",
            memberCount: "",
            reportedAmount: "905,748",
            amount: "905,748",
            previousAmount: "131,040",
            status: "",
            action: "",
            _children: [
              {
                cursor: "",
                code: "1",
                name: "シングル",
                country: "JP",
                month: "2019/4",
                created: "2019/5/10 12:35",
                usageCount: "",
                income: "",
                memberCount: "",
                reportedAmount: "100,000",
                amount: "100,000",
                previousAmount: "5,000",
                status: "完了",
                action: ""
              },
              {
                cursor: "",
                code: "2",
                name: "アルバム",
                country: "JP",
                month: "2019/4",
                created: "2019/5/10 12:35",
                usageCount: "",
                income: "",
                memberCount: "",
                reportedAmount: "120,000",
                amount: "120,000",
                previousAmount: "6,000",
                status: "完了",
                action: ""
              },
              {
                cursor: "",
                code: "3",
                name: "ビデオクリップ",
                country: "JP",
                month: "2019/4",
                created: "2019/5/10 12:35",
                usageCount: "",
                income: "",
                memberCount: "",
                reportedAmount: "120,000",
                amount: "120,000",
                previousAmount: "6,000",
                status: "完了",
                action: ""
              }
            ]
          }
        ]
      },
      {
        cursor: "",
        code: "0010-0058",
        name: "子供なしはどう見える",
        country: "JP",
        month: "",
        created: "",
        usageCount: "",
        income: "",
        memberCount: "",
        reportedAmount: "5,919,592",
        amount: "5,919,592",
        previousAmount: "839,760",
        status: "",
        action: ""
      }
    ];

    const columns = [
      {
        property: "cursor",
        title: "",
        collapseIcon: true
      },
      {
        property: "code",
        title: "コード レポートNo"
      },
      {
        property: "name",
        title: "サービス名"
      },
      {
        property: "country",
        title: "国"
      },
      {
        property: "month",
        title: "利用月"
      },
      {
        property: "created",
        title: "登録日"
      },
      {
        property: "usageCount",
        title: "再生回数"
      },
      {
        property: "income",
        title: "総収益"
      },
      {
        property: "memberCount",
        title: "総会員数 / MAU"
      },
      {
        property: "reportedAmount",
        title: "金額合計[報告]"
      },
      {
        property: "amount",
        title: "金額合計[計算]"
      },
      {
        property: "amount",
        title: "前回報告金額合計"
      },
      {
        property: "status",
        title: "取込状況"
      },
      {
        property: "action",
        title: "操作"
      }
    ];

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
