package de.starwit.competencymatrix.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.validation.constraints.Size;

@XmlRootElement
@Entity
@Table(name="COMPETENCEMATRIX")
public class CompetenceMatrixEntity extends AbstractEntity {
	
	private static final long serialVersionUID = 1L;
	
	//domain attributes
	
	@Size(min = 1, max = 150)
	private String title;
	
	@Size(min = 1, max = 150)
	private String description;
	
	private String competences;
	
	

	@Column(name="TITLE", length=150)
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}

	@Column(name="DESCRIPTION", length=150)
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name="COMPETENCES")
	public String getCompetences() {
		return competences;
	}
	
	public void setCompetences(String competences) {
		this.competences = competences;
	}
}