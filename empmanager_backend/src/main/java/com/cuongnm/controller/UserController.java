package com.cuongnm.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.cuongnm.entity.DetailUsers;
import com.cuongnm.entity.Groups;
import com.cuongnm.entity.Japanese;
import com.cuongnm.entity.Users;
import com.cuongnm.repository.GroupRepository;
import com.cuongnm.repository.JapaneseRepository;
import com.cuongnm.repository.UserDetailRepository;
import com.cuongnm.repository.UserRepository;

@RestController
public class UserController {

	@Autowired
	UserRepository userRepository;

	@Autowired
	GroupRepository groupRepository;

	@Autowired
	UserDetailRepository userDetailRepository;

	@Autowired
	JapaneseRepository japaneseRepository;



	@GetMapping("/users")
	public List<Users> index() {
		return userRepository.findAll();
	}

	@GetMapping("/users/{id}")
	public Users show(@PathVariable String id) {
		int userId = Integer.parseInt(id);
		return userRepository.findById(userId).get();
	}

	@PostMapping("/users/search")
	public List<Users> search(@RequestBody Map<String, String> body) {
		String searchTerm = body.get("text");
		return userRepository.findByTitleContainingOrContentContaining(searchTerm);
	}

	@PostMapping("/users")
	public void create(@RequestBody Map<String, String> body) {
		String loginName = body.get("loginname");
		String password = body.get("password");
		String fullName = body.get("fullname");
		String fullNameKana = body.get("fullnamekana");
		String email = body.get("email");
		String tel = body.get("tel");
		String tmpBirthday = body.get("birthday");
		String groupId = body.get("groupid");
		String codeLevel = body.get("codelevel");
		String tmpStartDate = body.get("startdate");
		String tmpEndDate = body.get("enddate");
		String total = body.get("total");
		
		
		Date birthday = null;
		Date startDate = null;
		Date endDate = null;
		
		
		Groups tmpGroup = groupRepository.getOne(Integer.parseInt(groupId));
		Japanese japanese = (Japanese) japaneseRepository.findById(codeLevel).get();
		
		try {
			birthday = new SimpleDateFormat("dd/MM/yyyy").parse(tmpBirthday);
			startDate = new SimpleDateFormat("dd/MM/yyyy").parse(tmpStartDate);
			endDate = new SimpleDateFormat("dd/MM/yyyy").parse(tmpEndDate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
	
		Users users = new Users(loginName, password, fullName, fullNameKana, email, tel, birthday, tmpGroup);
		DetailUsers detailUsers = new DetailUsers(users, japanese, startDate, endDate, total);
		userRepository.save(users);
		userDetailRepository.save(detailUsers);
		
	}

	@PutMapping("/users/{id}")
	public void update(@PathVariable String id, @RequestBody Map<String, String> body) {
		String loginName = body.get("loginname");
		String password = body.get("password");
		String fullName = body.get("fullname");
		String fullNameKana = body.get("fullnamekana");
		String email = body.get("email");
		String tel = body.get("tel");
		String tmpBirthday = body.get("birthday");
		String groupId = body.get("groupid");
		String codeLevel = body.get("codelevel");
		String tmpStartDate = body.get("startdate");
		String tmpEndDate = body.get("enddate");
		String total = body.get("total");
		
		Date birthday = null;
		Date startDate = null;
		Date endDate = null;
		
		Groups tmpGroup = groupRepository.getOne(Integer.parseInt(groupId));
		Japanese japanese = (Japanese) japaneseRepository.findById(codeLevel).get();
	
		try {
			birthday = new SimpleDateFormat("dd/MM/yyyy").parse(tmpBirthday);
			startDate = new SimpleDateFormat("dd/MM/yyyy").parse(tmpStartDate);
			endDate = new SimpleDateFormat("dd/MM/yyyy").parse(tmpEndDate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		int userId = Integer.parseInt(id);
		Users users = userRepository.findById(userId).get();
		DetailUsers detailUser = userDetailRepository.findById(userId).get();

		
		users.setLoginName(loginName);
		users.setPassword(password);
		users.setFullName(fullName);
		users.setFullNameKana(fullNameKana);
		users.setEmail(email);
		users.setTel(tel);
		users.setBirthday(birthday);
		users.setGroups(tmpGroup);
		
		detailUser.setStartDate(startDate);
		detailUser.setEndDate(endDate);
		detailUser.setUsers(users);
		detailUser.setTotal(total);
		detailUser.setJapanese(japanese);
		userRepository.save(users);
		userDetailRepository.save(detailUser);
	}

	@DeleteMapping("users/{id}")
	public void delete(@PathVariable String id) {
		int userId = Integer.parseInt(id);
		Users users = userRepository.findById(userId).get();
		DetailUsers detailUsers = userDetailRepository.findByUserId(userId);
		userDetailRepository.delete(detailUsers);
		userRepository.delete(users);

	}
}
