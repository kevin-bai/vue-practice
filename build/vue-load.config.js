module.exports = (isDev)=>{
    return {
        preserveWhitespace:true, // 去除vue模板里html的空格
        // extractCSS:false,  // 把vue模板中的css，也打包到extract-text-webpack-plugin 生成的css文件里。默认false比较好
        cssModules:{
            localIdentName:isDev?'[path]-[name]-[hash:base64:5]':'[hash:base64:5]',
            camelCase:true // 把css中类名 header-wrapper 转换成headerWrapper
        }
    }
}