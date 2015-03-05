four51.app.directive('orderdetails', function() {
	var obj = {
		restrict: 'AE',
		templateUrl: 'partials/controls/orderDetails.html',
		controller: ['$scope', function($scope) {
			if ($scope.isEditforApproval) {
				var exists = false;
				angular.forEach($scope.user.CostCenters, function(cc) {
					if (exists) return;
					exists = cc == $scope.currentOrder.CostCenter;
				});
				if (!exists) {
					$scope.user.CostCenters.push({
						'Name': $scope.currentOrder.CostCenter
					});
				}
			}

            $scope.updateCostCenter = updateCostCenter;

            function updateCostCenter() {
                angular.forEach($scope.user.CostCenters, function(cc) {
                   if (cc.Name == $scope.currentOrder.CostCenter && cc.DefaultAddressID) {
                       $scope.currentOrder.ShipAddressID = cc.DefaultAddressID;
                   }
                });
            }
		}]
	};
	return obj;
});