<template>
  <!-- 投融资页面 -->
  <div class="container" :style="{ width: bWidth ? bWidth + 'px' : '100%' }">
    <img
      src="https://front.zlhuiyun.com/static/images/fundbnr.jpg"
      class="top-bg"
    />
    <div class="top-info" :style="{ width: bWidth ? bWidth + 'px' : '100%' }">
      <breadcrumb
        :list="list"
        :style="{ width: width + 'px' }"
        style="margin: 0px auto"
      ></breadcrumb>
    </div>
    <div class="searchBox" :style="{ width: width + 'px' }">
      <div>
        <el-input
          class="search"
          placeholder="请输入机构名称	"
          prefix-icon="el-icon-search"
          v-model="orgNm"
        >
        </el-input>
        <el-select v-model="newstype" placeholder="机构类别" class="search">
          <el-option
            v-for="item in options"
            :key="item.label"
            :label="item.label"
            :value="item.label"
          >
          </el-option>
        </el-select>
        <el-button type="danger" plain style="width: 73px">重置</el-button>
      </div>

      <div class="btn_apply">申请成为服务商</div>
    </div>
    <div class="list" :style="{ width: width + 'px' }">
      <div class="item" v-for="(item, index) in List" :key="index">
        <img class="cover" :src="item.imgUrl" alt="" />
        <div class="bottom">
          <p class="title">{{ item.title }}</p>
          <p class="between">
            <span class="font">机构类别:{{ item.type }}</span>
            <span class="font"
              >投资金额:<span style="color: #f5a220">{{ item.price }}</span
              >万元</span
            >
          </p>
          <p class="content font">{{ item.content }}</p>
          <button class="btn_detail">查看详情</button>
        </div>
      </div>
    </div>
    <div class="footPage">
      <!-- <page-ination :total="total" :pageSize="pageSize" @changeP='pageChange'></page-ination> -->
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import breadcrumb from "../components/breadcrumb.vue";
import { mapState } from "vuex";
export default {
  name: "investService",
  props: {
    msg: String,
  },
  data() {
    return {
      list: [
        {
          name: "首页",
          href: "/",
        },
        {
          name: "投融资服务",
          href: "",
        },
      ],
      orgNm: "",
      newstype: "",
      options: [
        { label: "债券" },
        { label: "行业资讯" },
        { label: "企业风采" },
      ],
      currentPage1: 1,
      pageSize: 4,
      total: 0,
      List: [
        {
          imgUrl: "https://admin.zlhuiyun.com/storage/202103/01/8de72fe.png",
          title: "投融天下投资管理有限公司",
          type: "债券",
          price: 12000.0,
          content:
            "投融天下旨在通过线上与线下的结合，汇聚投融信息，利用数据分析，依靠特有的专业和资源优势，按照融资产品的标准精心打造融资项目，实现投融双方的精准对接。为协会各级会员企业（个人）提供最直接、最有效、最优质的投融信息服务、投融咨询服务、投融撮合服务以及投融附加服务。",
        },
        {
          imgUrl: "https://admin.zlhuiyun.com/storage/202103/01/8de72fe.png",
          title: "投融天下投资管理有限公司",
          type: "债券",
          price: 12000.0,
          content:
            "投融天下旨在通过线上与线下的结合，汇聚投融信息，利用数据分析，依靠特有的专业和资源优势，按照融资产品的标准精心打造融资项目，实现投融双方的精准对接。为协会各级会员企业（个人）提供最直接、最有效、最优质的投融信息服务、投融咨询服务、投融撮合服务以及投融附加服务。",
        },
        {
          imgUrl: "https://admin.zlhuiyun.com/storage/202103/01/8de72fe.png",
          title: "投融天下投资管理有限公司",
          type: "债券",
          price: 12000.0,
          content:
            "投融天下旨在通过线上与线下的结合，汇聚投融信息，利用数据分析，依靠特有的专业和资源优势，按照融资产品的标准精心打造融资项目，实现投融双方的精准对接。为协会各级会员企业（个人）提供最直接、最有效、最优质的投融信息服务、投融咨询服务、投融撮合服务以及投融附加服务。",
        },
        {
          imgUrl: "https://admin.zlhuiyun.com/storage/202103/01/8de72fe.png",
          title: "投融天下投资管理有限公司",
          type: "债券",
          price: 12000.0,
          content:
            "投融天下旨在通过线上与线下的结合，汇聚投融信息，利用数据分析，依靠特有的专业和资源优势，按照融资产品的标准精心打造融资项目，实现投融双方的精准对接。为协会各级会员企业（个人）提供最直接、最有效、最优质的投融信息服务、投融咨询服务、投融撮合服务以及投融附加服务。",
        },
        {
          imgUrl: "https://admin.zlhuiyun.com/storage/202103/01/8de72fe.png",
          title: "投融天下投资管理有限公司",
          type: "债券",
          price: 12000.0,
          content:
            "投融天下旨在通过线上与线下的结合，汇聚投融信息，利用数据分析，依靠特有的专业和资源优势，按照融资产品的标准精心打造融资项目，实现投融双方的精准对接。为协会各级会员企业（个人）提供最直接、最有效、最优质的投融信息服务、投融咨询服务、投融撮合服务以及投融附加服务。",
        },
        {
          imgUrl: "https://admin.zlhuiyun.com/storage/202103/01/8de72fe.png",
          title: "投融天下投资管理有限公司",
          type: "债券",
          price: 12000.0,
          content:
            "投融天下旨在通过线上与线下的结合，汇聚投融信息，利用数据分析，依靠特有的专业和资源优势，按照融资产品的标准精心打造融资项目，实现投融双方的精准对接。为协会各级会员企业（个人）提供最直接、最有效、最优质的投融信息服务、投融咨询服务、投融撮合服务以及投融附加服务。",
        },
      ],
    };
  },
  components: {
    breadcrumb,
  },
  computed: {
    ...mapState(["bWidth", "width"]),
  },
};
</script>

