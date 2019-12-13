package com.cuongnm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.cuongnm.entity.DetailUsers;

@Repository

public interface UserDetailRepository extends JpaRepository<DetailUsers, Integer>{
	@Query(nativeQuery=true, value="select * from detail_users where detail_users.user_id = ?1")
	public DetailUsers findByUserId(int id);
}
