package com.technlogiaherosgroup.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.technlogiaherosgroup.repositories.ClientsRepository;
import com.technlogiaherosgroup.repositories.ProductRepository;
import com.technlogiaherosgroup.repositories.SellsRepository;

@Service
public class SellsService {

	
	@Autowired
	ProductRepository productRepository;
	
	
	@Autowired
	ClientsRepository clientsRepository; 
	
	
	@Autowired
	SellsRepository sellsRepository;


	public ProductRepository getProductRepository() {
		return productRepository;
	}


	public ClientsRepository getClientsRepository() {
		return clientsRepository;
	}


	public SellsRepository getSellsRepository() {
		return sellsRepository;
	}


	public SellsService() {
		super();
	} 
	
}
