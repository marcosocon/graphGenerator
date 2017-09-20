angular
  .module('app')
  .controller('MainController', function () {
    var vm = this;
    vm.editing = false;
    vm.data = [];
    vm.labels = [];
    vm.series = [];

    function buildRepeatData() {
      vm.repeatData = [];
      vm.data.forEach(function (value, index) {
        if (angular.isArray(value)) {
          value.forEach(function (val, i) {
            vm.repeatData.push({value: val, arrayIndex: i, serieName: vm.series[index]});
          });
        } else {
          vm.repeatData.push({value: value, arrayIndex: index, serieName: null});
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

    vm.toggleEdit = function (arrayIndex, serieIndex, oldValue) {
      vm.editing = true;
      vm.editingValue = oldValue;
      vm.editingIndex = arrayIndex;
      vm.editingSerie = serieIndex;
    };

    vm.editValue = function (newValue) {
      if (vm.editingSerie !== null) {
        vm.data[vm.editingSerie].splice(vm.editingIndex, 1, newValue);
      } else {
        vm.data.splice(vm.editingIndex, 1, newValue);
      }
      vm.editing = false;
      buildRepeatData();
    };
  });
