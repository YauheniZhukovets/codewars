function defineSuit(card) {
    for (let i = 0; i < card.length; i++) {
      if (card[i] == '♣' ) {
      return 'clubs'
    } else if (card[i] == '♠' ) {
      return 'spades'
    } else if (card[i] == '♦' ) {
      return 'diamonds'
    } else  if (card[i] == '♥' ) { 
      return 'hearts'
    } 
  } 
  }