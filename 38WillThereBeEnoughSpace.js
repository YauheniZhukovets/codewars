function enough(cap, on, wait) {
    var sumPiple = on + wait;
    if (sumPiple>cap) {
      return sumPiple - cap;
    } else {
      return 0;
    }
  }