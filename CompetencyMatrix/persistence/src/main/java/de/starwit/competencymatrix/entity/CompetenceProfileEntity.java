package de.starwit.competencymatrix.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.validation.constraints.Pattern;

@XmlRootElement
@Entity
@Table(name="COMPETENCEPROFILE")
public class CompetenceProfileEntity extends AbstractEntity {
	
	private static final long serialVersionUID = 1L;
	
	//domain attributes
	
	@Pattern(regexp = "")
	private String user;
	
	private String evaluator;
	
	private String competenceEvaluations;
	
	

	@Column(name="USER")
	public String getUser() {
		return user;
	}
	
	public void setUser(String user) {
		this.user = user;
	}

	@Column(name="EVALUATOR")
	public String getEvaluator() {
		return evaluator;
	}
	
	public void setEvaluator(String evaluator) {
		this.evaluator = evaluator;
	}

	@Column(name="COMPETENCEEVALUATIONS")
	public String getCompetenceEvaluations() {
		return competenceEvaluations;
	}
	
	public void setCompetenceEvaluations(String competenceEvaluations) {
		this.competenceEvaluations = competenceEvaluations;
	}
}