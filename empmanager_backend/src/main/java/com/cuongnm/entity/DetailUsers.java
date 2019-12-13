package com.cuongnm.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="detail_users")
public class DetailUsers {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "Id")
	private int id;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="User_Id", referencedColumnName="Id")
	private Users users;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Code_Level", referencedColumnName="Code")
	private Japanese japanese;
	
	private Date startDate;
	private Date endDate;
	private String total;
	
	
	public DetailUsers(Users users, Japanese japanese, Date startDate, Date endDate, String total) {
		this.users = users;
		this.japanese = japanese;
		this.startDate = startDate;
		this.endDate = endDate;
		this.total = total;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public String getTotal() {
		return total;
	}
	public void setTotal(String total) {
		this.total = total;
	}
	public Users getUsers() {
		return users;
	}
	public void setUsers(Users users) {
		this.users = users;
	}
	public Japanese getJapanese() {
		return japanese;
	}
	public void setJapanese(Japanese japanese) {
		this.japanese = japanese;
	}
	
}
