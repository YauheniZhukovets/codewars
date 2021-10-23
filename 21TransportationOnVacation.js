function rentalCarCost(d) {
    if (d>0&&d<3) {
      return d*40
    } else if (d>=7) {
      return d*40 - 50
    } else if (d>=3&&d<7) {
      return d*40 -20
    }
  }