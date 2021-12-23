package com.technlogiaherosgroup.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technlogiaherosgroup.entities.Clients;

public interface ClientsRepository extends JpaRepository<Clients,Long> {

}
