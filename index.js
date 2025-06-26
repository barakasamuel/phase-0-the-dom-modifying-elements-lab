// Write your code here!

const main = document.getElementById('main');
if (main) main.remove();

window.newHeader = document.createElement('h1'); 

newHeader.id = 'victory';

newHeader.textContent = 'BARAKA is the champion'; 


document.body.appendChild(newHeader);
