package de.starwit.competencymatrix.api.restapp;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import de.starwit.competencymatrix.api.rest.QuestionRest;
import de.starwit.competencymatrix.api.rest.CompetenceProfileRest;
import de.starwit.competencymatrix.api.rest.CompetenceEvaluationRest;
import de.starwit.competencymatrix.api.rest.AnswerRest;
import de.starwit.competencymatrix.api.rest.CompetenceRest;
import de.starwit.competencymatrix.api.rest.CompetenceMatrixRest;
import de.starwit.competencymatrix.api.rest.UserRest;


@ApplicationPath("/api")
public class RestfulApplication extends Application {

	@Override
	public Set<Class<?>> getClasses() {
		final Set<Class<?>> classes = new HashSet<Class<?>>();
		// register root resource
		classes.add(QuestionRest.class);
		classes.add(CompetenceProfileRest.class);
		classes.add(CompetenceEvaluationRest.class);
		classes.add(AnswerRest.class);
		classes.add(CompetenceRest.class);
		classes.add(CompetenceMatrixRest.class);
		classes.add(UserRest.class);

		return classes;
	}

}