package de.starwit.competencymatrix.ejb.impl;


import javax.ejb.Stateless;
import de.starwit.competencymatrix.ejb.CompetenceEvaluationService;
import de.starwit.competencymatrix.entity.CompetenceEvaluationEntity;

@Stateless(name = "CompetenceEvaluationService")
public class CompetenceEvaluationServiceImpl extends AbstractServiceImpl<CompetenceEvaluationEntity> implements CompetenceEvaluationService {
	
	private static final long serialVersionUID = 1L;

}



    
