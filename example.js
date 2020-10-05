var price1 = 3000;
var price2 = 5000;
var price3 = 3000;
var sum = price1 + price2 + price3;
var result;
var result = (sum) > 10000 ? "원 초과하셨습니다." : "돈 관리 잘했어요!";
var over = sum - 10000;
document.write(over + result);