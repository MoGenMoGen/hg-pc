<template>
  <!-- 党务公开组件 -->
  <div class="list">
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="title">
        
      · 方法 {{ item.title }}
      </div>
      <div class="date">{{ item.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "中国共产党党务公开条例（试行）",
          date: "2020-11-01",
        },
        {
          title: "中国共产党党务公开条例（试行）",
          date: "2020-11-01",
        },
        {
          title: "中国共产党党务公开条例（试行）",
          date: "2020-11-01",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.list {
  .item {
    background: #fff;
    height: 73px;
    line-height: 73px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px dashed rgba(12, 3, 6, 0.1);
    .title {
      font-size: 14px;
      font-weight: 400;
      color: #606060;
    }
    .date {
      font-size: 14px;
      font-weight: 400;
      color: #909090;
    }
  }
  .item:last-child {
    border: none;
  }
}
</style>