var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");

if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}

slides[slideIndex-1].style.display = "block";  

}

const search = () => {
    let filter = document.getElementById('input').value.toLowerCase();

    let block = document.getElementById('block');

    let box = block.getElementsByClassName('box');
    
    let text = block.getElementsByTagName('h3');

    for(var i=0;i < text.length; i++){
        let h3=text[i];
        
        if(h3){
            let textValue = h3.textContent || h3.innerHTML;
            if(textValue.toLowerCase().indexOf(filter) > -1){
                box[i].style.display = "";
            }
            else{
                box[i].style.display ='none';
            }
        }
    }
}
const filterGenre = () => {
    const genreList=[
    "All",
    "Action",
    "Drama",
    "Sci-Fi"
    ];
    const dropdown = document.getElementById('genre');
    const list = dropdown.getElementsByTagName('a');

    console.log(list);
    
    for(var j=0;j < list.length ; j++){
        const genre = list[j].textContent;
        console.log(genre);
    }
}
