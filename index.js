let count = 0;
let countel = document.getElementById("count-el");
let saveel = document.getElementById("save-el");

function increment(){
    count++;
    countel.textContent = count;
    
    
}

function save(){
    let countsv = count + " - ";
    saveel.textContent += countsv; 
     countel.textContent = 0;
     count = 0;

}