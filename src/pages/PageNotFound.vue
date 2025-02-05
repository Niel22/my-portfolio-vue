<template>
    <section class="pt-120 pb-120 mt-10 mt-lg-0">
        <div class="pb-60 br-bottom-n3">
            <div data-aos="zoom-in" class="page-heading">
                <h3 class="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">
                    Page Not Found
                </h3>

                <RouterLink :to="{name: 'index'}"
                    class="w-max primary-btn bg1-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto">
                    <i class="ph ph-file-pdf"></i>Back To Home
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "PageNotFound"
}
</script>