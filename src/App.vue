<template>
    <div class="container">
    	<app-header/>
    	<div class="row">
    		<div class="col-xs-12">
                <transition name="slide" mode="out-in">
    		          <router-view></router-view>
                </transition>
    		</div>
    	</div>
        <app-footer/>
    </div>
</template>

<script>
	import appHeader from './components/Header.vue'
    import appFooter from './components/Footer.vue'

    export default {
    	components: {
    		appHeader,
            appFooter
    	},
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
	body {
		padding: 30px;
	}

    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0px);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>