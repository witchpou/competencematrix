package de.starwit.competencymatrix.ejb.impl;


import javax.ejb.Stateless;
import de.starwit.competencymatrix.ejb.UserService;
import de.starwit.competencymatrix.entity.UserEntity;

@Stateless(name = "UserService")
public class UserServiceImpl extends AbstractServiceImpl<UserEntity> implements UserService {
	
	private static final long serialVersionUID = 1L;

}



    
