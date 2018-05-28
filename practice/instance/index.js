import Vue from 'vue'

const app = new Vue({
    // el: '#root',
    template: '<div>this is {{text}}</div>>',
    data: {
        text: 0
    }
})

app.$mount('#root')

setInterval(() => {
    app.text += 1
    // 这个和上面是一样的，实际上app.text 就是被代理到app.$data上
    // app.$data.text +=1
    // 这个不行和上面的其实不是一个对象
    // app.$options.data.text += 1
}, 1000)

// vue instance上所有的属性
console.log(app.$data)
console.log(app.$props)
console.log(app.$el)
// 上面创建vue实例 传进去的整个{xxx}+默认值 合并， 是app.$options
console.log(app.$options)
// 当页面触发重新render的时候，这个render的函数会执行
// app.$options.render = (h) => {
//     return h('div', {}, 'new render function')
// }
// app.$root是vue最外层挂载的节点对象
console.log(app.$root === app)
console.log(app.$children)
// 插槽的实例对象
console.log(app.$slots)
console.log(app.$scopedSlots)
// 如果普通的html节点返回html节点，如果是vue组件，就返回组件的vue实例
console.log(app.$refs)
// 服务端渲染会用到，判断是否是server
console.log(app.$isServer)

// 实例方法
const unWatch = app.$watch('text', (newValue, oldValue) => {
    console.log(`${newValue}|${oldValue}`)
})
// 销毁watch的方法
// unWatch()
