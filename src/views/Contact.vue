<template>
  <div class="font-pupylinux">
        <transition-group 
        appear 
        tag="ul"
        @before-enter="beforeEnter"
        @enter="enter"
        class="grid grid-cols-2 w-max mx-auto mt-10 gap-7">        
        <li v-for="(content , index) in contents" :key="content.id" :data-index="index" class="w-[40vw] md:w-[200px] list-none flex flex-col justify-center items-center shadow-md p-5 border rounded-lg">
          <img :src="content.img" alt="">
          <p class="mt-5">{{ content.title }}</p>
        </li>
        </transition-group>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  setup(props) {
    const contents = [
      {
        id: 1,
        img: '/asset/icon-pp.webp',
        title: 'ketika anjime bilek'
      },
      {
        id: 2,
        img: '/asset/icon-square.webp',
        title: 'Afakah Rill'
      },
      {
        id: 3,
        img : '/asset/icon-write.webp',
        title: 'RIlll Aseli'
      },
      {
        id: 4,
        img: '/asset/icon-square.webp',
        title: 'Kok Samaa'
      }
    ]

    const beforeEnter = (el) => {
      el.style.opacity = 0,
      el.style.transform = 'translateY(100px)'
    }
    const enter = (el , end) => {
      gsap.to(el , {
        opacity : 1,
        y: 0,
        duration: 0.8,
        onComplete: end,
        delay: el.dataset.index * 0.2
      })
    } 

    return { contents , beforeEnter , enter}
  }
}
</script>