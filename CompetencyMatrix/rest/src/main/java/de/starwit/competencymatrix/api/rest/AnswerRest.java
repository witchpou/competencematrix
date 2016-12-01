package de.starwit.competencymatrix.api.rest;


import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import de.starwit.competencymatrix.api.rest.response.EntityResponse;
import de.starwit.competencymatrix.ejb.AnswerService;
import de.starwit.competencymatrix.entity.AnswerEntity;

@Path("/answer")
@Consumes("application/json")
@Produces("application/json")
public class AnswerRest extends AbstractRest<AnswerEntity> {
	
	@Inject
	protected AnswerService service;
	
	@Override
	protected AnswerService getService() {
		return service;
	}
	
	//Create
	@Path("/")
	@PUT
	public EntityResponse<AnswerEntity> create(AnswerEntity entity) {
		return super.createGeneric(entity);
	}

	//Update
	@Path("/")
	@POST
	public EntityResponse<AnswerEntity> update(AnswerEntity entity) {
		return super.updateGeneric(entity);
	}
}