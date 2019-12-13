package com.cuongnm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;


import com.cuongnm.entity.Users;

@Repository

public interface UserRepository extends JpaRepository<Users, Integer>{
	@Query(nativeQuery=true , value="select * from users where users.fullname =?1")
	List<Users> findByTitleContainingOrContentContaining(String fullname);
}
