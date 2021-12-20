package com.technlogiaherosgroup.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table( name="products" )
public class Products {

	
	@Id
	@GeneratedValue( strategy = GenerationType.AUTO ) 
	private long id;
	
	@Column( name="name", nullable=false )
	private String name;
	
	@Column( name="quantity", nullable=false )
	private int quantity;
	
	@Column( name="price", nullable=false )
	private float price;

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

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public Products() {
		super();
	}
	
	
	
	
}
