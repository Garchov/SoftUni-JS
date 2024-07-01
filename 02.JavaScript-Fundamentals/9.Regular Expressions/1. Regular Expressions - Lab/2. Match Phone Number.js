function matchPhoneNumber(input) {
    let text = input[0];
    let pattern = /\+359( |-)2\1\d{3}\1\d{4}\b/g;
    let matches = text.match(pattern);
    let result=[];
    for (const phone of matches) {
        result.push(phone);
    }
    console.log(result.join(', '));
}

matchPhoneNumber([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
]);