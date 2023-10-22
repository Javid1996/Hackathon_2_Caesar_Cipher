function encrypt(){
    const input = document.getElementById("input_text");
    const key = document.getElementById('key');
    let encryptedText = "";
    let inputValue = input.value;
    let strInputValue = inputValue.toString()
    let keyValue=key.value;

    for(let i = 0; i<strInputValue.length;i++){
        const charCode = strInputValue.charCodeAt(i);
        if(charCode>=65 && charCode<=90){
            encryptedText+=String.fromCharCode(((charCode - 65 + key)%26)+65);
        } 
        else if(charCode>=97 && charCode<=122){
            encryptedText+=String.fromCharCode(((charCode - 97 + key)%26)+97);
        }
        else{
            encryptedText+=strInputValue[i];
        }
    }
}