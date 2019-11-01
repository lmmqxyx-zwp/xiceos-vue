// 后处理css代码
// 当stylus编译为css代码之后
const autoprefixer = require("autoprefixer");

module.exports = {
    plugins: [
        autoprefixer()
    ]
}
