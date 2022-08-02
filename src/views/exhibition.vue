<template>
  <div>
    <h1>展览测试页</h1>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide> <img src="@/assets/img/1.jpeg"> </swiper-slide>
      <swiper-slide> <img src="@/assets/img/2.gif"> </swiper-slide>
      <swiper-slide> <img src="@/assets/img/3.gif"> </swiper-slide>
      <swiper-slide> <img src="@/assets/img/4.gif"> </swiper-slide>
      <swiper-slide> <img src="@/assets/img/5.jpg"> </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { laraecho } from '@/utils/laravel-echo'
import 'swiper/css/swiper.css'

export default {
  name: 'Exhibition',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        direction: 'horizontal',
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  created() {
    laraecho.channel('all-device')
      .listen('AllDeviceEvent',(data) => {     
        this.swiperHandleInstruction(data)
      })
    laraecho.private('device.1')
      .listen('AuthDeviceEvent',(data) => {     
        this.swiperHandleInstruction(data)
      })
  },
  methods: {
    swiperHandleInstruction(instruction) {
      if(instruction.action_type == 'move'){
        switch (instruction.action) {
          case 'prev':
            this.swiper.slidePrev()
            break;
          case 'next':
            this.swiper.slideNext()
            break;
        }
      }
    }
  }
}
</script>

<style lang="scss">

#swiper {
  width:800px;
  height:600px;
}

</style>