package com.example.appdev.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class LoginDto {
	@Id
	private int id;
	private String userName;
	private String email;
	private String password;

	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getpassword() {
		return password;
	}

	public void setpassword(String password) {
		this.password = password;
	}

	public LoginDto(int id, String userName, String email, String password) {
		super();
		this.id = id;
		this.userName = userName;
		this.email = email;
		this.password = password;
		
	}
	
	public LoginDto() {
		
	}
	
	

}