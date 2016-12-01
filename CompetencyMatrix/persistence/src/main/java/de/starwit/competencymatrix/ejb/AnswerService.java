package de.starwit.competencymatrix.ejb;

import java.io.Serializable;
import javax.ejb.Local;
import de.starwit.competencymatrix.entity.AnswerEntity;

@Local
public interface AnswerService extends Serializable, AbstractService<AnswerEntity> {

}


    
