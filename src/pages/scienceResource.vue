<template>
  <!-- 科技资源页面 -->
  <div class="container" :style="{ width: bWidth ? bWidth + 'px' : '100%' }">
    <img
      src="https://front.zlhuiyun.com/static/images/tech.jpg"
      class="top-bg"
    />
    <div class="top-info" :style="{ width: bWidth ? bWidth + 'px' : '100%' }">
      <breadcrumb
        :list="list"
        :style="{ width: width + 'px' }"
        style="margin: 0px auto"
      ></breadcrumb>
    </div>
    <div class="wrapper" :style="{ width: width + 'px' }">
      <div class="leftpart">
        <div
          v-for="(item, index) in sidebarList"
          :key="index"
          class="sidebar_item"
          :class="{ active: index == currentIndex }"
          @click="
            currentIndex = index;
            placeholder = item.placeholder;
          "
        >
          {{ item.title }}
        </div>
      </div>
      <div class="rightpart">
        <div class="searchBox">
          <div>
            <el-input
              class="search"
              :placeholder="placeholder"
              prefix-icon="el-icon-search"
              v-model="orgNm"
            >
            </el-input>
            <el-button type="danger" plain style="width: 73px">重置</el-button>
          </div>

          <div class="btn_apply">申请成为服务商</div>
        </div>
        <div class="con_list">
          <div
            class="con_item"
            v-for="(conitem, conindex) in List"
            :key="conindex"
          >
            <img class="conpic" :src="conitem.imgUrl" alt="" />
            <div class="son_rightpart">
              <p class="con_title">{{ conitem.title }}</p>
              <div
                style="display: flex; align-items: center; margin-bottom: 20px"
              >
                <img
                  src="../../public/images/园区.png"
                  style="margin-right: 5px; width: 15px; height: 15px"
                  alt=""
                />
                <span class="cont_font">{{ conitem.company }}</span>
              </div>
              <div style="display: flex; align-items: center">
                <img
                  src="../../public/images/时间.png"
                  style="margin-right: 5px; width: 15px; height: 15px"
                  alt=""
                />
                <span>{{ conitem.date }}</span>
              </div>
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
          name: "科技资源",
          href: "",
        },
      ],
      //   侧边栏下标
      currentIndex: 0,
      sidebarList: [
        {
          title: "科技成果",
          placeholder: "请输入成果名称",
        },
        {
          title: "科技需求",
          placeholder: "请输入需求名称",
        },
      ],
      orgNm: "",
      currentPage1: 1,
      pageSize: 4,
      total: 0,
      List1: [
        {
          imgUrl:
            "https://admin.zlhuiyun.com/storage/202103/01/5WJCX3o0puINEVIDHthVuzp6iy3uIr3p.png",
          title: "百合多糖的辐射防护作用机制研究",
          company: "天禧科技有限公司",
          date: "2021-06-30",
        },
        {
          imgUrl:
            "https://admin.zlhuiyun.com/storage/202103/01/aP40uKrvgZLHDRyKaO0ClZp3oXftr9Jx.png",
          title: "复合改性淀粉基发泡材料的开发及应用",
          company: "天禧科技有限公司",
          date: "2021-08-30",
        },
        {
          imgUrl:
            "https://admin.zlhuiyun.com/storage/202103/01/5WJCX3o0puINEVIDHthVuzp6iy3uIr3p.png",
          title: "百合多糖的辐射防护作用机制研究",
          company: "天禧科技有限公司",
          date: "2021-06-30",
        },
        {
          imgUrl:
            "https://admin.zlhuiyun.com/storage/202103/01/aP40uKrvgZLHDRyKaO0ClZp3oXftr9Jx.png",
          title: "复合改性淀粉基发泡材料的开发及应用",
          company: "天禧科技有限公司",
          date: "2021-08-30",
        },
      ],
      List2: [
        {
          imgUrl:
            "https://admin.zlhuiyun.com/storage/202012/09/H5CRnkpgegrfLW96IHLMCm6TXWmLB6u8.jpg",
          title: "自动监测远程控制消防系统",
          company: "宁波银行",
          date: "2021-06-25 至 2023-06-30",
        },
        {
          imgUrl:
            "https://admin.zlhuiyun.com/storage/202011/30/Jsq0UjIFvXgTHOWqij1HVIUspiRayTtT.jpg",
          title: "高寿命活塞式黄铜蒸汽电磁阀",
          company: "天禧科技有限公司",
          date: "2021-06-25 至 2023-06-30",
        },
        {
          imgUrl:
            "https://admin.zlhuiyun.com/storage/202012/09/H5CRnkpgegrfLW96IHLMCm6TXWmLB6u8.jpg",
          title: "自动监测远程控制消防系统",
          company: "宁波银行",
          date: "2021-06-25 至 2023-06-30",
        },
        {
          imgUrl:
            "https://admin.zlhuiyun.com/storage/202011/30/Jsq0UjIFvXgTHOWqij1HVIUspiRayTtT.jpg",
          title: "高寿命活塞式黄铜蒸汽电磁阀",
          company: "天禧科技有限公司",
          date: "2021-06-25 至 2023-06-30",
        },
      ],
      placeholder: "请输入成果名称",
    };
  },
  components: {
    breadcrumb,
  },
  computed: {
    ...mapState(["bWidth", "width"]),
    List() {
      if (this.currentIndex == 0) return this.List1;
      return this.List2;
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.container {
  background: #f6f6f6;
  min-height: calc(~"100vh - 235px");
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
  .wrapper {
    margin: 20px auto 147px;
    display: flex;
    justify-content: space-between;
    .leftpart {
      width: 240px;
      .sidebar_item {
        cursor: pointer;
        text-align: center;
        line-height: 60px;
        height: 60px;
        width: 100%;
        box-sizing: border-box;
        transition: 0.3s;
        background: #ffffff;
        font-size: 16px;
        font-weight: 400;
        color: #909090;
        // padding: 20px ;
        margin-bottom: 10px;
      }
      .active {
        color: #eb6118;
        position: relative;
      }
      .active::before {
        content: "";
        position: absolute;
        width: 5px;
        height: 60px;
        left: 0px;
        bottom: 0px;
        background: #eb6118;
      }
      .sidebar_item:last-child {
        margin: 0;
      }
    }
    .rightpart {
      margin-left: 20px;
      flex: 1;
      .searchBox {
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
      .con_list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin: 20px 0 60px;
        box-sizing: border-box;
        justify-content: space-between;

        .con_item {
          cursor: pointer;

          background: #fff;
          margin-bottom: 20px;
          width: calc(~"(100% - 20px) / 2");
          box-sizing: border-box;
          padding: 10px;
          display: flex;
          .conpic {
            width: 140px;
            height: 140px;
          }
          .son_rightpart {
            flex: 1;
            min-width: 0;
            padding: 20px;
            padding-right: 10px;
            .con_title {
              width: 100%;
              height: 23px;
              font-size: 18px;
              font-weight: 400;
              color: #303030;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-bottom: 27px;
            }
            .cont_font {
              font-size: 14px;
              font-weight: 400;
              color: #909090;
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
  }
}
</style>