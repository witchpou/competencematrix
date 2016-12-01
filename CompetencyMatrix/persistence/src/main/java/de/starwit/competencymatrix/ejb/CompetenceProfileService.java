package de.starwit.competencymatrix.ejb;

import java.io.Serializable;
import javax.ejb.Local;
import de.starwit.competencymatrix.entity.CompetenceProfileEntity;

@Local
public interface CompetenceProfileService extends Serializable, AbstractService<CompetenceProfileEntity> {

}


    
