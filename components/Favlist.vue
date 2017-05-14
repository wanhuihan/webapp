

<template>

	<div class="">



		<div class="row">

			<div class="col col-50">
				hello world
			</div>

			<div class="col col-50">
				hello Jack
			</div>

			<!-- -->
			<test></test>
		</div>
	</div>

</template>


<script>

var test = require('./userCenter/login')
	// export default {
	//
	// 	data() {
	//
	// 		return {
	//
	// 			msg: 'hello world'
	// 		}
	// 	}
	// }

	module.exports = {

		components: {
			'test':test
		}

	}
</script>

<!--
<style media="screen">
	html {
		background: red;
	}
</style> -->
