<template>
  <el-container style="height: 100vh">
    <el-aside style="background-color: rgb(238, 241, 246)">
      <h5 class="name-project">Chức năng</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-openeds="['1', '2', '4']"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-thumb"></i>
            <span>Test</span>
          </template>
          <router-link to="/test/j48">
            <el-menu-item index="1-1">Cây quyết định (J48)</el-menu-item>
          </router-link>

          <router-link to="/test/mlp">
            <el-menu-item index="1-2">MLP</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-chat-line-square"></i>
            <span>Huấn luyện</span>
          </template>

          <router-link to="/train/j48">
            <el-menu-item index="2-1"> Cây quyết định (J48) </el-menu-item>
          </router-link>
          <router-link to="/train/mlp">
            <el-menu-item index="2-2">MLP</el-menu-item>
          </router-link>
        </el-submenu>
        <router-link to="/computer">
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>Máy tính</span>
            </template>
          </el-submenu>
        </router-link>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span>Dữ liệu</span>
          </template>
          <router-link to="/brand">
            <el-menu-item index="4-1">Hãng</el-menu-item>
          </router-link>
          <router-link to="/cpu">
            <el-menu-item index="4-2">CPU</el-menu-item>
          </router-link>
          <router-link to="/data">
            <el-menu-item index="4-3">GPU</el-menu-item>
          </router-link>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <p><b>Đề tài:</b> Tư vấn chọn máy tính</p>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.name-project {
  padding: 20px;
  text-align: center;
  font-size: 20px;
}
</style>
