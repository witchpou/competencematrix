package de.starwit.competencymatrix.ejb.impl;


import javax.ejb.Stateless;
import de.starwit.competencymatrix.ejb.CompetenceProfileService;
import de.starwit.competencymatrix.entity.CompetenceProfileEntity;

@Stateless(name = "CompetenceProfileService")
public class CompetenceProfileServiceImpl extends AbstractServiceImpl<CompetenceProfileEntity> implements CompetenceProfileService {
	
	private static final long serialVersionUID = 1L;

}



    
