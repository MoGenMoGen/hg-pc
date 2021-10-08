<template>
  <!-- 智慧党建 -->
  <div class="container" :style="{ width: bWidth ? bWidth + 'px' : '100%' }">
    <img src="https://front.zlhuiyun.com/static/images/dj.jpg" class="top-bg" />
    <div style="width: 100%; background-color: #fff">
      <div class="top-info" :style="{ width: width + 'px' }">
        <breadcrumb :list="list"></breadcrumb>
      </div>
    </div>
    <div class="contentBody" :style="{ width: width + 'px' }">
      <div class="bodyLeft">
        <div
          class="leftNav"
          v-for="(item, index) in NavList"
          :key="index"
          :class="currentIndex == index ? 'active' : ''"
          @click="changeIndex(index)"
        >
          <span>
            {{ item }}
          </span>
        </div>
      </div>
      <div class="bodyRight">
        <partyBuildState v-if="currentIndex == 0"></partyBuildState>
        <party-work-public v-if="currentIndex == 1"></party-work-public>
        <partyBuildActivity v-if="currentIndex == 2"></partyBuildActivity>
      </div>
    </div>
    <!-- <vue-ueditor-wrap v-model="msg" :config="myConfig"></vue-ueditor-wrap> -->
  </div>
</template>

<script>
import breadcrumb from "../components/breadcrumb.vue";
import partyBuildState from "../components/partyBuildState.vue";
import demandInfo from "../components/demandInfo.vue";
import partyBuildActivity from "../components/partyBuildActivity.vue";
import VueUeditorWrap from "vue-ueditor-wrap";
import { mapState } from "vuex";
import PartyWorkPublic from '../components/partyWorkPublic.vue';
export default {
  name: "supplyPlatform",
  props: {},
  data() {
    return {
      list: [
        {
          name: "首页",
          href: "/",
        },
        {
          name: "智慧党建",
          href: "",
        },
      ],
      NavList: ["党建动态", "党务公开", "党建活动"],
      currentIndex: 0,
      msg: "",
      myConfig: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 440,
        // 初始容器宽度
        initialFrameWidth: "100%",
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: "https://www.ship88.cn/general/ueditor/exec",
        // serverUrl: "https://www.ship88.cn/general/oss/upload",

        UEDITOR_HOME_URL: "/UEditor/",
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        // UEDITOR_HOME_URL:
        //   process.env.NODE_ENV === "production"
        //     ? "/static/ueditor/"
        //     : "/static/ueditor/"
      },
    };
  },
  mounted() {
    if (this.until.getQueryString("typeId")) {
      this.currentIndex = this.until.getQueryString("typeId");
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage1 = val;
    },
    changeIndex(index) {
      this.currentIndex = index;
    },
  },
  components: {
    breadcrumb,
    partyBuildState,
    demandInfo,
    partyBuildActivity,
    PartyWorkPublic,
    VueUeditorWrap,
  },
  computed: {
    ...mapState(["bWidth", "width"]),
  },
};
</script>

<style scoped lang="less">
.container {
  background: #f6f6f6;
  padding-bottom: 20px;
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

  .contentBody {
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    .bodyLeft {
      transition: all 0.3s;
      width: 240px;

      .leftNav {
        cursor: pointer;
        width: 225px;
        height: 60px;
        background-color: #ffffff;
        line-height: 60px;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 400;
        color: #909090;
        margin-bottom: 10px;
        transition: all 0.3s;

        span {
          margin-left: 47px;
        }
      }

      .active {
        border-left: 6px solid #eb6118;
        color: #eb6118;
        box-sizing: border-box;
        transition: all 0.3s;

        span {
          margin-left: 41px;
        }
      }
    }

    .bodyRight {
      margin-left: 40px;
      //   width: 935px;
      flex: 1;
      min-height: calc(100vh - 668px);
      .rightList {
        background-color: #ffffff;
        margin-bottom: 20px;

        .listHead {
          padding: 30px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          display: flex;
          font-size: 20px;
          font-weight: 400;
          color: #eb6118;
          align-items: center;

          span {
            margin-left: 10px;
          }
        }

        .listBody {
          padding: 30px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #606060;
          text-indent: 2em;
        }
      }
    }
  }
}
</style>
