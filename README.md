# setSearchTerm method usage example
This app demonstrates the usage of the base Chamber's setSearchTerm method. Below are explanations for each chamber in the app.

## searchChamber
The list in this chamber is of no importance. It was used simply to initialize a chamber. The important part is the goto call in the overridden onSearch method. This demonstrates doing a search that results in the loading of a new chamber, which is one of the main problems the setSearchTerm method was designed to fix.

## resultChamber
The main focus in the result chamber is the overridden activate method. It demonstrates using the setSearchTerm method to persist a search term when switching chambers. 

It also includes a call to setSearchTerm in the ListChamber's itemClick listener that can be used to play around with calling setSearchTerm with different arguments. Simply change the mySearchTerm variable defined at the top of the module to try different search terms.
