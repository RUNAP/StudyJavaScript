/**
 * Type Conversion
 * 
 * 1)명시적
 * 2)암묵적
 */

let age = 32;

//명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge); //(눈에보이게 타입변환을 알려줌)

//암묵적
let test = age + '';
console.log(typeof test,test); //(''으로StringType을 추가해줌으로써 String타입으려바뀜)

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);
console.log('-----------');
//실제로 쓰기보다는 가능하다를 알고있는정도면충분.

/**
 * 명시적 변환 More
 */

console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(),(Infinity).toString());
console.log('-----------');

//Number,Float 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0.99'));
console.log(typeof parseFloat('1.7'), parseFloat('1.7'));
console.log(typeof +'2' , +'2');
console.log('-----------');

//Boolean 타입으로 변환
console.log(!'x'); //false
console.log(!!'x'); //true
console.log(!!''); //false
console.log(!!0); //false
console.log(!!'0'); //true
console.log(!!'false'); //true
console.log(!!false); //false
console.log(!!undefined); //false
console.log(!!null); //false
/**
 * 1.아무 글자도 없는 String = false
 * 2.값이 없는경우 = false
 * 3.0 = false
 */

console.log('-----------');
console.log(!!{}); //true
console.log(!![]); //true