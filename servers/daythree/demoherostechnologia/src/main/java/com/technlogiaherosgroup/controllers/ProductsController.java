package com.technlogiaherosgroup.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.technlogiaherosgroup.entities.Products;
import com.technlogiaherosgroup.repositories.CategoryRepository;
import com.technlogiaherosgroup.repositories.ProductRepository;
import com.technlogiaherosgroup.request.ProductModel;
import com.technlogiaherosgroup.response.JsonResponse;

@RequestMapping("/products")
@RestController
public class ProductsController {
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	CategoryRepository  categoryRepository;
	
	
	
	// ADD product !!!
	// Request server + data produit
	@PostMapping("/add")
	ResponseEntity<?> createNewProduct( @RequestBody ProductModel model ) {
		
		Products p = new Products();
		
		p.setName( model.getName() );
		p.setQuantity(model.getQuantity());
		p.setPrice(model.getPrice());
		p.setCategory( this.categoryRepository.findById(model.getCategory()).get() );
		
		// ? :/
		// who will save our product p ?
		return  ResponseEntity.ok(this.productRepository.save(p))  ;  // INSERT 
		
	}
	
	
	// request get !!
	@GetMapping("/list")
	List<Products> getAll(){
		return this.productRepository.findAll();
	}

	
	
	// update a product using an ID
	@PostMapping("/update/{id}")
	ResponseEntity<?> updateProduct( @RequestBody ProductModel model, @PathVariable long id ) {
		
		// i must get the old product !!
		Products p = this.productRepository.findById(id).get();
		
		
		p.setName( model.getName() );
		p.setQuantity(model.getQuantity());
		p.setPrice(model.getPrice());
		
		// ? :/
		// who will save our product p ?
		return  ResponseEntity.ok(this.productRepository.save(p))  ;  // UPDATE
		
	}
	
	
	
	
	
	// delete a product using an ID
	@DeleteMapping("/delete/{id}")
	ResponseEntity<?> deleteProduct(  @PathVariable long id ) {
		
		// i must get the old product !!
		Products p = this.productRepository.findById(id).get();
		
		
		JsonResponse res = new JsonResponse();
		
		res.setSuccess(true);
		
		this.productRepository.delete(p);
		 
		return  ResponseEntity.ok(res)  ;  // UPDATE
		
	}
	
	
	// SELECT * FROM `products` WHERE `quantity`=0
	
	@GetMapping("/out-of-stock")
	List<Products> getOutOfStock(){
		return this.productRepository.findByQuantity(0);
	}
	
	
	// SELECT * FROM products WHERE price >= 3000
	
	@GetMapping("/price-filter")
	List<Products> priceFilter( @RequestParam(name="price", required = false) float price  ){
		return this.productRepository.findByPriceGreaterThanEqual( price );
	}
	
	
	
	
	
	
	
	
	
	
	

}
