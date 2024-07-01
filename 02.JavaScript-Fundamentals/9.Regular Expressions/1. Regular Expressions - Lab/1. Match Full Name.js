function matchFullName(input) {
    let template = /\b([A-Z][a-z]+) [A-Z][a-z]+\b/g;
    let newArray = input.match(template);

    let string =  '';
    for (const iterator of newArray) {
       
string+= iterator +" ";

}
console.log(`${string.split(' ').join(" ")}`);
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan    Ivanov"
);