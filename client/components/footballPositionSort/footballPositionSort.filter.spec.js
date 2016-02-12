'use strict';

describe('Filter: footballPositionSort', function () {

  // load the filter's module
  beforeEach(module('footballCoachApp'));

  // initialize a new instance of the filter before each test
  var footballPositionSort;
  beforeEach(inject(function ($filter) {
    footballPositionSort = $filter('footballPositionSort');
  }));

  it('should return the input prefixed with "footballPositionSort filter:"', function () {
    var text = 'angularjs';
    expect(footballPositionSort(text)).toBe('footballPositionSort filter: ' + text);
  });

});
