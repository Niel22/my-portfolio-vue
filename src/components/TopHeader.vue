<template>
    <div class="w-100 bgn1-color p-3 position-fixed z-3 top-0 d-lg-none d-flex align-items-center justify-content-between br-bottom-n5 box-shadow1"
        id="top_header"><a href="/" class="side-icon p1-color bgn2-color brn4">
            <i class="ph ph-seal-check"></i>
        </a>

        <div class="d-flex gap-3 align-items-center">
            <button class="side-icon bg1-color mood_toggle">
                <i class="mood_icon ph-fill fs-six n11-color ph-sun"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopHeader"
}
</script>