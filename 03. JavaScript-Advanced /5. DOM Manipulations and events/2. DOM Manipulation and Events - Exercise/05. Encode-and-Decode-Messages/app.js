function encodeAndDecodeMessages() {
    // Select the textareas
    let textArea = document.querySelectorAll('#main textarea');;
    let encodeMessage = textArea[0];
    let decodeMessage = textArea[1];

    // Select the buttons
    let buttons = document.querySelectorAll('#main button');
    let buttonEncode = buttons[0];
    let buttonDecode = buttons[1];
   
   
    // Add event listeners to the buttons
    buttonEncode.addEventListener("click", encode);
    buttonDecode.addEventListener("click", decode);

    // Encode function
    function encode() {
        let message = encodeMessage.value;
        // Simple encoding: shift each character by 1
        let encodedMessage = message.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
        decodeMessage.value = encodedMessage;
        encodeMessage.value = ''; // Clear the encode textarea
    }

    // Decode function
    function decode() {
        let message = decodeMessage.value;
        // Simple decoding: shift each character by -1
        let decodedMessage = message.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
        decodeMessage.value = decodedMessage;
    }

    // For debugging purposes, log the textareas
    console.log(encodeMessage);
    console.log(decodeMessage);
}


