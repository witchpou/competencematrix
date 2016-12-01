package de.starwit.competencymatrix.ejb;

import java.io.Serializable;
import javax.ejb.Local;
import de.starwit.competencymatrix.entity.UserEntity;

@Local
public interface UserService extends Serializable, AbstractService<UserEntity> {

}


    
