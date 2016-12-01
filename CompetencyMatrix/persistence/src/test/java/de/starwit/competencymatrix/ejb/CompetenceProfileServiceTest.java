package de.starwit.competencymatrix.ejb;

import org.jboss.arquillian.junit.Arquillian;
import org.junit.Assert;
import org.junit.runner.RunWith;

import de.starwit.competencymatrix.entity.CompetenceProfileEntity;

@RunWith(Arquillian.class)
public class CompetenceProfileServiceTest extends AbstractServiceTest<CompetenceProfileService, CompetenceProfileEntity> {
	
	@Override
	public void setService(CompetenceProfileService service) {
		this.service = service;
	}

	@Override
	public void testCreate() {
		entity = new CompetenceProfileEntity();
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