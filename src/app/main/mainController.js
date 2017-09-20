angular
  .module('app')
  .controller('MainController', function () {
    var vm = this;
    vm.data = [];
    vm.labels = [];
    vm.series = [];

    function buildRepeatData() {
      vm.repeatData = [];
      vm.data.forEach(function (value, index) {
        if (angular.isArray(value)) {
          value.forEach(function (val, i) {
            vm.repeatData.push({value: val, arrayIndex: i, serieIndex: index});
          });
        } else {
          vm.repeatData.push({value: value, arrayIndex: index, serieIndex: null});
        }
      });
    }

    vm.addSerie = function (name) {
      vm.data.push([]);
      vm.series.push(name);
      vm.serieName = null;
    };

    vm.addLabel = function (label) {
      vm.labels.push(label);
      vm.currentLabel = null;
    };

    vm.addValueToSerie = function (value, serieIndex) {
      vm.data[serieIndex].push(value);
      vm.currentValue = null;
      buildRepeatData();
    };

    vm.deleteValue = function (arrayIndex, serieIndex) {
      if (serieIndex !== null) {
        vm.data[serieIndex].splice(arrayIndex, 1);
      } else {
        vm.data.splice(arrayIndex, 1);
      }
      buildRepeatData();
    };
  });
