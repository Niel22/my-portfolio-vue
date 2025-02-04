<template>
    <div class="side-menu" id="sidebar">
        <div class="sidebar-btn close-btn cursor-pointer d-block d-lg-none">
            <i class="ph ph-x fs-two p1-color"></i>
        </div>

        <div class="d-flex">
            <div class="side-menu-left">
                <div>
                    <div class="d-flex flex-column gap-8 justify-content-center align-items-center mt-6">
                        <router-link :to="{name: 'index'}" class="side-icon p1-color bgn2-color brn4">
                            <i class="ph ph-seal-check"></i>
                        </router-link>
                        <div class="d-flex flex-column align-items-center gap-1">
                            <span class="toggle_name fs-eleven n5-color">Light Mode</span>
                            <button class="side-icon bg1-color mood_toggle">
                                <i class="mood_icon ph-fill fs-six n11-color ph-sun"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="side-menu-right overflow-y-auto">
                <div class="d-flex flex-column gap-6 justify-content-between py-10 px-5 bgn2-color h-100">
                    <div class="">
                        <div class="sidebar-profile">
                            <div class="position-relative">
                                <div class="profile-img1 d-flex justify-content-center overflow-hidden">
                                    <img src="/assets/images/profile.jpg" alt="user" class="">
                                </div>
                                <span class="thumb">👋</span>
                            </div>

                            <h4 class="n5-color fw-semibold fs-five mt-2 text-center">
                                James Daniel
                            </h4>
                            <span class="n5-color fs-nine d-block text-center">Junior Backend Developer</span>
                            <div class="d-flex justify-content-center gap-2 align-items-center mt-4">
                                <!-- <a href="javascript:void(0)" class="social-icon p1-color">
                                        <i class="ph ph-facebook-logo"></i>
                                    </a> -->
                                <a href="https://www.github.com/niel22" target="_blank" class="social-icon p1-color">
                                    <i class="ph ph-github-logo"></i>
                                </a>
                                <a href="https://x.com/codeNovaNiel" target="_blank" class="social-icon p1-color">
                                    <i class="ph ph-x-logo"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/novaniel" target="_blank"
                                    class="social-icon p1-color">
                                    <i class="ph ph-linkedin-logo"></i>
                                </a>
                            </div>
                        </div>
                        <div class="line-divider my-4 my-md-8"></div>

                        <div class="menu-list">
                            <ul class="d-flex flex-column gap-3">
                                <li class="rounded-3">
                                    <router-link :to="{name: 'index'}" class="d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2"><i
                                            class="ph ph-user fs-six"></i> About Me</router-link>
                                </li>

                                <li class="rounded-3">
                                    <router-link :to="{name: 'resume'}"
                                        class="d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2"><i
                                            class="ph ph-notebook fs-six"></i> Resume</router-link>
                                </li>
                                <li class="rounded-3">
                                    <router-link :to="{name: 'portfolio'}" class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2">
                                            <i class="ph ph-code-block fs-six"></i> Portfolio
                                        </div>
                                    </router-link>
                                </li>
                                <li class="rounded-3">
                                    <router-link :to="{name: 'contact'}"
                                        class="d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2"><i
                                            class="ph ph-envelope fs-six"></i>Contact</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <router-link :to="{name: 'contact'}"
                        class="primary-btn fw-medium px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto">
                        <i class="ph ph-paper-plane-tilt"></i>Hire Me
                        <span class="primary-btnSpan"></span></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppSidebar"
}
</script>