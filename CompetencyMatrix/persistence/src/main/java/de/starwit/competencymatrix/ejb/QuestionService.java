package de.starwit.competencymatrix.ejb;

import java.io.Serializable;
import javax.ejb.Local;
import de.starwit.competencymatrix.entity.QuestionEntity;

@Local
public interface QuestionService extends Serializable, AbstractService<QuestionEntity> {

}


    
