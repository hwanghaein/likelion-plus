export default function add(x = 0, y = 0) {
  return x + y;
}

export  function substract(x = 0, y = 0) {
  return x - y;
}

// export {add, substract}; // 명명된 공개 named 이름 그대로를 써야함.  
// 명명하지않고 마음대로 쓸수있게 하려면 default -> add 가 아니어도 정해써도됨