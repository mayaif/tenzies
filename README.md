
![9 1 - Copy](https://user-images.githubusercontent.com/99820280/230891890-c3700a8f-fd14-41b9-aa97-f1eae87b8794.png)


To win the game, the player must roll the dice until they are all the same. 

By selecting a dice, the player can lock its current value, preventing it from changing in subsequent rolls. 


The useState() is used to define two state variables 'dice' and 'tenzies'.

'dice' stores an array of dice objects which have a value, 'isHeld' and 'id' properties. 

'tenzies' is a boolean state variable that determines whether the game has been won or not.

The useEffect() is used to check whether all the dice have the same value and are being held. If this is the case, tenzies state variable is set to 'true', indicating that the game has been won.

The useEffect() hook is dependent on the 'dice' state variable, so it will be called every time the 'dice' state variable is updated. This allows the function to monitor changes to the dice variable and execute the necessary code when the conditions of the useEffect are met.





