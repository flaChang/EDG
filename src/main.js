let html = document.querySelector('#html');
let style = document.querySelector('#style');

let string = `
/*恭喜国电夺冠，我虽不是淀粉，但却被这种不破不立的精神感动。
*接下来我要用我少得可怜的前端功底为EDG做一个庆祝页面。
*希望你可以看下去哦~
*首先，我要准备一个div
*/                               
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来让EDG的队标出现吧。
*首先，把div变成一个圆。
*/
#div1{
    border-radius: 50%;
    border: none;
    background: radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(255,255,255,1) 55%, rgba(255,255,255,1) 62%, rgba(0,0,0,1) 62%, rgba(0,0,0,1) 71%, rgba(255,255,255,1) 71%, rgba(255,255,255,1) 77%);
}
/*然后，让EDG三个大字出现在中间。
*/
#div1{
    font-size: 50px;
    font-weight: 15px;
    color: white;
    padding-top: 50px;
    padding-left: 50px;
}
/*再把国电的图标美化一下。
*先创建一个div元素。
*/
#div2{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*去掉边框，把这个div元素上面的字母移到图标下方的正中间。
*/
#div2{
    border: none;
    font-size: 15px;
    font-weight: 1px;
    color: white;
    padding-top: 130px;
    padding-left: 42px;
}
/*作为一个欢庆页怎么能少了图片呢？
*/
#img-1{
    position: fixed;
    height: 40px;
   
    top: 0;
    right: 0;
    margin-right: 8px;
}
/*队标底部再放一张捧杯的照片。
*/
#img-2 {
    position: fixed;
    height: 140px;
    top: 251px;
    right: 0;
    margin-right: 15px;
}
/*现在这个庆祝页就做好啦。
*十分钦佩他们的不破不立精神。
*希望我自己也能做到不破不立。
*/

`;




let n = 0;
let string2 = '';


let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += '&nbsp';
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999)
        html.scrollTo(0, 99999)
        if (n + 1 < string.length) {
            n += 1;
            step();
        }
    }, 50);
}

step();