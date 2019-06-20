angular.module('FilterInControllerModule', [])
.controller('FilterController', ['filterFilter', function(filterFilter) {
  this.array = [
    {name: 'Tobia:s'},
    {name: 'Je:ff'},
    {name: 'Br:ian'},
    {name: 'Ig:or'},
    {name: 'J:ames'},
    {name: 'Bra:d'}
  ];
  this.filteredArray = filterFilter(this.array, 'a');
}])
.filter('split', function() {
    return function(input, splitChar, splitIndex) {
        // do some bounds checking here to ensure it has that index
        return input.split(splitChar)[splitIndex];
    }
});