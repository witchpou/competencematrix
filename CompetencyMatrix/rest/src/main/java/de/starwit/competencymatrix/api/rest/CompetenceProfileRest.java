package de.starwit.competencymatrix.api.rest;


import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import de.starwit.competencymatrix.api.rest.response.EntityResponse;
import de.starwit.competencymatrix.ejb.CompetenceProfileService;
import de.starwit.competencymatrix.entity.CompetenceProfileEntity;

@Path("/competenceprofile")
@Consumes("application/json")
@Produces("application/json")
public class CompetenceProfileRest extends AbstractRest<CompetenceProfileEntity> {
	
	@Inject
	protected CompetenceProfileService service;
	
	@Override
	protected CompetenceProfileService getService() {
		return service;
	}
	
	//Create
	@Path("/")
	@PUT
	public EntityResponse<CompetenceProfileEntity> create(CompetenceProfileEntity entity) {
		return super.createGeneric(entity);
	}

	//Update
	@Path("/")
	@POST
	public EntityResponse<CompetenceProfileEntity> update(CompetenceProfileEntity entity) {
		return super.updateGeneric(entity);
	}
}