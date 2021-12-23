package com.technlogiaherosgroup.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technlogiaherosgroup.entities.Clients;
import com.technlogiaherosgroup.repositories.ClientsRepository;
import com.technlogiaherosgroup.request.ClientModel;

@RequestMapping("/clients")
@RestController

public class ClientsController {

	@Autowired
	ClientsRepository clientsRepository; 
	
    
	@GetMapping("/list")
	List<Clients> getAll(){
		return this.clientsRepository.findAll();
	}
	
	@PostMapping("/add")
	ResponseEntity<?> addNew( @RequestBody() ClientModel model ){
		Clients client = new Clients();
		
		client.setFullname(model.getFullname());
		client.setEmail(model.getEmail());
		client.setAddress(model.getAddress());
		
		return ResponseEntity.ok(this.clientsRepository.save(client));
	}
}
