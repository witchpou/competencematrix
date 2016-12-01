package de.starwit.competencymatrix.ejb;

import java.io.Serializable;
import javax.ejb.Local;
import de.starwit.competencymatrix.entity.CompetenceEvaluationEntity;

@Local
public interface CompetenceEvaluationService extends Serializable, AbstractService<CompetenceEvaluationEntity> {

}


    
