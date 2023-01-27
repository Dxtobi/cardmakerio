<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	const myp = "https://pbs.twimg.com/profile_images/1580661255739670530/rt1v0Pm6_400x400.jpg";
</script>

<svelte:head>
	<title>Card Maker</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="move-bg">
	<div class="flex flex-col items-center text-white ">
		<img src={myp} alt="" class='rounded-full w-20 mb-2 bg-gray-700'/>
		
		<h1 class='text-lg'>Card Maker</h1>
		<p class="p-5 text-center">
			this is just a simple website that makes cool cards component with provided information with svelte,  want to contribute?
			 <a href="https://github.com/dxtobi">GitHub</a>
		</p>

		<a href="/forms"
			class='p-4 border-white text-white border-2'
		>
		CREATE CARD
		</a>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		min-height: 100vh;
    width: 100%;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
