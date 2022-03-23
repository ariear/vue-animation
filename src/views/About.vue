<template>
  <div class="mx-auto font-pupylinux flex flex-col items-center">
    <transition name="alert">
    <Alert @closeAlert="closeAlert" v-if="alert" />
    </transition>
    <transition
     appear 
     name="fade"
     @before-enter="beforeEnter"
     @enter="enter"
     @after-enter="afterEnter"
     @before-leave="beforeLeave"
     @leave="leave"
     @after-leave="afterLeave">
    <p v-if="showTitle" class="font-medium text-center text-2xl mt-10">Halo Ini Studi Kasus Animate Vue</p>
    </transition>
    
    <button class="py-3 px-8 rounded-lg bg-blue-600 text-white mt-6" @click="alert = true">Alert !</button>

    <transition
     name="usegsap" 
     appear
     @before-enter="useGsapBeforeEnter"
     @enter="useGsapEnter">
    <p class="mt-8 text-xl">Ini Memakai Gsapp !!</p>
    </transition>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import Alert from "../components/Alert.vue";
import gsap from 'gsap'
export default {
    components: { Alert },
    setup(props) {
      const alert = ref(false)
      const showTitle = ref(true)

      const closeAlert = () => {
        alert.value = false
      }

      const beforeEnter = () => {
        console.log('Before Enter');
      }
      const enter = (ey) => {
        console.log('Enter');
        ey.classList.add('text-blue-400')
      }
      const afterEnter = (ey) => {
        ey.classList.add('text-yellow-400')
        console.log('after Enter');
        setTimeout(() => showTitle.value = false , 2000);
      }
      const beforeLeave = (ey) => {
        ey.classList.add('text-green-400')
        console.log('Before Leave');
      }
      const leave = () => {
        console.log('Leave');
      }
      const afterLeave = () => {
        console.log('After Leave');
      }

      // using gsap
      const useGsapBeforeEnter = (el) => {
          el.style.transform = 'translateY(60px)'
          el.style.opacity = 0
      }
      const useGsapEnter = (el , done) => {
        gsap.to(el, {
          duration: 1,
          y: 0,
          opacity: 1,
          onComplete: done
        })
      }

      return { alert , closeAlert , showTitle , beforeEnter , enter , afterEnter , beforeLeave , leave , afterLeave , useGsapBeforeEnter , useGsapEnter }
    }
}
</script>

<style>

.fade-enter-from {
    opacity: 0;
}
/* .fade-enter-to {
    opacity: 1;
} */
.fade-enter-active{
    transition: all .7s ease;
}
/* .fade-leave-from {
    opacity: 1;
} */
.fade-leave-to {
    opacity: 0;
}
.fade-leave-active {
    transition: all 0.8s ease;
}


.alert-enter-from {
  opacity: 0;
  transform: scale(0.4)
}
.alert-enter-to{
  opacity: 1;
  transform: scale(1)
}
.alert-enter-active{
  transition: all .2s ease;
}

.alert-leave-from {
  opacity: 1;
  transform: scale(1)
}
.alert-leave-to{
  opacity: 0;
  transform: scale(0.1)
}
.alert-leave-active{
  transition: all .2s ease;
}
</style>