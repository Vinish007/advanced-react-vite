package com.example.appdev.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.appdev.modal.Login;
import com.example.appdev.modal.LoginDto;
import com.example.appdev.repository.LoginRepo;





@Service
public class LoginServiceImpl implements LoginService{

	@Autowired
    private LoginRepo user1Repo;
    @Override
	public String addUser1(LoginDto user1dto) {
		Login user = new Login(
                user1dto.getId(),
                user1dto.getUserName(),
                user1dto.getEmail(),
                user1dto.getpassword()

                
        );
        user1Repo.save(user);
        return user.getUserName();
	}

	public List<Login>getUser1() {
		return user1Repo.findAll();
		
	}
}