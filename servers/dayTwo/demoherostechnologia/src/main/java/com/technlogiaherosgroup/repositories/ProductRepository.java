package com.technlogiaherosgroup.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technlogiaherosgroup.entities.Products;

public interface ProductRepository extends JpaRepository<Products,Long> {

}
