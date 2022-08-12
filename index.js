const gifts = ["teddy bear", "drone", "doll"];

  function giftWrapping(gifts){
    for(let i=0; i< gifts.length ; i++)
    console.log(`Wrapped ${gifts[i]} and added a bow!`)
    return gifts
  }

  giftWrapping(gifts)


  const names = ["James","Michael","Susan"]
  function thankYou(names){
  for(let x= 0; x < names.length; x++)
  console.log(`Thank you for the gift ${names[x]}!`)
  return names
  }
  thankYou(names)

  //Trying the while countDown


function countDown(number){
  let x= number
while (x >= 0) {
 
console.log(x)
x--
}
}
countDown(10)
countDown(4)
