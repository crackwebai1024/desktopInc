/** @type {import('@sveltejs/kit').Config} */
const static = require('@sveltejs/adapter-static');
module.exports = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: static(),
		target: '#svelte'
	}
};
