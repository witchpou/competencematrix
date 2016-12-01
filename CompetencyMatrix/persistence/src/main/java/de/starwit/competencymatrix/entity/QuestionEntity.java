package de.starwit.competencymatrix.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
import javax.validation.constraints.Size;

@XmlRootElement
@Entity
@Table(name="QUESTION")
public class QuestionEntity extends AbstractEntity {
	
	private static final long serialVersionUID = 1L;
	
	//domain attributes
	
	@Pattern(regexp = "/^[a-zA-Z0-9]*$/")
	@Size(min = 1, max = 150)
	private String competence;
	
	@Min(value = 0)
	@Max(value = 3)
	private Integer level;
	
	@Pattern(regexp = "/^[a-zA-Z0-9]*$/")
	@Size(min = 1, max = 260)
	private String description;
	
	@Pattern(regexp = "/^[a-zA-Z0-9]*$/")
	@Size(min = 1, max = 150)
	private String title;
	
	

	@Column(name="COMPETENCE", length=150)
	public String getCompetence() {
		return competence;
	}
	
	public void setCompetence(String competence) {
		this.competence = competence;
	}

	@Column(name="LEVEL")
	public Integer getLevel() {
		return level;
	}
	
	public void setLevel(Integer level) {
		this.level = level;
	}

	@Column(name="DESCRIPTION", length=260)
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name="TITLE", length=150)
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
}