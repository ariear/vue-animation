<template>
<transition name="warning">
<Toast v-if="bukaToast" />
</transition>
  <p class="text-center font-pupylinux font-medium text-2xl mt-10">Animate Vue</p>

<div class="flex justify-center mt-10">
  <input v-model="formtodo" type="text" class="w-[250px] p-2 font-pupylinux rounded-lg bg-slate-200" @keypress.enter="tambahTodo">
</div>

<div class="flex flex-col items-center">
    <transition name="fade">
        <p class="font-pupylinux text-lg text-center mt-3" v-if="showP">Hello Bilek</p>
    </transition>
<button @click="showP = !showP" class="py-2 px-4 bg-slate-500 rounded-lg text-white font-pupylinux mt-4">Toggle</button>
</div>

    <div class="mt-10 w-max mx-auto">
    <transition-group tag="ul" name="list" class="relative">    
    <li v-for="data  in todo"  :key="data.id" class="w-[300px] bg-gray-300 mb-3 p-3 font-pupylinux mx-auto rounded-lg" @click="deletetodo(data.id)" appear>
        {{ data.title }}
    </li>
    </transition-group>
    <p class="text-center font-pupylinux font-normal" v-if="!todo.length">Belum Ada Todo !</p>
    </div>

</template>

<script>
import { ref } from '@vue/reactivity';
import Toast from '../components/Toast.vue';
export default {
    setup() {
        const formtodo = ref("");
        const todo = ref([{
            id: 1 ,
            title: 'gweh bilek'
        }]);
        const bukaToast = ref(false)
        const showP = ref(true)

        const tambahTodo = () => {
            if (formtodo.value) {
                // todo.value.unshift({ title: formtodo.value });
                const id = Math.random()
                todo.value.unshift({id: id , title: formtodo.value})
                formtodo.value = "";
            }
            else {
                bukaToast.value =true
                setTimeout(() => {
                    bukaToast.value = false
                }, 1000);
            }
        };
        const deletetodo = (index) => {
            todo.value = todo.value.filter(tod => tod.id != index)
        };
        return { tambahTodo, todo, formtodo, deletetodo , bukaToast , showP};
    },
    components: { Toast }
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
    transition: all 2s ease;
}
/* .fade-leave-from {
    opacity: 1;
} */
.fade-leave-to {
    opacity: 0;
}
.fade-leave-active {
    transition: all 0.3s ease;
}

.warning-enter-from {
    opacity: 0;
    transform: translateY(-60px);
}
.warning-enter-to{
    opacity: 1;
    transform: translateY(0);
}
.warning-enter-active{
    transition: all .2s ease;
}
.warning-leave-from{
    opacity: 1;
    transform: translateY(1);
}
.warning-leave-to{
    opacity: 0;
    transform: translateY(-60px);
}
.warning-leave-active{
    transition: all .3s ease;
}


/* list animation */
.list-enter-from{
    opacity: 0;
    transform: scale(0.2);
}
.list-enter-to{
    opacity: 1;
    transform: scale(1);
}
.list-enter-active{
    transition: all .2s ease;
}

.list-leave-to{
    opacity: 0;
    transform: scale(0.6);
}
.list-leave-active{
    transition: all .2s ease; 
    position: absolute;   
}
.list-move{
    transition: all .4s ease;
}
</style>