<template>
  <!-- 新闻资讯页面 -->
  <div class="container" :style="{ width: bWidth ? bWidth + 'px' : '100%' }">
    <img src="https://front.zlhuiyun.com/static/images/xw.jpg" class="top-bg" />
    <div class="top-info" :style="{ width: bWidth ? bWidth + 'px' : '100%' }">
      <breadcrumb
        :list="list"
        :style="{ width: width + 'px' }"
        style="margin: 0px auto"
      ></breadcrumb>
    </div>
    <div class="searchBox" :style="{ width: width + 'px' }">
      <el-select v-model="newstype" placeholder="新闻类型" class="search">
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
    <div class="list" :style="{ width: width + 'px' }">
      <div
        class="item"
        :style="{ width: width + 'px' }"
        v-for="(item, index) in List"
        :key="index"
      >
        <img :src="item.imgURL" alt="" class="leftpart" />
        <div class="rightpart">
          <h3 class="commonfield">{{ item.title }}</h3>
          <div class="p1 commonfield">
            <img src="../../public/images/时间.png" style="margin-right:5px;" alt="" />
            <span class="date "> {{ item.date }}</span>
          </div>
          <div class="p1 commonfield">
            <img src="../../public/images/园区.png" style="margin-right:5px;" alt="" />
            <span class="date "> 园区动态</span>
          </div>
          <p class="p2 commonfield">
            {{ item.dtContent }}
          </p>
          <button
            type="button"
            class="el-button el-button--warning el-button--mini"
            style="
              background: rgb(255, 102, 0);
              position: absolute;
              left: 37px;
              bottom: 25px;
            "
          >
            <!----><i class="el-icon-document"></i><span>了解详情</span>
          </button>
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
  name: "park",
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
          name: "新闻资讯",
          href: "",
        },
      ],
      newstype: "",
      options: [
        { label: "园区动态" },
        { label: "行业资讯" },
        { label: "企业风采" },
      ],
      currentPage1: 1,
      pageSize: 4,
      total: 0,
      List: [
        {
          imgURL:
            "https://admin.zlhuiyun.com/storage/202103/06/微信图片_20210223145606.png",
          title: "对话掌门人—青春正担当",
          date: "2021.03.06",
          dtContent:
            "12月13日，由兰州市委统战部主办，兰州市新的社会阶层人士联谊会、陌上书会承办，西北民族大学学生工作部（处）、团委，西北民族大学科技园和兰州日报·ZAKER兰州协办的访谈活动“对话掌门人”在西北民族大学科技园路演厅举行，ZAKER兰州对本次活动进行了现场直播，活动现场邀请到西北民族大学学生代表及社会人士八十余人。",
        },
        {
          imgURL:
            "https://admin.zlhuiyun.com/storage/202103/06/微信图片_20210223145606.png",
          title: "对话掌门人—青春正担当",
          date: "2021.03.06",
          dtContent:
            "12月13日，由兰州市委统战部主办，兰州市新的社会阶层人士联谊会、陌上书会承办，西北民族大学学生工作部（处）、团委，西北民族大学科技园和兰州日报·ZAKER兰州协办的访谈活动“对话掌门人”在西北民族大学科技园路演厅举行",
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

    .search {
      margin-right: 10px;
      width: 190px;
      height: 32px;

      .el-input {
        height: 32px;
      }
    }
  }
  .list {
    margin: 20px auto 40px;
    .item {
      display: flex;
      margin-bottom: 10px;
      .leftpart {
        width: 400px;
        height: 250px;
      }

      .rightpart {
          flex:1;
          min-width: 0;
        background: #fff;
        padding: 19px 37px;
        position: relative;
        // box-sizing: border-box;
        .commonfield {
          margin-bottom: 9px;
          display: inline-block;
        }
        .p1 {
          height: 30px;
          display: flex;
          align-items: center;
          .date {
            font-size: 14px;
            font-weight: 400;
            color: #909090;
          }
        }

        .p2 {
        //   width: 800px;
          width: 100%;
          height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
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