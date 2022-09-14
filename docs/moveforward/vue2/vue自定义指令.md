#### vue 的自定义指令

> 栗子：vue 通过自定义指令来实现懒加载

```js
<div id="app2" class="demo">
    <div v-for="item in imageList">
        <img src="../assets/image/bg.png" alt="默认图" v-image="item.url">
    </div>
</div>
<script>
    Vue.directive("image", {
        inserted: function(el, binding) {
            //为了真实体现效果，用了延时操作
            setTimeout(function(){
                el.setAttribute("src", binding.value);
            }, Math.random() * 1200)
        }
    })
    new Vue({
        el: "#app2",
        data: {
            imageList: [
                {
                    url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-p10-plus.jpg"
                },
                {
                    url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-watch2-pro-banner.jpg"
                },
                {
                    url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/homepage/section4/home-s4-matebook-x.jpg"
                }
            ]
        }
    })
</script>

```