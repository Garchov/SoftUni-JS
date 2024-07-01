(function () {
   
    String.prototype.ensureStart = function (str) {
      if (!this.startsWith(str)) {
        return str + this;
      }
      return this.toString();
    };
  
   
    String.prototype.ensureEnd = function (str) {
      if (!this.endsWith(str)) {
        return this + str;
      }
      return this.toString();
    };
  
  
    String.prototype.isEmpty = function () {
      return this.length === 0;
    };
  
   
    String.prototype.truncate = function (n) {
      if (this.length <= n) {
        return this.toString();
      }
  
      if (n <= 3) {
        return '.'.repeat(n);
      }
  
      let lastIndex = this.substr(0, n - 2).lastIndexOf(' ');
      if (lastIndex !== -1) {
        return this.substr(0, lastIndex) + '...';
      } else {
        return this.substr(0, n - 3) + '...';
      }
    };
  
   
    String.format = function (string, ...params) {
      return string.replace(/{(\d+)}/g, (match, number) => {
        return typeof params[number] !== 'undefined' ? params[number] : match;
      });
    };
  })();

  let str = 'my string';

console.log(str.ensureStart('my')); 
console.log(str.ensureStart('hello ')); 
console.log(str.ensureEnd('string')); 
console.log(str.ensureEnd(' end')); 
console.log(''.isEmpty()); 
console.log('not empty'.isEmpty()); 
console.log('hello'.truncate(8)); 
console.log('hello world'.truncate(8)); 
console.log('hello world'.truncate(4)); 
console.log('hello world'.truncate(2)); 
console.log(String.format('The {0} is {1}', 'quick', 'brown fox')); 
console.log(String.format('jumps {0} {1}', 'over', 'the lazy dog')); 