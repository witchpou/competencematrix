package de.starwit.competencymatrix.ejb;

import java.io.Serializable;
import javax.ejb.Local;
import de.starwit.competencymatrix.entity.CompetenceEntity;

@Local
public interface CompetenceService extends Serializable, AbstractService<CompetenceEntity> {

}


    
