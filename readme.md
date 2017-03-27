# 基于html-minifier 的fis3模板压缩插件，用于压缩html文件(支持php原生模板tpl)

## 安装
````
npm install fis3-optimizer-minifier -g
````

## 使用
- 用于php原生模板，支持其它格式,smarty模板需要自定义ignoreCustomFragments的规则.
````
fis.match("*.tpl",{
	optimizer : fis.plugin("minifier")
})
````

## 默认配置信息
- removeComments 移除页面注释，默认为true
- collapseWhitespace 移除空格、回车、换行符等符号，默认为true
- minifyJS 压缩页面内嵌的js代码，默认为true
- preventAttributesEscaping  默认为true 防止转义属性.
- ignoreCustomFragments  默认为[/<\?[\s\S]*?\?>/] 允许忽略匹配的规则内容,可以自定义规则。

更多配置信息，请查看html-minifier的配置说明：  

[html-minifier](https://www.npmjs.com/package/html-minifier#options-quick-reference)

