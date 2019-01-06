<template>
    <div>

        <div class="gallery">
            <!-- swiper1 -->
            <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
                <swiper-slide class="slide-5"></swiper-slide>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </swiper>
            <!-- swiper2 Thumbs -->
            <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
                <swiper-slide class="slide-5"></swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOptionTop: {
                    spaceBetween: 10,
                    loop: true,
                    loopedSlides: 5, //looped slides should be the same
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                swiperOptionThumbs: {
                    spaceBetween: 10,
                    slidesPerView: 4,
                    touchRatio: 0.2,
                    loop: true,
                    loopedSlides: 5, //looped slides should be the same
                    slideToClickedSlide: true,
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.swiper
                const swiperThumbs = this.$refs.swiperThumbs.swiper
                swiperTop.controller.control = swiperThumbs
                swiperThumbs.controller.control = swiperTop
            })
        }
    }
</script>

<style lang="scss" scoped>
    .swiper-container {
        background-color: #000;
    }
    .swiper-slide {
        background-size: cover;
        background-position: center;
        &.slide-1 {
            background-image:url('https://a0.muscache.com/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg?aki_policy=xx_large');
        }
        &.slide-2 {
            background-image:url('https://a0.muscache.com/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg?aki_policy=xx_large');
        }
        &.slide-3 {
            background-image:url('https://a0.muscache.com/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg?aki_policy=xx_large');
        }
        &.slide-4 {
            background-image:url('https://a0.muscache.com/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg?aki_policy=xx_large');
        }
        &.slide-5 {
            background-image:url('https://a0.muscache.com/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg?aki_policy=xx_large');
        }
    }
    .gallery{
        height: 500px;
    }
    .gallery-top {
        height: 80%!important;
        width: 100%;
    }
    .gallery-thumbs {
        height: 20%!important;
        box-sizing: border-box;
        padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-active {
        opacity: 1;
    }
</style>