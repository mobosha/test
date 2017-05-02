"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 匹配 email 正则表达式
var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.prototype.isAcceptable = function (s) {
        return emailReg.test(s);
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=EmailValidator.js.map