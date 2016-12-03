package de.starwit.competencymatrix.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.validation.constraints.Pattern;
import javax.persistence.EnumType;
import javax.validation.constraints.Size;
import javax.persistence.Enumerated;

@XmlRootElement
@Entity
@Table(name="USER")
public class UserEntity extends AbstractEntity {
	
	private static final long serialVersionUID = 1L;
	
	//domain attributes
	
	@Pattern(regexp = "^[a-zA-Z0-9]*$")
	@Size(min = 1, max = 150)
	private String firstname;
	
	@Pattern(regexp = "^[a-zA-Z0-9]*$")
	@Size(min = 1, max = 150)
	private String lastname;
	
	@Pattern(regexp = "^[a-zA-Z0-9]*$")
	@Size(min = 1, max = 150)
	private String login;
	
	private Role role;
	
	

	@Column(name="FIRSTNAME", length=150)
	public String getFirstname() {
		return firstname;
	}
	
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	@Column(name="LASTNAME", length=150)
	public String getLastname() {
		return lastname;
	}
	
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	@Column(name="LOGIN", length=150)
	public String getLogin() {
		return login;
	}
	
	public void setLogin(String login) {
		this.login = login;
	}

	@Enumerated(EnumType.STRING)
	@Column(name="ROLE")
	public Role getRole() {
		return role;
	}
	
	public void setRole(Role role) {
		this.role = role;
	}
}