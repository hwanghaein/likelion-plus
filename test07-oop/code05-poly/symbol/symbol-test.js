let zoomIn = Symbol();

let kor = 30;
let colName = "eng";

let obj = {
  kor:30,
  [colName]:40,
  total (){
    return this.kor + this.eng
  }
}

console.log(obj.total());
