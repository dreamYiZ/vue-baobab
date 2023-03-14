// 导入组件，组件必须声明 name
import VBChooseOne from './src'

// 为组件提供 install 安装方法，供按需引入
VBChooseOne.install = function (Vue) {
  Vue.component(VBChooseOne.name, VBChooseOne)
}

// 导出组件
export default VBChooseOne