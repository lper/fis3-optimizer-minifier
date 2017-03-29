/**
 * 基于html-minifier 的html 文件压缩插件
 * 接受 html-minifier 的所有参数
 * 详见：https://www.npmjs.com/package/html-minifier
 *
 * @author : lper<lper@foxmail.com>
 * @date   : 2017-03-27
 * @return {[string]}       压缩后的文件内容
 */
var extend = require('node.extend');
var minify = require('./lib/htmlminifier').minify;

module.exports = function(content, file, conf) {
    conf = extend(this.defaultOptions, conf);
    return minify(content, conf);
}
//默认配置
module.exports.defaultOptions = {
    removeComments: true,
    collapseWhitespace:true,
    minifyJS:true,
    minifyCSS:true,
    isQuoteCharacter:true,
    attrMinfiyJs:false, //不压缩元素上绑定的js
    ignoreCustomFragments:[/<\?[\s\S]*?\?>/]
};