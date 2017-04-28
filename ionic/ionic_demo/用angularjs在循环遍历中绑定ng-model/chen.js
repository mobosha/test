var app = angular.module('app', []);
app.controller('formController', function($scope) {
      $scope.array = [{
            name : '小米',
            price : '20',
            count : '2'
          }, {
            name : '三星',
            price : '50',
            count : '1'
          }]; // 表格数据
      $scope.itemSum = 0; // 表格里面的总价
      $scope.preferential = 0; // 表单的优惠
      $scope.sum = 0; // 实际总价

      for (var i = 0; i < $scope.array.length; i++) {
        // 计算表单的总价
        var node = $scope.array[i];
        $scope.itemSum += (node.count * node.price);
      }

      $scope.chanage = function(t) {
        // 修改折扣后触发事件
        var node = t.a
        node.p = node.discount / 10 * node.count * node.price;// 计算折扣对应的金额
      }

      $scope.chanage2 = function(t) {
        // 修改优惠价格后对应的change事件
        var node = t.a
        var total = node.price * node.count;
        node.discount = (total - node.p) / total * 10;// 修改优惠价格后对应的折扣
      }

      $scope.$watch('array', aa, true);// 监听显示表格的数据，如果修改了就调用aa的方法

      function aa() {
        // 该方法主要是在修改了折扣或优惠后计算出新的应付的价格
        $scope.preferential = 0;
        for (var i = 0; i < $scope.array.length; i++) {
          var p = $scope.array[i].p;
          if (p != null) {
            $scope.preferential += ($scope.array[i].p - 0);
          }
        }
        $scope.sum = $scope.itemSum - $scope.preferential;
      }
    })