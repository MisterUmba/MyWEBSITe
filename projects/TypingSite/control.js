// Read a file and take the typing content
let file = new File([],"TypingText.txt");

let reader = new FileReader();
let data = "Henri is the best";
reader.addEventListener("loadend", ()=>{
    data = reader.result;
})
reader.readAsText(file);

console.log(data);
// Put the typing content into the typing area


// Read keyboard input and match character. 