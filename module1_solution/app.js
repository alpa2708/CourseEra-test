(function()
{
    'use strict';
    angular.module('LunchCheck',[])
   .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope)
    {
        $scope.menu="";
        var arrayOfItems =[];
        var itemsCount = 0;
        //console.log('menu is',$scope.menu);

        //itemsCount = calculateLunchItems();

        $scope.calculateLunchItems = function()
        {
              console.log('menu is ',$scope.menu);
            //  var separator = ',';
              var menuItems = $scope.menu;
              var arrayOfItems = menuItems.split(',');
              //console.log(arrayOfItems[3]);
              console.log('the separator is',',');
              console.log('the menu has ', arrayOfItems.length, 'items',arrayOfItems.join(' / '));
              itemsCount =arrayOfItems.length;
              return itemsCount;
        };
        $scope.displayMessage = function()
        {
          if(itemsCount<=3)
          {
            return "Enjoy!";
          }
          else
          {
            return "Too much!"
          }

        };
    }

}
)();
