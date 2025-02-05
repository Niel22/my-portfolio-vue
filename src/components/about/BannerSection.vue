<template>
    <section class="pt-120 pb-60 br-bottom-n3 overflow-hidden mt-10 mt-lg-0">
        <div class="container">
            <div class="d-flex flex-wrap gap-10 gap-md-15 align-items-center justify-content-between">
                <div class="banner-content">
                    <span class="n5-color fs-five">HI, I'M A</span>
                    <h2 class="typing-text display-one p1-color mt-2 mb-3"></h2>
                    <p class="fs-seven n5-color">
                        {{ about }}
                        Explore my
                        <router-link :to="{name: 'portfolio'}" class="p1-color">project portfolio</router-link>,
                        and <router-link :to="{name: 'resume'}" class="p1-color">online resume</router-link>.
                    </p>
                    <div class="d-flex flex-wrap align-itmes-center gap-3 gap-md-6 mt-4 mt-md-8">
                        <router-link :to="{name: 'portfolio'}"
                            class="primary-btn px-3 px-md-6 py-2 py-md-4 fw-medium rounded-pill d-flex align-items-center gap-2">
                            <i class="ph ph-arrow-right"></i>View Portfolio
                        </router-link>
                        <router-link :to="{name: 'resume'}"
                            class="primary-btn2 fw-medium px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2">
                            <img src="/assets/images/resume-icon.png" alt="icon" />View
                            Resume
                        </router-link>
                    </div>
                </div>

                <div class="position-relative profile-img">
                    <div class="user-bg"></div>
                    <div class="bg-white">
                        <img src="/assets/images/user.jpg" alt="user" class="user-img" />
                    </div>
                </div>
            </div>
            <!-- counter -->
            <div
                class="banner-counter d-flex flex-wrap flex-xl-nowrap align-items-center gap-3 gap-md-6 mt-10 mt-md-17">
                <div class="d-flex align-items-center gap-2 gap-xl-4">
                    <h2 class="display-two fw-semibold p1-color">
                        <span class="counter">1</span>+
                    </h2>
                    <div class="line"></div>
                    <span class="n5-color">Years of Experience</span>
                </div>
                <div class="d-flex align-items-center gap-2 gap-xl-4">
                    <h2 class="display-two fw-semibold p1-color">
                        <span class="counter">10</span>+
                    </h2>
                    <div class="line"></div>
                    <span class="n5-color">Projects Completed</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "BannerSection",
    data() {
        return {
            typeArray: ["Web Developer", "Backend Developer"],
            index: 0,
            isAdding: true,
            typeIndex: 0,
        };
    },
    computed: {
        ...mapState('aboutMe', ['about'])
    },
    mounted() {
        this.playAnim();
    },
    beforeUnmount() {
        clearInterval(this.typingInterval);
    },
    methods: {
        playAnim() {
            setTimeout(() => {
                const typingElement = document.querySelector(".typing-text");

                if (typingElement) {
                    typingElement.innerText = this.typeArray[this.typeIndex].slice(
                        0,
                        this.index
                    );

                    if (this.isAdding) {
                        if (this.index >= this.typeArray[this.typeIndex].length) {
                            this.isAdding = false;
                            setTimeout(() => this.playAnim(), 2000);
                            return;
                        } else {
                            this.index++;
                        }
                    } else {
                        if (this.index === 0) {
                            this.isAdding = true;
                            this.typeIndex++;
                            if (this.typeIndex >= this.typeArray.length) {
                                this.typeIndex = 0;
                            }
                        } else {
                            this.index--;
                        }
                    }

                    this.playAnim(); // Continue the animation
                }
            }, this.isAdding ? 200 : 100);
        }
    }

}
</script>

<style>
@keyframes blink {
  50% {
    border-right: 2px solid transparent;
  }
}
</style>