<template>
<div class="w-[300px] h-[180px] bg-green-500 rounded-xl font-pupylinux text-lg absolute left-0 right-0 -top-24 bottom-0 m-auto">
    <div class="w-[300px] h-[180px] flex relative justify-center items-center">
    <p>Halo Perkenalkan Gweh Bilek</p>
    <p class="absolute -top-4 -right-4 py-3 px-5 rounded-full bg-blue-400" @click="tutup">x</p>
    </div>
</div>
</template>

<script>
export default {
    props : ['alert'],
    setup(props, {emit}) {
        const tutup = () => {
            emit('closeAlert')
        }

        return { tutup }
    }
}
</script>
