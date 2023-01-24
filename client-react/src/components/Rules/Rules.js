import './Rules.scss'

import React from 'react'

const Rules = () => {
  return (
    <div>
      <div className="block rules">

        <div className="rules-opt">
          <h1 className="heading-rules">
            Game Description
          </h1>
          <p className="gameDesc">
            At a blackjack table, the dealer faces one positions from behind a semicircular table. 52-card decks are shuffled together. To start each round, player place bet in the "betting box" at each position.
          </p>
          <p className="gameDesc">
            Each box gets an initial hand of two cards. The dealer's hand gets its first card face-up and, in "hole card" games, immediately gets a second card face-down (the hole card), which the dealer peeks at but only reveals when it makes the dealer's hand a blackjack.
          </p><p className="gameDesc">
            The object of the game is to win money by creating card totals higher than those of the dealer's hand but not exceeding 21, or by stopping at a total in the hope that the dealer will bust. On their turn, players choose to "hit" (take a card), "stand" (end their turn and stop without taking a card), "double" (double their wager, take a single card, and finish), "split" (if the two cards have the same value, separate them to make two hands), or "surrender" (give up a half-bet and retire from the game).
          </p><p className="gameDesc">
            Number cards count as their number, the jack, queen, and king ("face cards" or "pictures") count as 10, and aces count as either 1 or 11 according to the player's choice. If the total exceeds 21 points, it busts, and all bets on it immediately lose.
          </p><p className="gameDesc">
            After the boxes have finished playing, the dealer's hand is resolved by drawing cards until the hand achieves a total of 17 or higher (a dealer total of 17 including an ace valued at 11, also known as a "soft 17", must be drawn to in some games and must stand in others). The dealer never doubles, splits, or surrenders. If the dealer busts, all remaining player hands win. If the dealer does not bust, each remaining bet wins if its hand is higher than the dealer's and loses if it is lower. A player total of 21 on the first two cards is a "natural" or "blackjack", and the player wins immediately unless the dealer also has one, in which case the hand ties. In the case of a tie ("push" or "standoff"), bets are returned without adjustment. A blackjack beats any hand that is not a blackjack, even one with a value of 21.
          </p>
          <p className="gameDesc">
            Wins are paid out at even money, except for player blackjacks, which are traditionally paid out at 3 to 2 odds. Blackjack games usually offer a side bet called insurance, which may be placed when the dealer's face-up card is an ace.
          </p>


          <p className="gameDesc">Player decisions

            "Doubling Down"
            <br />
            redirects here. For the South Park episode, see Doubling Down (South Park). After the initial two cards, the player has up to five options: "hit", "stand", "double down", "split", or "surrender". Each option has a corresponding hand signal.</p>
        </div>



        <div className="rules-opt">
 <h1 className="heading-rules">
            Player Options
          </h1>
          <p className="gameDesc">
          After the initial two cards, the player has up to five options: "hit", "stand", "double down", "split", or "surrender". Each option has a corresponding hand signal.          </p>
          <p className="gameDesc"> 
         <strong>Hit:</strong>  Take another card. 
         <br/><strong>Stand:</strong> Take no more cards; also known as "stand pat", "sit", "stick", or "stay".
         <br/> <strong> Double down:</strong> Increase the initial bet by 100% and take exactly one more card. The additional bet is placed next to the original bet. Some games permit the player to increase the bet by amounts smaller than 100%, which is known as "double for less". 
         <br/><strong>  Split:</strong> Create two hands from a starting hand where both cards are the same value. Each new hand gets another card so that the player has two starting hands. This requires an additional bet on the second hand. The two hands are played out independently, and the wager on each hand is won or lost independently. In the case of cards worth 10 points, some casinos only allow splitting when the cards rank the same. For example, 10-10 could be split, but K-10 could not. Doubling and re-splitting after splitting are often restricted. A 10-valued card and an ace resulting from a split usually isn't considered a blackjack. Hitting split aces is often not allowed. Non-controlling players can opt to put up a second bet or not. If they do not, they only get paid or lose on one of the two post-split hands. 
         <br/><strong> Surrender:</strong> Forfeit half the bet and end the hand immediately. This option is only available at some tables in some casinos, and the option is only available as the first decision.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Rules
