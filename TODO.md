- [X] Install dependancies - @Redux/Toolkit
- [X] Create global state for chips in Redux
TODO:must change the logic behind adding chips It will begin with all colors and an endless number of chips, with a set amount of initial cash that will decrease depending on the bet.
- [X] Add reducres for adding chips
- [X] Add reducer for removing chips during gameplay
- [X] Add modal with chip options (initial cash)
- [X] Homepage - implement menu buttons, logic for buttons + routing and loding animation - and more

  - [X] Play now
  - [X] Options
  - [X] Rules
- [ ] Options -

  - [ ] theme (dark and light),
  - [ ] shortcuts for keys information,
  - [ ] select deck number,
  - [ ] card values information,
  - [X] and more - later TODO: Implement sound

1. [ ] GamePage -

    1. [X] implement styling
    2. [X] shuffle logic
    3. [X] deal logic
    4. [X] game rules logic
    5. [ ] Add Settings button to game page to open up a modal of the Settings
        component during the game, without losing game progress (make sure
        to add closing button to it as well)
    6. [] Add Rules button to GAME PAGE to open up a modal with the rules component wihtout losing game progress, (make sure to add closing button
        to it as well)
    7. [X] Add Home button to game page, to open up a modal, asking if you are sure you want to go to the MAIN MENU and LOSE ALL PROGRESS! (simple YES OR NO buttons), which will trigger condition state for rendering!
2. [ ] PlayerCardSlot component - implement logic for player side, betting, and play option
3. [ ] DealerCardSlot component - implement logic for dealer side, dealing and  options
4. [ ] Game result component - implement result from current deal - points + info if the player wins or loses
5. [ ] Cash out - Pop up with are you sure? and if yes - will be shown section with some calculations like :
    -cash won - ...$
    -hands won - ...
    -highest bank-...$
    -total score -...
6. Bugs To Be Fixed 
[X] Player cant Stand if dealer is between 17-21 and player is less
[] implement logic to calculate ACE (one or eleven) 
[] counters of the Cards values  between games are not 0-s
[X] Dealer continues to hit after  17
[] After WIN add chipAdd.total*2 to initial Cash