package de.starwit.competencymatrix.ejb.impl;


import javax.ejb.Stateless;
import de.starwit.competencymatrix.ejb.QuestionService;
import de.starwit.competencymatrix.entity.QuestionEntity;

@Stateless(name = "QuestionService")
public class QuestionServiceImpl extends AbstractServiceImpl<QuestionEntity> implements QuestionService {
	
	private static final long serialVersionUID = 1L;

}



    
