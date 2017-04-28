"use strict";
exports.__esModule = true;
//匹配移动电话号码
var telReg = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
var TelValidator = (function () {
    function TelValidator() {
    }
    TelValidator.prototype.isAcceptable = function (s) {
        return telReg.test(s);
    };
    return TelValidator;
}());
exports.TelValidator = TelValidator;
//# sourceMappingURL=TelValidator.js.map