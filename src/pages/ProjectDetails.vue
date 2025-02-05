<template>
    <section v-if="project" class="pt-120 pb-120 mt-10 mt-lg-0">
        <div class="pb-60">
            <div data-aos="zoom-in" class="page-heading aos-init aos-animate">
                <h3 class="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">
                    Project Title: {{ project.name }}
                </h3>
                <p class="fs-seven n5-color mb-4 mb-md-8 text-center">
                    {{ project.intro }}
                </p>
                <router-link :to="{name: 'contact'}"
                    class="w-max primary-btn fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto">
                    <i class="ph ph-paper-plane-tilt"></i>Hire Me
                    <span class="primary-btnSpan" style="top: 51.375px; left: 53.4688px;"></span></router-link>
            </div>
        </div>
        <div class="container mt-8 mt-md-15 pb-60">
            <div class="row g-6">
                <div data-aos="fade-left" class="col-12 col-xl-3 aos-init aos-animate">
                    <div class="d-flex flex-column gap-5 position-sticky top-5 brn4 p-3 rounded">
                        <div>
                            <span class="n4-color fs-eight fw-medium d-block">Client:</span>
                            <span class="n5-color fs-six fw-medium">{{ project.client }}</span>
                        </div>
                        <div>
                            <span class="n4-color fs-eight fw-medium d-block">Services</span>
                            <span class="n5-color fs-six fw-medium">{{ project.service }}</span>
                        </div>
                        <div>
                            <span class="n4-color fs-eight fw-medium d-block">Technologies</span>
                            <span class="n5-color fs-six fw-medium" v-for="tech in project.tech" :key="tech">| {{ tech }} |</span>
                        </div>
                        <div>
                            <span class="n4-color fs-eight fw-medium d-block">Preview</span>
                            <a :href="project.live_link"
                                class="n5-color fs-six fw-medium d-flex align-items-center gap-2">Live
                                preview <i class="ph-bold ph-arrow-right"></i></a>
                        </div>
                        <div>
                            <span class="n4-color fs-eight fw-medium d-block">Github Link</span>
                            <a :href="project.github_link" target="_blank"
                                class="n5-color fs-six fw-medium d-flex align-items-center gap-2">Source Code <i
                                    class="ph-bold ph-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-right" class="col-12 col-xl-9 aos-init aos-animate">
                    <div class="project-details-content d-flex flex-column gap-8 gap-md-15">
                        <div class="overflow-hidden">
                            <img :src="project.image[1].src" :alt="project.name"
                                class="w-100 portfolio-details-img">
                        </div>
                        <div data-aos="fade-up" class="aos-init aos-animate">
                            <h3 class="fs-five n5-color fw-semibold mt-5 mt-md-10 mb-2 mb-md-4">
                                Project Features
                            </h3>
                            <ul>
                                <li v-for="feature in project.features" :key="feature" class="n4-color fs-seven mb-2 mb-md-3">
                                    {{ feature }}
                                </li>
                            </ul>

                        </div>
                        <div data-aos="fade-up" class="aos-init aos-animate">
                            <h2 class="fs-one fw-semibold n5-color mb-2 mb-md-4">
                                Project Overview
                            </h2>
                            <p class="text-seven n4-color">
                                {{ project.overview }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <!-- next project section start -->
        <ProjectSection />
        <!-- next project section end -->
    </section>
    <PageNotFound v-else />
</template>

<script>
import { mapState } from 'vuex'
import ProjectSection from '../components/about/ProjectSection.vue';
import PageNotFound from '../pages/PageNotFound.vue';

export default {
    name: "ProjectDetails",
    components: {
        ProjectSection,
        PageNotFound
    },
    created(){
        this.$store.dispatch('portfolio/getProject', this.$route.params.slug)
        const name = this.project?.name ?? 'Page Not Found';
        document.title = `NIEL || ${name}`;
    },
    computed: {
        ...mapState('portfolio', ['project'])
    },
}
</script>