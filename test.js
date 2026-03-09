const test = arg => {
    const bar = document.getElementsByClassName("bar")[0];
    bar.innerHTML += ` <span class="${String(arg)}">${String(arg)}</span>`;
}