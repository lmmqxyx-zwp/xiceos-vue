<template>
    <section class="real-app">
        <input
                type="text"
                class="add-input"
                autofocus="autofocus"
                placeholder="接下来需要做什么？"
                @keyup.enter="addTodo"
        >
        <Item
                :todo="todo"
                v-for="todo in filteredTodos"
                :key="todo.id"
                @delete="deleteTodo"
        ></Item>
        <Tabs
                @toggle="toggleFilter"
                :filter="filter"
                :todos="todos"
                @clearAllCompleted="clearAllCompleted"
        ></Tabs>
    </section>
</template>

<script>
    import Item from "./Item.vue";
    import Tabs from "./Tabs.vue";

    // 用来标记item的主键
    let id = 0;

    export default {
        name: "Todo",
        components: {
            Tabs,
            Item
        },
        // 由于列表下面有多个按钮需要显示不同状态下面的代办事项
        // 此处使用计算属性
        computed: {
            filteredTodos() {
                // 如果点击了 `all` 则显示所有的item
                if (this.filter === 'all') {
                    return this.todos;
                }

                // 过滤获取完成的代办和未完成的代办
                const completed = this.filter === 'completed';

                return this.todos.filter(todo => completed === todo.completed);
            }
        },
        methods: {
            addTodo(e) {
                // 获取到输入的内容
                // 添加到数据的最前面
                // 使用unshift方法，注意查看JavaScript Array API
                // 刚添加的是未完成状态
                if (e.target.value) {
                    this.todos.unshift({
                        id: id ++,
                        content: e.target.value.trim(),
                        completed: false
                    });

                    console.table(this.todos);
                } else {
                    console.warn('WARN：', '输入的数据不能为空');
                }

                // 添加成功之后清空输入的原始数据
                e.target.value = '';
            },
            deleteTodo(id) {
                // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
                // findIndex 传入三个参数(本身, 数组元素的索引, 调用的数组)
                // findIndex 返回数组的下标
                this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
            },
            toggleFilter(state) {
                // 此处接收到子组件 Tabs.vue 中使用 $emit 传递出来的参数 state
                this.filter = state;
                // 此处内容的改变
                // 会触发计算属性中的内容的改变
            },
            clearAllCompleted() {
                // 新的列表为重新过滤后的列表
                this.todos = this.todos.filter(todo => !todo.completed);
            }
        },
        data() {
            return {
                todos: [],
                filter: 'all'
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .real-app{
        width 600px
        margin 0 auto
        box-shadow 0 0 5px #666
    }
    .add-input{
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        padding: 6px;
        border: 1px solid #999;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 60px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
    }
</style>
