const paletteContainer = document.querySelector('.palette-container')
const generateButton = document.getElementById('generate-btn')

generateButton.addEventListener('click', generatePalette)


function generatePalette() {
    const colors = []

    for(let i = 0; i < 5; i++){
        colors.push(generateRandomColor())
    }

    updatePaletteDisplay(colors)

}

function generateRandomColor(){
    const color = "ABCDEF0123456789"
    let hashTag = '#'

    for(let i = 0; i < 6; i++){
        const randomIndex = Math.floor(Math.random() * color.length)
        hashTag += color[randomIndex]
    }

    return hashTag;
}



function updatePaletteDisplay(colors) {
    
    const colorBoxes = document.querySelectorAll('.color-box')

    colorBoxes.forEach((box, index) => {

        const color = colors[index]
        const hexValue = box.querySelector('.hex-value')
        const colorDiv = box.querySelector('.color')

        colorDiv.style.backgroundColor = color;
        hexValue.textContent = color;

    })

}
    

paletteContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-btn")) {
    const hexValue = e.target.previousElementSibling.textContent;

    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess(e.target))
      .catch((err) => console.log(err));
  } else if (e.target.classList.contains("color")) {
    const hexValue = e.target.nextElementSibling.querySelector(".hex-value").textContent;
    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn")))
      .catch((err) => console.log(err));
  }
});




function showCopySuccess(icon) {

    icon.classList.remove('far', 'fa-copy');
    icon.classList.add('fas', 'fa-check');

    icon.style.color = '#48bb78';

    setTimeout(() => {
        icon.classList.remove('fa-check', 'fas');
        icon.classList.add('far', 'fa-copy');

        icon.style.color = "";
    }, 1500);
}

generatePalette();