package de.starwit.competencymatrix.api.rest;


import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import de.starwit.competencymatrix.api.rest.response.EntityResponse;
import de.starwit.competencymatrix.ejb.CompetenceEvaluationService;
import de.starwit.competencymatrix.entity.CompetenceEvaluationEntity;

@Path("/competenceevaluation")
@Consumes("application/json")
@Produces("application/json")
public class CompetenceEvaluationRest extends AbstractRest<CompetenceEvaluationEntity> {
	
	@Inject
	protected CompetenceEvaluationService service;
	
	@Override
	protected CompetenceEvaluationService getService() {
		return service;
	}
	
	//Create
	@Path("/")
	@PUT
	public EntityResponse<CompetenceEvaluationEntity> create(CompetenceEvaluationEntity entity) {
		return super.createGeneric(entity);
	}

	//Update
	@Path("/")
	@POST
	public EntityResponse<CompetenceEvaluationEntity> update(CompetenceEvaluationEntity entity) {
		return super.updateGeneric(entity);
	}
}