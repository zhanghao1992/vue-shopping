<template>
  <div class="wrap clearfix">
    <div class="left fl">
      <div class="block">
        <h3>最新产品</h3>
        <dl>
          <dt>{{ productList.pc.title }}</dt>
          <dd v-for="item in productList.pc.list">
            <a :href="item.url">{{ item.name }}</a>
            <span class="hot" v-if="item.hot">hot</span>
          </dd>
        </dl>

        <dl>
          <dt>{{ productList.app.title }}</dt>
          <dd v-for="item in productList.app.list">
            <a :href="item.url">{{ item.name }}</a>
          </dd>
        </dl>
      </div>

      <div class="block" style="margin-top: 15px;">
        <h3>最新消息</h3>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="right fr">
      <div class="slider">
        <Slider v-bind:sliders="sliders" v-bind:invTime="invTime" @change="changeHnadle"></Slider>
      </div>
      <div class="productList">
        <ul>
          <template v-for="(item, index) in boardList">
            <li>
              <img :src="item.src" alt="">
              <div class="text">
                <h4 class="title">{{ item.title }}</h4>
                <p class="description">{{ item.description }}</p>
                <router-link tag="a" :to="{path: '/detail/' + item.toKey}" class="pay" :id="item.id">
                  立即购买
                </router-link>
              </div>
            </li>
          </template>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '../components/Slider'

export default {
  components: {
    Slider
  },
  data() {
    return {
      invTime: 2000,
      sliders: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ],
      boardList: [
        {
          src: require('../assets/images/1.png'),
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'count',
          saleout: false
        },
        {
          src: require('../assets/images/2.png'),
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          toKey: 'forecast',
          saleout: false
        },
        {
          src: require('../assets/images/3.png'),
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'analyice',
          saleout: true
        },
        {
          src: require('../assets/images/4.png'),
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'publish',
          saleout: false
        }
      ],
      newsList: [
        {
          name: '数据统计',
          url: 'http://starcraft.com'
        },
        {
          name: '数据预测',
          url: 'http://warcraft.com'
        },
        {
          name: '流量分析',
          url: 'http://overwatch.com',
          hot: true
        },
        {
          name: '广告发布',
          url: 'http://hearstone.com'
        }
      ],
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com',
              hot: true
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      }
    }
  },
  mounted() {//https://api.douban.com/v2/movie/in_theaters
    this.$http({
      method: "GET",
      url: '/api/user',
      data: {
        id: 123
      }
    }).then(function (response) {
      console.log(JSON.parse(response.request.response));
    }).catch(function (error) {
      console.log(error);
    });

    //跨域代码
    this.$http.get('API/v2/movie/subject/1764796')
      .then((res) => {
        console.log(res.request)
//       this.newsList = res.data
      }, (err) => {
        console.log(err)
      })
  },
  methods: {
    changeHnadle() {
      console.log('changed')
    }
  }
}
</script>


<style scoped>
.wrap {
  width: 1200px;
  margin: 20px auto;
}
.left {
  width: 220px;
}
.left .block {
  background: #fff;
}
.left h3 {
  font-size: 16px;
  line-height: 36px;
  font-weight: 700;
  color: #fff;
  background: #f60;
}
.left dt {
  font-size: 14px;
}
.left a {
  color: #333;
}
.left h3, .left ul, .left dl {
  padding-left: 10px;
}
.left ul, .left dl {
  padding: 10px;
  line-height: 20px;
}
.left .hot {
  color: #fff;
  background: red;
  padding: 0 2px;
}
.right {
  width: 960px;
  /*height: 100px;*/
}
.right .slider {
  height: 340px;
  width: 100%;
  background: #fff;
}
.right .productList {
  margin-top: 15px;
}
.right .productList ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.right .productList li img {
  width: 100px;
  height: 100px;
  margin-left: 35px;
}
.right .productList li {
  background: #fff;
  margin-top: 15px;
  width: 49%;
  display: flex;
  padding: 15px 0;
}
.right .productList .text {
  margin-left: 40px;
  display: flex;
  flex-direction: column;
}
.right .productList .title {
  line-height: 40px;
  font-size: 16px;
  font-weight: 700;
}
.right .productList .description {
  line-height: 20px;
}
.right .productList .pay {
  display: inline-block;
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: #4a3;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  margin-top: 10px;
}
</style>
