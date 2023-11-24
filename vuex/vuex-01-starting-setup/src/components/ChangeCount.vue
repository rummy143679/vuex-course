<template>
    <button @click="increase">Inc</button>
</template>
<script>
export default {
    methods:{
        increase(){
            // this.$store.commit({
            //     type:'addSome',
            //     value:10
            // })
            this.$store.dispatch({
                type:'addSome',
                value:10
            })
        }
    },
}
</script>