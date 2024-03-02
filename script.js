document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('keyboard-display');
  
    document.addEventListener('keydown', function (event) {
      const key = event.key;
      const keycode = event.keyCode;
  
      display.innerHTML = `<p>Key: ${key}</p><p>Keycode: ${keycode}</p>`;
  });
});