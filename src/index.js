const audioBox = new Map([
    ['KeyA', 'white_keys/A.mp3'],
    ['KeyS', 'white_keys/S.mp3'],
    ['KeyD', 'white_keys/D.mp3'],
    ['KeyF', 'white_keys/F.mp3'],
    ['KeyG', 'white_keys/G.mp3'],
    ['KeyH', 'white_keys/H.mp3'],
    ['KeyJ', 'white_keys/J.mp3'],
    [],
    ['KeyW', 'black_keys/W.mp3'],
    ['KeyE', 'black_keys/E.mp3'],
    ['KeyT', 'black_keys/T.mp3'],
    ['KeyY', 'black_keys/Y.mp3'],
    ['KeyU', 'black_keys/U.mp3'],
]);

window.onload = function () {
    document.addEventListener('keydown', function (event) {
        if (audioBox.has(event.code)) {
            new Audio(audioBox.get(event.code)).play();
        } else {
            console.warn('Invalid key pressed');
        }
    });
}