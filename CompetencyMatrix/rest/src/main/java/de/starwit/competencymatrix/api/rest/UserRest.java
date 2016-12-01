package de.starwit.competencymatrix.api.rest;


import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import de.starwit.competencymatrix.api.rest.response.EntityResponse;
import de.starwit.competencymatrix.ejb.UserService;
import de.starwit.competencymatrix.entity.UserEntity;

@Path("/user")
@Consumes("application/json")
@Produces("application/json")
public class UserRest extends AbstractRest<UserEntity> {
	
	@Inject
	protected UserService service;
	
	@Override
	protected UserService getService() {
		return service;
	}
	
	//Create
	@Path("/")
	@PUT
	public EntityResponse<UserEntity> create(UserEntity entity) {
		return super.createGeneric(entity);
	}

	//Update
	@Path("/")
	@POST
	public EntityResponse<UserEntity> update(UserEntity entity) {
		return super.updateGeneric(entity);
	}
}