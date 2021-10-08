<template>
  <!--  党建动态 -->
  <div class="container">
    <div class="search-box">
      <div class="search-box-left">
        <el-input
          class="search"
          placeholder="标题"
          prefix-icon="el-icon-search"
          v-model="name"
        ></el-input>
        <el-select v-model="value1" placeholder="党建类型" class="search">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button type="danger" plain style="width: 73px">重置</el-button>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="(item, index) in List" :key="index">
        <img :src="item.imgURL" alt="" class="leftpart" />
        <div class="rightpart">
          <h3 class="commonfield">{{ item.title }}</h3>
          <div class="p1 commonfield">
            <img
              src="../../public/images/园区.png"
              style="margin-right: 5px"
              alt=""
            />
            <span class="date"> 高层要闻</span>
          </div>
          <div class="p1 commonfield">
            <img
              src="../../public/images/时间.png"
              style="margin-right: 5px"
              alt=""
            />
            <span class="date"> {{ item.date }}</span>
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
export default {
  name: "commonTitle",
  props: {},
  data() {
    return {
      name: "",
      value1: "",
      value2: "",
      options1: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
      ],
      List: [
        {
          imgURL:
            "https://admin.zlhuiyun.com/storage/202103/06/微信图片_20210223145606.png",
          title: "充分发挥非公企业党组织实质作用",
          date: "2021-03-06",
          dtContent:
            "深入学习宣传贯彻党的十八大精神，抓出原动力。企业要实现长远发展，必须准确...",
        },
       {
          imgURL:
            "https://admin.zlhuiyun.com/storage/202103/06/微信图片_20210223145606.png",
          title: "充分发挥非公企业党组织实质作用",
          date: "2021-03-06",
          dtContent:
            "深入学习宣传贯彻党的十八大精神，抓出原动力。企业要实现长远发展，必须准确...",
        },
      ],

      currentPage1: 1,
      pageSize: 6,
      total: 5,
    };
  },
  watch: {},
  mounted() {},
  methods: {
    handleCurrentChange(val) {
      this.currentPage1 = val;
    },
  },
  computed: {},
};
</script>

<style lang="less" scoped>
.one-line {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.container {
  .search-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .search-box-left {
      display: flex;
      align-items: center;
      .el-input {
        width: 190px;
        margin-right: 10px;
      }
      .el-select {
        width: 170px;
        margin-right: 10px;
      }
    }
    .search-box-right {
      padding: 10px 20px;
      font-size: 12px;
      color: #fff;
      background-color: #eb6118;
      border-radius: 3px;
      cursor: pointer;
    }
  }
  .list {
    width: 100%;
    margin: 20px auto 40px;
    .item {
      display: flex;
      margin-bottom: 10px;
      .leftpart {
        width: 350;
        height: 220px;
      }

      .rightpart {
        flex: 1;
        width: 0;
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
        //   width: 600px;
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
    margin: 44px 0 0;
  }
}
</style>
