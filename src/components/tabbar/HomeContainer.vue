<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <h2>Home</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        getLunboTu() {
            console.log(` ------------------------${123}---------------------------- `)
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result => {
                console.log(result)
                
            })
        }
    },
    created() {
        this.getLunboTu()
    }
}
</script>


<style lang="scss" scoped>
.mint-swipe {
    height: 200px;
    .mint-swipe-item {
        &:nth-child(1) {
            background-color: red;
        }
    }
}
</style>

