const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const pari = [];

for (let i = 0 ; i < nums.length; i++){
    if(nums[i] % 2 === 0){
        pari.push(nums[i]);
    };
};
console.log(pari);