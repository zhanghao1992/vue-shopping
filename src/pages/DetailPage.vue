<template>
  <div class="detail-wrap clearfix">
    <div class="detail-left fl">
      <img :src="imgSrc" alt="">
      <ul>

        <router-link v-for="(item, index) in productList"
          key="index"
          :to="{path: item.url}"
          tag="li"
          active-class="active">
          {{ item.name }}
        </router-link>
      </ul>
    </div>
    <div class="detail-right fr">
      <keep-alive>
        <router-view :data="data"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Slider from '../components/Slider'

export default {
  components: {
    Slider
  },
  // created: function () {
  //   this.$http.get('api/getNewsList')
  //   .then((res) => {
  //     this.newsList = res.data
  //   }, (err) => {
  //     console.log(err)
  //   })
  // },
  data() {
    return {
      data: {},
      productList: [
        {
          name: '数据统计',
          url: 'count',
          src: require('../assets/images/1.png'),
          active: true
        },
        {
          name: '数据预测',
          url: 'forecast',
          src: require('../assets/images/2.png'),
          active: false
        },
        {
          name: '流量分析',
          url: 'analyice',
          src: require('../assets/images/3.png'),
          active: false
        },
        {
          name: '广告发布',
          url: 'publish',
          src: require('../assets/images/4.png'),
          active: false
        }
      ],
      imgMap: {
        '/detail/count': require('../assets/images/1.png'),
        '/detail/forecast': require('../assets/images/2.png'),
        '/detail/analyice': require('../assets/images/3.png'),
        '/detail/publish': require('../assets/images/4.png'),

      }
    }
  },

  methods: {},
  computed: {
    imgSrc() {
      var path = this.$route.path;
      var data;
      this.productList.forEach(function (k, v) {
        if (path.indexOf(k.url) != -1) {
          data = k;

        }
      })
      this.data = data;
      return this.imgMap[this.$route.path]
    }
  }
}
</script>


<style scoped>
.detail-wrap {
  width: 1200px;
  margin: 30px auto;
}
.detail-left {
  width: 220px;
  background: #fff;
}
.detail-left img {
  display: block;
  width: 100px;
  height: 100px;
  margin: 20px auto;
}
.detail-left ul {
}
.detail-left ul li {
  display: block;
  text-align: center;
  color: darkseagreen;
  font-size: 16px;
  line-height: 28px;
}
.detail-left ul .active {
  background: darkseagreen;
  color: #fff;
}
.detail-right {
  width: 960px;
  background: #fff;
}
</style>
