<template>
  <div class="d-flex gap-6">

    <AppSidebar />
    <div class="main-content w-100">
      <TopHeader />
      <BottomHeader />

      <router-view></router-view>

      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppSidebar from './components/AppSidebar.vue';
import AppFooter from './components/AppFooter.vue';
import BottomHeader from './components/BottomHeader.vue';
import TopHeader from './components/TopHeader.vue';


export default {
  name: 'App',
  components: {
    AppSidebar,
    AppFooter,
    BottomHeader,
    TopHeader
  },
  
}
</script>
