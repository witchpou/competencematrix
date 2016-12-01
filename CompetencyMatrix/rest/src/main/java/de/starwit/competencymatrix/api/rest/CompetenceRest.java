package de.starwit.competencymatrix.api.rest;


import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import de.starwit.competencymatrix.api.rest.response.EntityResponse;
import de.starwit.competencymatrix.ejb.CompetenceService;
import de.starwit.competencymatrix.entity.CompetenceEntity;

@Path("/competence")
@Consumes("application/json")
@Produces("application/json")
public class CompetenceRest extends AbstractRest<CompetenceEntity> {
	
	@Inject
	protected CompetenceService service;
	
	@Override
	protected CompetenceService getService() {
		return service;
	}
	
	//Create
	@Path("/")
	@PUT
	public EntityResponse<CompetenceEntity> create(CompetenceEntity entity) {
		return super.createGeneric(entity);
	}

	//Update
	@Path("/")
	@POST
	public EntityResponse<CompetenceEntity> update(CompetenceEntity entity) {
		return super.updateGeneric(entity);
	}
}