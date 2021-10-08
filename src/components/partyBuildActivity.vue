<template>
  <div class="container">
    <div class="search-box">
      <div class="search-box-left">
        <el-input
          class="search"
          placeholder="活动名称"
          prefix-icon="el-icon-search"
          v-model="name"
        ></el-input>
        <el-select v-model="value1" placeholder="活动状态" class="search">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value2" placeholder="活动性质" class="search">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button type="danger" plain style="width: 73px">重置</el-button>
      </div>
    </div>
    	<div class="active-list">
				<div class="active-item" v-for="(item,index) in 6" :key="index">
					<div class="active-item-top">
						<span class="active-item-top-b" v-if="index==0||index==3">未开始</span>
						<span class="active-item-top-g" v-if="index==1||index==4">进行中</span>
						<span class="active-item-top-e" v-if="index==2||index==5">已结束</span>
						<img src="https://admin.zlhuiyun.com/storage/202109/07/banner4.jpeg">
					</div>
					<div class="active-item-info">
						<p class="active-item-info-title one-line">庆祝共产党建党100周年大型活动</p>
						<p class="active-item-info-cont one-line"><img src="../../public/images/地址.png">北京市 北京市 东城区</p>
						<p class="active-item-info-cont"><img src="../../public/images/时间.png">2021-06-30</p>
						<p class="active-item-info-btn" v-if="index==0||index==3">立即报名</p>
						<p class="active-item-info-btn active-item-info-btn2" v-if="index!=0&&index!=3">查看详情</p>
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
      options2: [
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

  .active-list {
    margin-top: 30px;
			display: flex;
			flex-wrap: wrap;

			.active-item {
				// flex: 1;
				width: 31%;
				margin-right: 30px;
				display: flex;
				flex-direction: column;
				box-sizing: border-box;
				border: 1px solid #EAEAEA;
				margin-bottom: 30px;

				.active-item-top {
					position: relative;

					span {
						width: 80px;
						height: 32px;
						line-height: 32px;
						text-align: center;
						position: absolute;
						top: 20px;
						left: 20px;
						border-radius: 3px;
						font-size: 14px;
					}

					.active-item-top-b {
						background-color: #fff;
						color: #EB6118;
					}

					.active-item-top-g {
						background-color: #EB6118;
						color: #fff;
					}

					.active-item-top-e {
						background-color: #888888;
						color: #fff;
					}

					img {
						width: 100%;
						height: 200px;
						display: block;
					}
				}

				.active-item-info {
          background: #fff;
					display: flex;
					flex-direction: column;
					width: 100%;
					padding: 20px 20px 30px;
					box-sizing: border-box;

					.active-item-info-title {
						font-size: 16px;
            font-weight: bold;
						color: #303030;
						margin-bottom: 12px;
					}

					.active-item-info-cont {
						font-size: 14px;
						color: #909090;
						display: flex;
						align-items: center;
						margin-bottom: 10px;

						img {
							width: 15px;
							height: 15px;
							margin-right: 8px;
						}
					}

					.active-item-info-btn {
						width: 100px;
						height: 32px;
						line-height: 32px;
						text-align: center;
						font-size: 14px;
						color: #fff;
						background-color: #EB6118;
						border-radius: 3px;
						margin-top: 20px;
						cursor: pointer;
					}

					.active-item-info-btn2 {
						background-color: #fff;
						border: 1px solid #EB6118;
						color: #EB6118;
						box-sizing: border-box;
					}
				}
			}

			.active-item:nth-child(3n) {
				margin-right: 0;
			}
		}
  .footPage {
    display: flex;
    justify-content: center;
    margin: 44px 0 0;
  }
}
</style>
