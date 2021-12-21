package com.technlogiaherosgroup.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.technlogiaherosgroup.request.TodoModel;
import com.technlogiaherosgroup.response.JsonResponse;

@RequestMapping("/app")
@RestController
public class AppController {
		
	@GetMapping("/hello")
	public String helloworld() {
		return "salut !!";
	}
	
	// FIRST API somme x et y
	@GetMapping("/somme")
	int somme(   @RequestParam int x, @RequestParam int y   ) {
		return (x+y);
	}
	
	@GetMapping("/users/details/{id}")
	String findUserById( @PathVariable int id  ) {
		// ...
		return "Searching for user N° "+id;
	}
	
	// POST MAPPING !!
	
	// ADD todo { title body }
	
	@PostMapping("/todo/add")
	ResponseEntity<?> addNewTodo( @RequestBody TodoModel model ) {
		// title body
		//System.out.println( model.getTitle());
		//System.out.println( model.getBody());
		// Create an entity !! => Table database
		
		JsonResponse res = new JsonResponse();
		res.setSuccess(true);
		
		return ResponseEntity.ok(  res);
	}
	
	
	
}
