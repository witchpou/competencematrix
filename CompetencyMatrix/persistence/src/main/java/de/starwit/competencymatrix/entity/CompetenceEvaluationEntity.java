package de.starwit.competencymatrix.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.validation.constraints.Pattern;

@XmlRootElement
@Entity
@Table(name="COMPETENCEEVALUATION")
public class CompetenceEvaluationEntity extends AbstractEntity {
	
	private static final long serialVersionUID = 1L;
	
	//domain attributes
	
	@Pattern(regexp = "^[a-zA-Z0-9]*$")
	private String competence;
	
	private String answers;
	
	private String level;
	
	private String competenceProfile;
	
	

	@Column(name="COMPETENCE")
	public String getCompetence() {
		return competence;
	}
	
	public void setCompetence(String competence) {
		this.competence = competence;
	}

	@Column(name="ANSWERS")
	public String getAnswers() {
		return answers;
	}
	
	public void setAnswers(String answers) {
		this.answers = answers;
	}

	@Column(name="LEVEL")
	public String getLevel() {
		return level;
	}
	
	public void setLevel(String level) {
		this.level = level;
	}

	@Column(name="COMPETENCEPROFILE")
	public String getCompetenceProfile() {
		return competenceProfile;
	}
	
	public void setCompetenceProfile(String competenceProfile) {
		this.competenceProfile = competenceProfile;
	}
}