<template>
    <section class="pt-120 pb-120 br-bottom-n3">
        <div class="container">
            <div data-aos="zoom-in-up" class="section-heading">
                <div class="d-flex align-items-center gap-2">
                    <div class="title-line"></div>
                    <h2 class="display-four n5-color fw-semibold">Testimonials</h2>
                </div>
                <p class="fs-seven n4-color mt-2 mt-md-4">
                    Here's a brief look at what some of my clients have to say about my work.
                </p>
            </div>
            <div class="mt-8 mt-md-15 overflow-x-hidden">
                <div class="swiper testimonial_slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="slide-card px-3 px-md-6 py-5 py-md-10 bgn2-color box-shadow1 br-left-p1">
                                <div class="d-flex gap-1 mb-2 mb-md-3">
                                    <i class="ph-fill ph-star y1-color fs-six"></i>
                                    <i class="ph-fill ph-star y1-color fs-six"></i>
                                    <i class="ph-fill ph-star y1-color fs-six"></i>
                                    <i class="ph-fill ph-star y1-color fs-six"></i>
                                    <i class="ph-fill ph-star y1-color fs-six"></i>
                                </div>
                                <p class="n4-color fs-six">
                                    “James has been instrumental in developing efficient, scalable APIs for my projects.
                                    His expertise in backend development and attention to detail has made a significant
                                    impact on our operations.”
                                </p>
                                <div class="d-flex gap-3 align-items-center mt-4 mt-md-7">
                                    <img src="assets/images/user.jpg" alt="testimonial" class="testimonial_img" />
                                    <div>
                                        <span class="fs-eight d-block n5-color">James Daniel</span>
                                        <span class="fs-nine d-block n5-color">Lagos, Nigeria</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative mt-15">
                        <div class="swiper-pagination d-flex align-items-center justify-content-center gap-2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "TestimonySection"
}
</script>