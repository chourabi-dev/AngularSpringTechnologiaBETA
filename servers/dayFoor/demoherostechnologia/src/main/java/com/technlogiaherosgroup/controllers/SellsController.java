package com.technlogiaherosgroup.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technlogiaherosgroup.entities.Products;
import com.technlogiaherosgroup.entities.Sells;
import com.technlogiaherosgroup.repositories.*;
import com.technlogiaherosgroup.request.SellsModel;
import com.technlogiaherosgroup.response.SellsAddResponse;
import com.technlogiaherosgroup.services.SellsService; 

@RequestMapping("/sells")
@RestController

public class SellsController {
	
	@Autowired
	SellsService sellsService;
	
	
	
	
	@PostMapping("/add")
	ResponseEntity<?> add( @RequestBody List<SellsModel> list ) {
		
		int ok = 0;
		int error = 0;
		
		for( SellsModel tmp:list ) {
			Products p = this.sellsService.getProductRepository().findById(tmp.getProduct()).get();
			
			
			if(  tmp.getQuantity() <= p.getQuantity()   ) {
				Sells sells = new Sells();
				
				
				
				sells.setQuantity(tmp.getQuantity());
				sells.setClient(  this.sellsService.getClientsRepository().findById( tmp.getClient() ).get()  );
				sells.setProduct(p );
				
				p.setQuantity(  p.getQuantity() - tmp.getQuantity()   );
				
				this.sellsService.getProductRepository().save(p) ;
				
				
				this.sellsService.getSellsRepository().save(sells);
				ok++;
			}else {
				error++;
			}
			
		}
		
		
		// response !! 
		String res = ok+" products success, "+error+" product error ";
		
		SellsAddResponse sr = new SellsAddResponse();
		sr.setMessage(res);
		
		return ResponseEntity.ok(sr);
		
		
	}
	
	
	

}
