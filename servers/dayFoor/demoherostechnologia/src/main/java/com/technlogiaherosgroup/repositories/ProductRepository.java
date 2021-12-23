package com.technlogiaherosgroup.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technlogiaherosgroup.entities.Products;

public interface ProductRepository extends JpaRepository<Products,Long> {

	List<Products> findByQuantity( int quantity );
	List<Products> findByPriceGreaterThanEqual( float price );
}
