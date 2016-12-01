package de.starwit.competencymatrix.api.rest;


import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import de.starwit.competencymatrix.api.rest.response.EntityResponse;
import de.starwit.competencymatrix.ejb.QuestionService;
import de.starwit.competencymatrix.entity.QuestionEntity;

@Path("/question")
@Consumes("application/json")
@Produces("application/json")
public class QuestionRest extends AbstractRest<QuestionEntity> {
	
	@Inject
	protected QuestionService service;
	
	@Override
	protected QuestionService getService() {
		return service;
	}
	
	//Create
	@Path("/")
	@PUT
	public EntityResponse<QuestionEntity> create(QuestionEntity entity) {
		return super.createGeneric(entity);
	}

	//Update
	@Path("/")
	@POST
	public EntityResponse<QuestionEntity> update(QuestionEntity entity) {
		return super.updateGeneric(entity);
	}
}