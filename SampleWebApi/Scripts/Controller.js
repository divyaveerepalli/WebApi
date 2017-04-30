app.controller('EmployeesController', function ($scope, CustomerService) {
    getAll();

    function getAll() {
        var servCall = CustomerService.getCustomers();
        servCall.then(function (d) {
            $scope.Employees = d.data;
        }, function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')
        })
    }
})