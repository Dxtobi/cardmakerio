<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.css';




</script>

<div class="app min-h-[100vh]">
	<Header />

	<main class="items-center justify-center w-full">
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://twitter.com/programmer_dex">Connect On Twitter</a>| About</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
