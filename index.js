const body = document.getElementsByTagName("body")[0];

function changeColor(name) {
    body.style.backgroundColor = `${name}`;
}

async function changeRandomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const randomColorGenerator = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = randomColorGenerator;
}

