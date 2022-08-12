app.factory("categoryFactory", ($http) => {
  var service = {};
  service.GetAll = GetAll;
  service.CreatCategory =  CreatCategory;
  service.UpdateCategory = UpdateCategory;
  service.DeleteCategory = DeleteCategory;
  function GetAll() {
    return $http.get("/api/categories");
  }

  function CreatCategory(categoryObject) {
    return $http.post("/api/categories", categoryObject);
  }

  function UpdateCategory(idCategory, nameCategory) {
    return $http.put("/api/categories/" + idCategory, nameCategory,{
		headers:{
			'Content-Type': 'application/json'
		}
});
  }

  function DeleteCategory(idCategory) {
    return $http.delete("/api/categories/" + idCategory);
  }

  /* custom handle 
	
	function handleSuccess(res) {
     return res.data;
  }
    
  function handleError(error) {
    return function () {
      return { success: false, message: error};
    };
  }*/

  return service;
});

app.service("categoryService", function (categoryFactory) {
  this.categoryGetAll = () => {
    return categoryFactory.GetAll();
  };

  this.categoryCreate = (categoryObject) => {
    return categoryFactory.CreatCategory(categoryObject);
  };

  this.categoryUpdate = (idCategory, nameCategory) => {
    return categoryFactory.UpdateCategory(idCategory, nameCategory);
  };

  this.categoryDelete = (idCategory) => {
    return categoryFactory.DeleteCategory(idCategory);
  };
});

app.service("handleMsgService", function (checkMsgShow) {
  this.handleMsg = (id, msg) => {
    return checkMsgShow.checkMsg(id, msg);
  };
});




//Account--------------------------------------------------------------------




app.factory("accountFactory", ($http) => {
  var service = {};
  service.GetAll = GetAll;
  service.CreateAccount = CreateAccount;
  service.UpdateAccount = UpdateAccount;
  service.DeleteAccount = DeleteAccount;
  function GetAll() {
    return $http.get("/api/accounts");
  }

 
function CreateAccount(accountObject) {
    return $http.post("/api/accounts", accountObject);
  }
 
function UpdateAccount(idAccount, usernameAccount,passwordAccount,fullnameAccount,emailAccount) {
	
    return $http.put("/api/accounts/" + idAccount, usernameAccount,passwordAccount,fullnameAccount,emailAccount);
  }

 function DeleteAccount(idAccount) {
    return $http.delete("/api/accounts/" + idAccount);
  }
  return service;
});

app.service("accountService", function (accountFactory) {
  this.accountGetAll = () => {
    return accountFactory.GetAll();
  };
  
this.accountCreate = (accountObject) => {
    return accountFactory.CreateAccount(accountObject);
  };
  
  this.accountUpdate = (idAccount,usernameAccount,passwordAccount,fullnameAccount,emailAccount) => {
    return accountFactory.UpdateAccount(idAccount, usernameAccount,passwordAccount,fullnameAccount,emailAccount);
    
  };
    this.accountDelete = (idAccount) => {
    return accountFactory.DeleteAccount(idAccount);
  };
});

app.service("handleMsgService", function (checkMsgShow) {
  this.handleMsg = (id, msg) => {
    return checkMsgShow.checkMsg(id, msg);
  };
});

//---------------------------------------- product factory------------------------------------
app.factory("productFactory", ($http) => {
  var service = {};
  service.GetAllProduct = GetAllProduct;
  service.CreateProduct = CreateProduct;
  service.DeleteProduct = DeleteProduct;
  function GetAllProduct(){
	return $http.get("/api/products");
}

function CreateProduct(products){
	
	var formData = new FormData();
	formData.append('product',JSON.stringify(products))
	
	return $http.post("/api/products",formData, {
		headers: {'Content-Type': undefined},
		transformRequest: angular.identity
		
	});
}

function DeleteProduct(idProduct){
	return $http.delete("/api/products/" + idProduct)
}
  
 
  return service;
});

app.service("productService", function (productFactory) {
  this.productGetAll = () => {
    return productFactory.GetAllProduct();
  };
  
  this.productCreateProduct = (products)=>{
	return productFactory.CreateProduct(products);
}
  
  this.productDelete = (id) =>{
	return productFactory.DeleteProduct(id);
}
});

app.directive('fileModel', ['$parse', function ($parse) { 
    return { 
        restrict: 'A', 
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel); 
            var modelSetter = model.assign;
            element.bind('change', function(){ 
                scope.$apply(function(){
                  modelSetter(scope, element[0].files[0]);
                }); 
            }); 
        } 
    }; 
}]);

