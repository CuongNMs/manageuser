package com.cuongnm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.cuongnm.entity.Japanese;

@Repository

public interface JapaneseRepository extends JpaRepository<Japanese, String>{
	
}
