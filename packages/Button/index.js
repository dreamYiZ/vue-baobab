// 导入组件，组件必须声明 name
import VBButton from './src'

// 为组件提供 install 安装方法，供按需引入
VBButton.install = function (Vue) {
  Vue.component(VBButton.name, VBButton)
}

// 导出组件
export default VBButton