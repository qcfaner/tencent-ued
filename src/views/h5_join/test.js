export default {
  // 通过配置functional属性指定组件为函数式组件
  functional: true,
  // 组件接收的外部属性
  props: {
    title: {
      type: String
    }
  },
  /**
   * 渲染函数 JXS
   * @param {*} h
   * @param {*} context 函数式组件没有 this, props, slots等都在context上面挂着
   */
  render(h, context) {
    let { props } = context;
    console.log(context);

    let part1 = <div>part1 的内容</div>;
    let part2 = <div>part2 的内容</div>;
    let part3 = <div>part3 的内容</div>;

    return <div style="border: 1px solid red;margin-top: 10px;">
      {/* 标题 */}
      <p>标题：{props.title}</p>

      {/* 主体内容展示区域 */}
      {context.children}

      {/* 按钮区域 */}
      <div>
        <el-button type="primary">确定</el-button>
        <el-button>取消</el-button>
        {part1}
        {part2}
        {part3}
      </div>
    </div>
  }
}
