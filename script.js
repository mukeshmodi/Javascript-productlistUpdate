var ProductList={
	
	Products:[
	{
                           
                           productName:"basketball",
						   price: 23,
						   completed:true,
						   Img: 'images/2.JPG'
						   
                        },
                        {
                           productName:"baseball",
						   price:24,
						   completed:true,
						   Img: 'images/3.JPG'
                        }
	
	],
	
	displayproduct:function()
	{
		if(this.Products.length===0){
			console.log("Your product list is Empty");
		}
		else{
			
		
		for(var i=0;i<this.Products.length;i++)
		{
			
			console.log(this.Products[i].completed);
		}
		}
				
	},
	addProducts:function(name,price,imag)
	{
		this.Products.push({
			productName:name,
			price:price,
			Img:imag,
			completed:false
			
		
		}
			);
		
		view.displayProducts();
	},
	editDetail:function(position,newName,price,imag)
	{
		this.Products[position].productName=newName;
		this.Products[position].price=price;
		this.Products[position].Img=imag;
		
		view.displayProducts();
	},
	deleteProduct:function(position)
	{
		this.Products.splice(position,1);
		
		this.displayproduct();
	},
	togglebuy: function(position)
	{
		var Product=Products[position];
		product.completed=product.completed;
		view.displayProducts();
	},
	selectAll:function()
	{
		var totalProducts=this.Products.length;
		var selectedProducts=0;
		
		for(var i=0;i<totalProducts;i++)
		{
			if(this.Products[i].completed=== true)
			{
				selectedProducts++;
			}
		}
		console.log(selectedProducts);
		console.log(totalProducts);
		if(selectedProducts===totalProducts)
		{
			
			for(var i=0;i<this.Products.length;i++)
			{
			
			this.Products[i].completed=false;
			}
		}
		else{
			
			for(var i=0;i<this.Products.length;i++)
			{
			
			this.Products[i].completed=true;
			}
		}
		
			
		this.displayproduct();
	}
	
};



var handlers={
	addProduct: function() {
    var addProductName = document.getElementById('inputProductName');
	var addImg=document.getElementById('inputIMG')
	var productPrice=document.getElementById('inputProductPrice');
	console.log(addImg.value);
	var x='images/'+addImg.value.replace("C:\\fakepath\\","")
	
    ProductList.addProducts(addProductName.value,productPrice.value,x);
    
    view.displayProducts();
  },
  
  editProduct: function() {
    var changePosition = document.getElementById('changePosition'),
    		changeName = document.getElementById('changeName');
			changePrice = document.getElementById('changePrice');
			changeImg = document.getElementById('changeImg');
			var x= 'images/'+changeImg.value.replace("C:\\fakepath\\","")
    ProductList.editDetail(
      changePosition.valueAsNumber,
      changeName.value,
	  changePrice.value,
	 x
    );
    changePosition.value = '';
   changeName.value = '';
    view.displayProducts();
  },
  
  
  
  
  
  deleteProduct: function(position) {
    ProductList.deleteProduct(position);
    view.displayProducts();
  },
	displayProducts: function(){
		view.displayProducts();
	},
	selectAll: function(){
		view.displayProducts();;
	}
	
	
}



var view={
	displayProducts: function(){
		var productUL=document.querySelector('ul');
		productUL.innerHTML="";
		for(var i=0;i<ProductList.Products.length;i++){
		var productLI=document.createElement('li');
		var productH3=document.createElement('h3');
		var productSpan=document.createElement('span');
		var Img=document.createElement('img');
		
		Img.setAttribute("style"," width:140px; height:100px");
		Img.setAttribute("alt","NP");
		productSpan.className='badge';
		Img.src=ProductList.Products[i].Img;
		productH3.textContent=ProductList.Products[i].productName;
		productSpan.textContent=ProductList.Products[i].price;
		productLI.id=i;
		productLI.appendChild(Img);
		productLI.appendChild(productH3);
		productH3.appendChild(productSpan);
		productUL.appendChild(productLI);
		productLI.appendChild(this.createDeleteButton());
		
		}
	},
	createDeleteButton:function(){
		var deleteButton=document.createElement('button');
		deleteButton.textContent="Delete";		
		deleteButton.className="deleteButton btn btn-danger";
		return deleteButton;
	},
	
	setUpEventlisteners:function(){
var productUL=document.querySelector('ul');
productUL.addEventListener('click',function(event){
	var elementClicked=event.target;
	if(elementClicked.className==='deleteButton btn btn-danger'){
		handlers.deleteProduct(parseInt(elementClicked.parentNode.id));
	}
	
});	
	}
};
view.setUpEventlisteners(); 

