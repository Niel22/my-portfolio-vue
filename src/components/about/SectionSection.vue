<template>
    <section class="pt-120 pb-120">
        <div class="container">
            <div class="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end pb-60">
                <div data-aos="zoom-in-left" class="section-heading">
                    <div class="d-flex align-items-center gap-2">
                        <div class="title-line"></div>
                        <h2 class="display-four n5-color fw-semibold">What I Do</h2>
                    </div>
                    <p class="fs-seven n4-color mt-2 mt-md-4 ">
                         {{ whatIDo }} Check out my
                        <router-link :to="{name: 'resume'}" class="p1-color">online resume</router-link> and
                        <router-link :to="{name: 'portfolio'}" class="p1-color">project portfolio</router-link>.
                    </p>

                </div>
            </div>

            <div class="row g-3 g-md-6">
                <div data-aos="fade-up" data-aos-duration="500" class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3" v-for="technology in technologies" :key="technology.name">
                    <div class="service-card px-4 px-lg-8 py-5 py-lg-10">
                        <img :src="technology.img"
                            width="40" height="40" :alt="technology.name" class="service-icon" />
                        <h4 class="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
                            {{ technology.name }}
                        </h4>
                        <p class="fs-seven n4-color">
                            {{ technology.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "SectionSection",
    computed: {
        ...mapState('aboutMe', ['whatIDo', 'technologies'])
    }
}
</script>