const js = import('./node_modules/snake-game-wasm/snake_game_wasm.js');
js.then((js) => {
	js.greet('WebAssembly');
});
