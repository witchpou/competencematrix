# Competence Matrix
## General Idea ##
The Idea is based of the Developer Competency Matrix. It is used to find out the skill levels for candidates of computer sience. Hence, questions for different skill areas ared defined by evaluators. Candidates shall answer the questions. Evaluators review the answers and a skill-level is assigned to each competency of the candidate. At the and, all competencies and the reached level of the defined matrix are displayed for the candidate.

![](https://raw.githubusercontent.com/witchpou/lirejarp/master/docs/images/CompetencyMatrix.png?raw=true)


#Installation
## Prerequisites ##
* Java 8 SE Development Kit (binaries on PATH, JAVA_HOME set)
* Maven (mvn on PATH)
* Ant (on PATH)
* Passion for software development ;)

## Quick Introduction ##

* git clone whole repo
* go to CompetencyMatrix
* run ```ant setup_project```
* browse to http://localhost:8080/competencymatrix

## Architecture ##
For Architecture, see projects `lirejarp` and `lj-project builder`. The following class diagramm shows the general architecture.

![](https://raw.githubusercontent.com/witchpou/lirejarp/master/docs/images/genericDomainPattern.png?raw=true)

The general packages are:

###Data Structure

The domain objects are dislayed in the following picture:

![](https://raw.githubusercontent.com/witchpou/lirejarp/master/docs/images/CompetencyMatrix.png?raw=true)
