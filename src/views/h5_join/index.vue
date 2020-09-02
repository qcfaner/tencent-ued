<template>
  <div>
    <el-button @click="ok = !ok">切换</el-button>
    <!-- enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOutDown"-->
    <transition
      enter-active-class="animated shakeX"
      leave-active-class="animated bounceOutRight"
      appear
    >
      <div v-show="ok">
        <div class="search">
          <el-input class="searchCon" v-model="search.key" placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div>
          <el-button type="primary" icon="el-icon-plus" @click="open()">添加人员</el-button>
          <el-button type="danger" icon="el-icon-delete">批量删除</el-button>
        </div>

        <!-- 组件：卡片 -->
        <!-- <zhanglei title="我是张蕾" @listen="listenFunc">
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </zhanglei>

      <zhanglei title="我也是张蕾">
        <div>嘻嘻嘻</div>
        <div>嘻嘻嘻</div>
        <div>嘻嘻嘻</div>
        <div>嘻嘻嘻</div>
        </zhanglei>-->

        <el-table v-loading="loading" :data="personList" class="commodity" border fit stripe>
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="nickname" label="人员姓名" align="center"></el-table-column>
          <el-table-column prop="phoneNumber" label="手机号码" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="{row}">
              <el-button size="mini" @click="handleEdit(row);">编辑</el-button>
              <el-button size="mini" type="danger" @click="delPersion(row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="paging.currentPage"
          :page-sizes="[5, 10, 20, 30, 40,50,100]"
          :page-size="paging.pageSize"
          layout="total,sizes, prev, pager, next"
          :total="paging.total"
          style="margin-top:10px;"
        ></el-pagination>

        <!-- 新增编辑弹窗 -->
        <el-dialog title="商品信息" :visible.sync="dialogVisible" width="60%">
          <el-form :model="commodity" label-width="80px">
            <el-form-item label="商品名称">
              <el-input class="inputBox" v-model="commodity.name"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="close()">取 消</el-button>
            <el-button type="primary" @click="close()">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </transition>
  </div>
</template>
<script>
// import zhanglei from "./test.js";
import bus from "./eventBus.js";

export default {
  // components: { zhanglei },
  data() {
    return {
      ok: false,
      // 搜索框
      search: {
        key: "",
        currentPage: 1,
        pageSize: 10, // 默认每页 10 条数据
      },
      loading: false,
      // 展示分页信息
      paging: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
      },
      // 数据展示区
      personList: [],
      dialogVisible: false,
      // 商品名称
      commodity: {
        name: "",
      },
    };
  },
  methods: {
    listenFunc() {
      alert(123);
    },
    // 获取人员列表
    getPersionList() {
      this.loading = true;
      this.$axios
        .get("api/test/user/users", {
          params: this.search,
        })
        .then((res) => {
          this.loading = false;
          this.personList = res.data.data;
          this.paging = res.data.paging;
        });
    },

    handleEdit(row) {
      console.log(row);
      this.open();
    },
    delPersion(row) {
      this.$confirm("请确认是否删除", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$axios
          .post("api/test/user/delete", { phoneNumber: row.phoneNumber })
          .then((res) => {
            this.getPersionList();
            console.log(res);
          });
      });
    },
    // 查询接口
    dataArea() {
      // search(this.search).then((res) => {
      //   this.search.key = res.data;
      //   // 填充分页信息;
      //   this.$set(this.paging, "currentPage", "接口返回的数据");
      //   this.$set(this.paging, "pageSize", "接口返回的数据");
      //   this.$set(this.paging, "total", "接口返回的数据");
      // });
    },
    //新增/编辑保存接口
    save() {
      // 接口封装的方法;
      // save().then((res) => {
      //   if (res && res.code == 1) {
      //     this.$message({
      //       message: "保存成功",
      //       type: "success",
      //     });
      //   }
      //   // 关闭窗口
      //   // 清空数据
      //   // 调取查询的接口
      //   else {
      //     this.$message({
      //       message: "保存失败",
      //       type: "warning",
      //     });
      //   }
      // });
    },
    open() {
      // this.dialogVisible = true;
      this.$axios
        .post("api/test/user/add", { phoneNumber: this.getMoble() })
        .then((res) => {
          this.getPersionList();
          console.log(res);
        });
    },
    close() {
      this.dialogVisible = false;
    },
    // 分页改变事件
    handleSizeChange(val) {
      this.$set(this.search, "pageSize", val);
      this.$set(this.search, "currentPage", 1);
      this.getPersionList();
    },
    // 分页改变事件
    handleCurrentChange(val) {
      this.$set(this.search, "currentPage", val);
      this.getPersionList();
    },
    // 删除接口
    delete() {
      // 弹出提示框，是否确认删除
      // 点击确认删除再去调删除的方法
      //
    },

    /**
     * 深度拷贝
     * @method deepCopy
     * @param {Array | Object} origin 原始数据
     * @return 拷贝后的新值
     * @example this.deepCopy([1, {name: 'zhangsan'}])
     */
    deepCopy(origin) {
      let target = Array.isArray(origin) ? [] : {};
      for (const i in origin) {
        if (typeof origin[i] === "object") {
          target[i] = this.deepCopy(origin[i]);
        } else {
          target[i] = origin[i];
        }
      }
      return target;
    },

    // 随机生成手机号码
    getMoble() {
      var prefixArray = new Array(
        "130",
        "131",
        "132",
        "133",
        "135",
        "137",
        "138",
        "170",
        "187",
        "189"
      );
      var i = parseInt(10 * Math.random());
      var prefix = prefixArray[i];
      for (var j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
      }
      return prefix;
    },
  },

  created() {
    bus.msg = "xxxxxxx";
    alert(bus.msg);
    this.getPersionList();

    setTimeout(() => {
      this.ok = true;
    }, 300);
  },
};
</script>
<style lang='less' scoped>
.search {
  margin-bottom: 10px;
  .searchCon {
    width: 20%;
  }
}
.commodity {
  margin-top: 20px;
}
.inputBox {
  width: 40%;
}
.dialog-footer {
  text-align: center;
}
</style>