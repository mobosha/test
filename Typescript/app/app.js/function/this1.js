var myAdd2 = function (x, y) {
    return x + y;
};
myAdd2 = function (a, b) {
    return a + b;
};
function buildName1(firstName, lastName) {
    return firstName + " " + lastName;
}
// var result1 = buildName1("Bob");
// var result2 = buildName1("Bob", "Adams", "Sr.");
var result3 = buildName1("Bob", "Adams");
// interface IClock1 {
//    new (hour: number, minute: number);
// }
// class Clock1 {
// currentTime: Date;
// constructor(h: number, m: number) { }
// }
// var cs: IClock1 = Clock1;
// var newClock = new cs(7, 30);
// console.log(newClock);
// function buildName3(firstName: string, ...restOfName: string[]) {
//     console.log(restOfName);
//     return firstName + " " + restOfName.join(" ");
// }
// var employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");
// console.log(employeeName);
function getMeMsg2() {
    var deck2 = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            //使用 lambda 表达式去捕捉 this 用法.
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                console.log(this);
                console.log(this.suits[pickedSuit]);
                console.log(pickedCard % 13);
                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker2 = deck2.createCardPicker();
    var pickedCard2 = cardPicker2();
    console.log("card2: " + pickedCard2.card + " of " + pickedCard2.suit);
}
getMeMsg2();
//# sourceMappingURL=this.js.map