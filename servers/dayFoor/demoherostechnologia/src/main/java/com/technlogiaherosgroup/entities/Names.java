package com.technlogiaherosgroup.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table( name="names" )
public class Names {

	@Id
	@GeneratedValue( strategy = GenerationType.AUTO ) 
	private long id;
	
	
	private String name;
	
	
	@OneToOne
	@JoinColumn( name="products_id" )
	private Products product;


	public Products getProduct() {
		return product;
	}


	public void setProduct(Products product) {
		this.product = product;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}
	
	
}
