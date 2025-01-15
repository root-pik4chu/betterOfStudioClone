function generatePattern() {
   const n = 5; 
   let pattern = '';
 

   for (let i = 1; i <= n; i++) {
     pattern += ' '.repeat(n - i) + '*'.repeat(i) + '\n';
   }
 
 
   for (let i = n - 1; i >= 1; i--) {
     pattern += ' '.repeat(n - i) + '*'.repeat(i) + '\n';
   }
 
   return pattern;
 }
 
 console.log(generatePattern());