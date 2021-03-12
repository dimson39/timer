# timer
Timer for your site

To configure the script for your site, you need to perform a few simple settings:
1. Find this line in the script code:

      let deadline = '2021-03-13';
      
   Replace the value of the "deadline" variable with the actual time the script ended.
   Important: the date must be entered in the format "YYYY-MM-DD".
2. Find this line in the script code:

      setClock('timer', deadline);
      
   Your layout should be identical to the layout shown in the "index.html" file. If for 
   some reason you want to change the timer ID, then enter a new name instead of 'timer'.   
   
   
