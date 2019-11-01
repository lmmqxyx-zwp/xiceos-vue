<template>
    <div class="helper">
        <!-- 计算得到的 未完成 的待办事项 -->
        <span class="left">{{ filterTodoLength }} items left</span>
        <span class="tabs">
            <span
                    v-for="state in states"
                    :key="state"
                    :class="[state, filter === state ? 'actived' : '']"
                    @click="toggleFilter(state)"
            >
                <!-- 待办事项的状态 -->
                {{ state }}
            </span>
        </span>
        <span class="clear" @click="clearAllCompleted">Clear Completed</span>
    </div>
</template>

<script>
    export default {
        name: "Tabs",
        props: {
            // 父组件穿点属性到子组件
            filter: {
                type: String,
                require: true
            },
            // 用来计算点击不同的过滤状态来显示不同计数总数
            todos: {
                type: Array,
                require: true
            }
        },
        computed: {
            filterTodoLength() {
                // 所有
                if (this.filter === 'all') {
                    return this.todos.length;
                }

                // 未完成
                if (this.filter === 'active') {
                    return this.todos.filter(todo => !todo.completed).length;
                }

                // 完成
                if (this.filter === 'completed') {
                    return this.todos.filter(todo => todo.completed).length;
                }
            }
        },
        methods: {
            toggleFilter(state) {
                // 点击tabs中的按钮是触发该事件
                // 获取过滤后的todos列表
                // 属于子组件向父组件传递消息
                // 使用 $emit + 参数
                // 注意 toggle 为 父组件中使用子组件 Tabs.vue 时在 @toggle 中的 toggle
                // 即，@toggle => toggle
                this.$emit('toggle', state);
            },
            clearAllCompleted() {
                // 需要修改父组件中的todos中的已经完成的代办
                // 把完成的代办 clear
                this.$emit('clearAllCompleted');
            }
        },
        data() {
            return {
                states: ['all', 'active', 'completed']
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .helper{
        font-weight 100
        display flex
        justify-content space-between
        padding 5px 0
        line-height 30px
        background-color #fff
        font-size 14px
        font-smoothing: antialiased
    }
    .left, .clear, .tabs{
        padding 0 10px
        box-sizing border-box
    }
    .left, .clear{
        width 150px
    }
    .left{
        text-align left
    }
    .clear{
        text-align right
        cursor pointer
    }
    .tabs{
        width 200px
        display flex
        justify-content space-around
        * {
            display inline-block
            padding 0 10px
            cursor pointer
            border 1px solid rgba(175,47,47,0)
            &.actived{
                border-color rgba(175,47,47,0.4)
                border-radius 5px
            }
        }
    }
</style>
