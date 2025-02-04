<template>
    <PreLoader />
    <!-- banner section start  -->
    <BannerSection />
    <SectionSection />
    <ProjectSection />
    <TestimonySection />
</template>

<script>
import BannerSection from '@/components/about/BannerSection.vue';
import ProjectSection from '@/components/about/ProjectSection.vue';
import SectionSection from '@/components/about/SectionSection.vue';
import TestimonySection from '@/components/about/TestimonySection.vue';
import PreLoader from '@/components/PreLoader.vue';

export default {
    name: "AboutPage",
    components: {
        BannerSection,
        SectionSection,
        ProjectSection,
        TestimonySection,
        PreLoader
    },
    
}
</script>