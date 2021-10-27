const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let distanceToFuel = mpg * fuelLeft;
    if (distanceToFuel >= distanceToPump) {
      return true;
    } else {
      return false; 
    }
  };