package com.technlogiaherosgroup.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technlogiaherosgroup.entities.Categories;
import com.technlogiaherosgroup.repositories.CategoryRepository;
import com.technlogiaherosgroup.request.CategoryModel;

@RequestMapping("/categories")
@RestController

public class CategoriesController {

	
	@Autowired
	CategoryRepository  categoryRepository;
	
	
	@GetMapping("/list")
	List<Categories> findAll(){
		return this.categoryRepository.findAll();
	}
	
	
	@PostMapping("/add")
	ResponseEntity<?> addNewCategory( @RequestBody CategoryModel model ){
		Categories c = new Categories();
		c.setName(model.getName());
		return ResponseEntity.ok(this.categoryRepository.save(c));
	}
}
