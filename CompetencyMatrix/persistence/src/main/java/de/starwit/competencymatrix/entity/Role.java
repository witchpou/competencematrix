package de.starwit.competencymatrix.entity;

public enum Role {
	ADMIN("admin"),
	CANDIDATE("candidate"),
	EVALUATOR("evaluator");
	
	private String forui;
	
	private Role(String forui) {
		this.forui = forui;
	}
	
	public String forUI() {
		return forui;
	}

}
