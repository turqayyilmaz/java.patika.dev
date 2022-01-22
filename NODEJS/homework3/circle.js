const Pi = 3.14;
const circleArea = (r) => {

    let area = Pi * r * r;

    console.log(`Yarı çapı ${r} olan dairenin alanı ${area} dir.`);

}

const circleCircumference = (r) => {
    let circumference = 2 * Pi * r;
    console.log(`Yarı çapı ${r} olan dairenin çevresi ${circumference} dir.`);
}

module.exports = {
    circleArea,
    circleCircumference
}
