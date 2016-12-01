package de.starwit.competencymatrix.ejb;

import java.io.InputStream;

import javax.ejb.Local;

import de.starwit.competencymatrix.entity.AbstractEntity;
import de.starwit.competencymatrix.exception.ImportException;

@Local
public interface DataImportExportService {
	
	void importAll();

	void importEntityData(Class<? extends AbstractEntity> entityClass,
			InputStream in) throws ImportException;
}
