
    function footballKit(input) {
        let tShirtPrice = Number(input[0]);
        let targetSum = Number(input[1]);
    
        let shortsPrice = 0.75 * tShirtPrice;
        let socksPrice = 0.2 * shortsPrice;
        let sneakersPrice = 2 * (tShirtPrice + shortsPrice);
        
        let totalSum = tShirtPrice + shortsPrice + socksPrice + sneakersPrice;
        let discount = 0.15 * totalSum;
        let finalSum = totalSum - discount;
    
        if (finalSum >= targetSum) {
            console.log("Yes, he will earn the world-cup replica ball!");
            console.log(`His sum is ${finalSum.toFixed(2)} lv.`);
        } else {
            let neededMoney = targetSum - finalSum;
            console.log("No, he will not earn the world-cup replica ball.");
            console.log(`He needs ${neededMoney.toFixed(2)} lv. more.`);
        }
    }

footballKit(["55",
"310"])
;
