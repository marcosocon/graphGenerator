angular
  .module('app', ['ui.router', 'chart.js'])
  .controller('MainController', function () {
    var vm = this;
    vm.data = [];
    vm.labels = [];
    vm.series = ['Series A'];
    function buildRepeatData() {
      vm.repeatData = vm.data.map(function (value, index) {
        return {
          value: value,
          label: vm.labels[index],
          index: index
        };
      });
    }
    vm.addValues = function (value, label) {
      vm.data.push(value);
      vm.labels.push(label);
      vm.currentLabel = null;
      vm.currentValue = null;
      buildRepeatData();
    };
    vm.deleteValue = function (index) {
      vm.labels.splice(index, 1);
      vm.data.splice(index, 1);
      buildRepeatData();
    };
  });
