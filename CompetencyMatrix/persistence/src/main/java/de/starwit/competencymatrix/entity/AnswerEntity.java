package de.starwit.competencymatrix.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@XmlRootElement
@Entity
@Table(name="ANSWER")
public class AnswerEntity extends AbstractEntity {
	
	private static final long serialVersionUID = 1L;
	
	//domain attributes
	
	@Pattern(regexp = "")
	@Size(min = 1, max = 260)
	private String question;
	
	@Size(min = 1, max = 260)
	private String answer;
	
	private String passed;
	
	

	@Column(name="QUESTION", length=260)
	public String getQuestion() {
		return question;
	}
	
	public void setQuestion(String question) {
		this.question = question;
	}

	@Column(name="ANSWER", length=260)
	public String getAnswer() {
		return answer;
	}
	
	public void setAnswer(String answer) {
		this.answer = answer;
	}

	@Column(name="PASSED")
	public String getPassed() {
		return passed;
	}
	
	public void setPassed(String passed) {
		this.passed = passed;
	}
}