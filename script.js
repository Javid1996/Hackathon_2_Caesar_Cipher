const encryptButton = document.getElementById('encrypt');
const decryptButton = document.getElementById("decrypt");

encryptButton.addEventListener('click',encrypt)
decryptButton.addEventListener('click',decrypt)


function encrypt(){
    const input = document.getElementById("input_text");
    const output = document.getElementById("output_text");
    const key = document.getElementById('key');
    let encryptedText = "";
    let inputValue = input.value;
    let strInputValue = inputValue.toString()
    let keyValue=key.value;
    console.log(`Key  ${key}`);
    console.log(`Keyvalue ${keyValue}`);
    console.log(` INTPUT Val ${inputValue}`);
    console.log(`str INT Val ${strInputValue}`);

    for(let i = 0; i<strInputValue.length;i++){
        const charCode = strInputValue.charCodeAt(i);
        if(charCode>=65 && charCode<=90){
            encryptedText+=String.fromCharCode(((charCode - 65 + keyValue)%26)+65);
        } 
        else if(charCode>=97 && charCode<=122){
            encryptedText+=String.fromCharCode(((charCode - 97 + keyValue)%26)+97);
        }
        else{
            encryptedText+=strInputValue[i];
        }
    }

output.value = encryptedText;


}



function decrypt(){
    const input = document.getElementById("input_text");
    const output = document.getElementById("output_text");
    const key = document.getElementById('key');
    let decryptedText = "";
    let inputValue = input.value;
    let strInputValue = inputValue.toString()
    let keyValue=key.value;
    console.log(`Key  ${key}`);
    console.log(`Keyvalue ${keyValue}`);
    console.log(` INTPUT Val ${inputValue}`);
    console.log(`str INT Val ${strInputValue}`);

    for(let i = 0; i<strInputValue.length;i++){
        const charCode = strInputValue.charCodeAt(i);
        if(charCode>=65 && charCode<=90){
            decryptedText+=String.fromCharCode(((charCode - 65 - keyValue +26)%26)+65);
        } 
        else if(charCode>=97 && charCode<=122){
            decryptedText+=String.fromCharCode(((charCode - 97 - keyValue +26)%26)+97);
        }
        else{
            decryptedText+=strInputValue[i];
        }
    }

output.value = decryptedText;


}