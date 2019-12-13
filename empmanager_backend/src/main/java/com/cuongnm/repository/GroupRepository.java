package com.cuongnm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.cuongnm.entity.Groups;

@Repository


public interface GroupRepository extends JpaRepository<Groups, Integer>{

}
