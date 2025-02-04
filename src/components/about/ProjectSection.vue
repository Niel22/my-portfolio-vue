<template>
    <section class="next-project pt-120 pb-120">
        <div class="container d-flex gap-3 gap-md-6 flex-wrap justify-content-between align-items-center">
            <div data-aos="zoom-in-left" class="next-project-content">
                <h3 class="display-four n11-color fw-semibold mb-2 mb-md-4">
                    Let’s Work Together on Your Next Project
                </h3>
                <p class="fs-seven n11-color">
                    I am available for freelance projects. Hire me and get your
                    project done.
                </p>
            </div>
            <router-link data-aos="zoom-in-right" :to="{name: 'contact'}"
                class="primary-btn fw-medium px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2">
                <i class="ph ph-arrow-right"></i> Let’s Get in Touch
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: "PRojectSection"
}
</script>