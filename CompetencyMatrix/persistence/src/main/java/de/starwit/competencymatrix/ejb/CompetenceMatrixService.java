package de.starwit.competencymatrix.ejb;

import java.io.Serializable;
import javax.ejb.Local;
import de.starwit.competencymatrix.entity.CompetenceMatrixEntity;

@Local
public interface CompetenceMatrixService extends Serializable, AbstractService<CompetenceMatrixEntity> {

}


    
