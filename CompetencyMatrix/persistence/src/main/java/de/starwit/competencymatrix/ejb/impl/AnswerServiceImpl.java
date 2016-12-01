package de.starwit.competencymatrix.ejb.impl;


import javax.ejb.Stateless;
import de.starwit.competencymatrix.ejb.AnswerService;
import de.starwit.competencymatrix.entity.AnswerEntity;

@Stateless(name = "AnswerService")
public class AnswerServiceImpl extends AbstractServiceImpl<AnswerEntity> implements AnswerService {
	
	private static final long serialVersionUID = 1L;

}



    
