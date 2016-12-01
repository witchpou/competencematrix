package de.starwit.competencymatrix.ejb.impl;


import javax.ejb.Stateless;
import de.starwit.competencymatrix.ejb.CompetenceService;
import de.starwit.competencymatrix.entity.CompetenceEntity;

@Stateless(name = "CompetenceService")
public class CompetenceServiceImpl extends AbstractServiceImpl<CompetenceEntity> implements CompetenceService {
	
	private static final long serialVersionUID = 1L;

}



    
