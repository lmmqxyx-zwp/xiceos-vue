<template>
    <header class="main-header">
        <h1>JTodo</h1>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="css" scoped>
    .main-header {
        text-align: center;
    }
    h1 {
        color: rgba(175, 47, 47, 0.4);
        font-weight: 100;
        margin: 20px;
        font-size: 100px;
    }
</style>

<!-- stylus 写法 -->
<!-- 注意的是在class中可以嵌套样式h1的样式 -->
<!-- 和HTML的层级一致 -->
<!--<style lang="stylus" scoped>-->
<!--    .main-header{-->
<!--        text-align center-->
<!--        h1{-->
<!--            font-size 100px-->
<!--            color: rgba(175, 47, 47, 0.4)-->
<!--            font-weight 100-->
<!--            margin 20px-->
<!--        }-->
<!--    }-->
<!--</style>-->
