function getRandomColor(color1, color2) {
    return Math.random() < 0.5 ? color1 : color2;
}

export default getRandomColor;