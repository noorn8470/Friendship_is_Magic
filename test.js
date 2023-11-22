// Define a class named 'Group'
class Group {
  // Constructor for the Group class, it initializes the class with a name and a visual element
  constructor(groupName, visualElement) {
    this.name = groupName;       // Assign the 'groupName' argument to the 'name' property of the class
    this.visual = visualElement; // Assign the 'visualElement' argument to the 'visual' property of the class
  }

  // Method to update the visual element of the group
  linkVisual(visualElement) {
    this.visual = visualElement; // Update the 'visual' property with the new 'visualElement' argument
  }

  // Method to print the name of the group to the console
  print() {
    console.log(this.name);      // Output the name of the group to the console
  }
}

// Usage of the Group class involves creating an instance of the class and then calling its methods.
// For example:
// let myGroup = new Group("Team Alpha", someVisualElement);
// myGroup.print(); // Prints: Team Alpha
// myGroup.linkVisual(anotherVisualElement); // Updates the visual element of the group
