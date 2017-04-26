# Stackathon Project - Sarah Herr
This is the stackathon project made by Sarah Herr during her time at Grace Hopper.
	- Start date: April 26, 2017
	- Presentation date: May 1, 2017


## What is the project?

This is an app that displays how species interact with other species. 
The focus of this app is to become more comfortable with graphical databases and to show the interactions between species.


### What the user can do:

1. Look at the overall graph
2. Query the graph
	- find all species that interact with a selected species
		- EX. find all species that interact with the Mantra Ray
	- find all species that have a selected interaction of a selected species
		- EX. find all species that interact through mutualism with the Mantra Ray
	- find all species and that have a selected interaction
		- EX. find all species with the mutualism interaction
3. Add a species node
4. Add a species-to-species interaction
5. Navigate the graph (either the overall graph or a queried graph)


### DB Design (using Neo4j)

- Species Node
	- Common name
	- Scientific name
	- Image

[Species Node] --[Interaction]-- [Species Node]

- Types of Interactions
	- (+) Mutualism (+)
	- (-) Competition (-)
	- (+) Predation (-)
	- (+) Parasitic (-)
	- (+) Commenalism (0)
	- (0) Amensalism (-)