<style lang="less" scoped="scoped">
.container {
  background: #f6f6f6;
  .top-bg {
    width: 100%;
    height: 350px;
    display: block;
  }

  .top-info {
    width: 100%;
    height: 53px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    background-color: #fff;
  }
  .searchBox {
    margin: 20px auto 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .search {
      margin-right: 10px;
      width: 190px;
      height: 32px;

      .el-input {
        height: 32px;
      }
    }
    .btn_apply {
          cursor: pointer;

      justify-self: flex-end;
      width: 120px;
      height: 32px;
      background: #eb6118;
      border-radius: 3px;
      text-align: center;
      font-size: 12px;
      font-weight: 400;
      color: #ffffff;
      line-height: 32px;
    }
  }
  .list {
    margin: 20px auto 40px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .item {
      position: relative;
      background: #fff;
      height: 452px;
      width: calc(~"33.3% - 23px");
      margin: 11px;
      .cover {
        width: 100%;
        height: 250px;
      }
      .bottom {
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
        .title {
          margin-bottom: 19px;
          font-size: 18px;
          font-weight: 600;
          color: #303030;
        }
        .between {
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
        }
        .content {
          margin-bottom: 8px;
          width: 100%;
          height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .font {
          font-size: 14px;
          font-weight: 400;
          color: #909090;
        }
        .btn_detail {
          cursor: pointer;
          width: 100px;
          height: 32px;
          background: rgba(235, 97, 24, 0);
          border: 1px solid #eb8818;
          border-radius: 3px;
          text-align: center;
          font-size: 14px;
          font-weight: 400;
          color: #eb8818;
          line-height: 32px;
          position: absolute;
          bottom: 25px;
          left: 20px;
        }
      }
    }
  }
  .footPage {
    display: flex;
    justify-content: center;
    padding: 44px 0 20px;
  }
}
</style>