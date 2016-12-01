package de.starwit.competencymatrix.ejb.impl;


import javax.ejb.Stateless;
import de.starwit.competencymatrix.ejb.CompetenceMatrixService;
import de.starwit.competencymatrix.entity.CompetenceMatrixEntity;

@Stateless(name = "CompetenceMatrixService")
public class CompetenceMatrixServiceImpl extends AbstractServiceImpl<CompetenceMatrixEntity> implements CompetenceMatrixService {
	
	private static final long serialVersionUID = 1L;

}



    
