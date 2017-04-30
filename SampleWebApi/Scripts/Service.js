app.service("CustomerService", function ($http) {
    this.getCustomers = function () {
        return $http.get("api/Employees")
    }
});