package de.starwit.competencymatrix.api.rest.response;

import javax.xml.bind.annotation.XmlRootElement;
import de.starwit.competencymatrix.entity.AbstractEntity;

@XmlRootElement
public class EntityResponse<E extends AbstractEntity> extends Response<E>{
	
	public EntityResponse() {
		//default constructor
	}
	
	public EntityResponse(E result) {
		super(result);
	}
		
}
