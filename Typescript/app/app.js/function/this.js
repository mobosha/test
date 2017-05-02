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
            var _this = this;
            //使用 lambda 表达式去捕捉 this 用法.
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                console.log(_this);
                console.log(_this.suits[pickedSuit]);
                console.log(pickedCard % 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker2 = deck2.createCardPicker();
    var pickedCard2 = cardPicker2();
    console.log("card2: " + pickedCard2.card + " of " + pickedCard2.suit);
}
getMeMsg2();
///-------
/**
*JavaScript 是本质上是一种非常好的动态的语言。这并意味都通用的一个 JavaScript 函数返
回基于对传入的参数的形状不同类型的对象。
*/
var suits = ["hearts", "spades", "clubs", "diamonds"];
//--实例一
function getThisMsgs1() {
    function pickCard1(x) {
        // 判断这个 x 是不是 object/array
        if (typeof x == "object") {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        else if (typeof x == "number") {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }
    var myDeck1 = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 },
        { suit: "hearts", card: 4 }];
    var pickedCard1 = myDeck1[pickCard1(myDeck1)];
    console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
    var pickedCard2 = pickCard1(15);
    console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
}
getThisMsgs1();
///------------
//--实例二
function getThisMsgs2() {
    function pickCard(x) {
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if (typeof x == "object") {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        else if (typeof x == "number") {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }
    var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, {
            suit: "hearts", card: 4
        }];
    var pickedCard1 = myDeck[pickCard(myDeck)];
    console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
    var pickedCard2 = pickCard(15);
    alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
}
getThisMsgs2();
//# sourceMappingURL=this.js.map