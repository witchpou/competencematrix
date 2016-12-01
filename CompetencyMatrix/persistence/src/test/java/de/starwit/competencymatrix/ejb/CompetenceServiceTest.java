package de.starwit.competencymatrix.ejb;

import org.jboss.arquillian.junit.Arquillian;
import org.junit.Assert;
import org.junit.runner.RunWith;

import de.starwit.competencymatrix.entity.CompetenceEntity;

@RunWith(Arquillian.class)
public class CompetenceServiceTest extends AbstractServiceTest<CompetenceService, CompetenceEntity> {
	
	@Override
	public void setService(CompetenceService service) {
		this.service = service;
	}

	@Override
	public void testCreate() {
		entity = new CompetenceEntity();
		entity = getService().create(entity);
		ID = entity.getId();
		Assert.assertNotNull(entity.getId());
		Assert.fail("Not yet implemented");
		
	}

	@Override
	public void testUpdate() {
		entity = getService().findById(ID);
		entity = getService().update(entity);
		Assert.fail("Not yet implemented");
	}

}