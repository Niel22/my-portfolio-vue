<template>
    <section class="pt-120 pb-120 mt-10 mt-lg-0">
        <div class="pb-60 br-bottom-n3">
            <div data-aos="zoom-in" class="page-heading">
                <h3 class="page-title n5-color fs-one fw-semibold n5-color mb-2 mb-md-3 text-center">
                    A Glimpse of My Projects
                </h3>
                <p class="fs-seven n5-color mb-4 mb-md-8 text-center">
                    Over the years, I have honed my backend development skills, focusing on creating efficient and
                    scalable systems. Here’s some of my standout projects that highlights my expertise in Laravel and
                    backend development.
                </p>
                <router-link :to="{name: 'contact'}"
                    class="w-max primary-btn fw-medium px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto">
                    <i class="ph ph-paper-plane-tilt"></i>Hire Me
            </router-link>
            </div>
        </div>
        <div class="container mt-8 mt-md-15">
            <div>
                <div class="row g-6 g-md-8">
                    <div data-aos="fade-up" data-aos-duration="800" class="col-xl-6" v-for="project in projects" :key="project.name">
                        <div class="project-card">
                            <router-link :to="{name: 'project.details', params: { slug: project.slug}}" class="thumb d-block">
                                <div class="post-thumb" v-for="image in project.image" :key="image.alt">
                                    <div class="post-thumb-inner">
                                        <img :src="image.src" :alt="image.alt"
                                            class="w-100 p-2" />
                                    </div>
                                </div>
                            </router-link>
                            <div
                                class="d-flex justify-content-between gap-2 align-items-center pt-4 pt-md-8 px-3 px-md-6">
                                <div>
                                    <div class="d-flex gap-2 align-items-center">
                                        <p v-for="tech in project.tech" :key="tech" class="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium">
                                            {{ tech }}
                                        </p>
                                    </div>
                                    <router-link :to="{name: 'project.details', params: { slug: project.slug}}"
                                        class="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block">
                                        {{ project.name }}
                                    </router-link>
                                </div>
                                <router-link :to="{name: 'project.details', params: { slug: project.slug}}"
                                    class="project-link d-flex align-items-center justify-content-center flex-shrink-0">
                                    <i class="ph ph-eye n5-color"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "PortfolioPage",
    computed: {
        ...mapState('portfolio', ['projects'])
    }
}
</script>