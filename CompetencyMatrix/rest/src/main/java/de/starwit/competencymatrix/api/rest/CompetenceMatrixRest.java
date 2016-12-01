package de.starwit.competencymatrix.api.rest;


import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import de.starwit.competencymatrix.api.rest.response.EntityResponse;
import de.starwit.competencymatrix.ejb.CompetenceMatrixService;
import de.starwit.competencymatrix.entity.CompetenceMatrixEntity;

@Path("/competencematrix")
@Consumes("application/json")
@Produces("application/json")
public class CompetenceMatrixRest extends AbstractRest<CompetenceMatrixEntity> {
	
	@Inject
	protected CompetenceMatrixService service;
	
	@Override
	protected CompetenceMatrixService getService() {
		return service;
	}
	
	//Create
	@Path("/")
	@PUT
	public EntityResponse<CompetenceMatrixEntity> create(CompetenceMatrixEntity entity) {
		return super.createGeneric(entity);
	}

	//Update
	@Path("/")
	@POST
	public EntityResponse<CompetenceMatrixEntity> update(CompetenceMatrixEntity entity) {
		return super.updateGeneric(entity);
	}
}