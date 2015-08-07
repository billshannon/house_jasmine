function House(numberOfDoors, numberOfWindows) {
    this.numberOfDoors = numberOfDoors;
    this.numberOfWindows = numberOfWindows;
    this.toString = function () {
        if (numberOfDoors > 1 && numberOfWindows === 1) {
            return "The house has " + this.numberOfDoors + " doors and " + this.numberOfWindows + " window";
        } else if (numberOfDoors > 1 && numberOfWindows > 1) {
            return "The house has " + this.numberOfDoors + " doors and " + this.numberOfWindows + " windows";
        } else if (numberOfDoors === 1 && numberOfWindows > 1) {
            return "The house has " + this.numberOfDoors + " door and " + this.numberOfWindows + " windows";
        } else if (numberOfDoors === 1 && numberOfWindows === 1) {
            return "The house has " + this.numberOfDoors + " door and " + this.numberOfWindows + " window";
        } else if (numberOfDoors < 1 && numberOfWindows < 1) {
            return "The house has " + this.numberOfDoors + " doors and " + this.numberOfWindows + " windows";
        }
    }

}

module.exports = House;