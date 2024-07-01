function loadingBar(number) {
    let percentage = number / 10;
    let progress = '%'.repeat(percentage);
    let dots = '.'.repeat(10 - percentage);
 
    if (number < 100) {
        console.log(`${number}% [${progress}${dots}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`[${progress}]`);
    }
}
 
loadingBar(30);
loadingBar(50);
loadingBar(100);