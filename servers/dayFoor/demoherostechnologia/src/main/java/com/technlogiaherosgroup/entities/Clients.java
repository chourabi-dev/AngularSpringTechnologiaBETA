package com.technlogiaherosgroup.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table( name="clients" )
public class Clients {
	@Id
	@GeneratedValue( strategy = GenerationType.AUTO ) 
	private long id;
	
	@Column( name="fullname", nullable=false )
	private String fullname;
	
	@Column( name="email", nullable=false )
	private String email;
	
	@Column( name="address", nullable=false )
	private String address;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Clients() {
		super();
	}
	
	
	
}
