// EXO 1
var elem = 18 ;
var list1 = [1, 18, 12, 84, 120];
var i =0 ;
console.log("exo1");
console.log("tableau avant le supression :");
console.log(list1);
while (i<=list1.length && elem != list1[i] ){
  i++ ;
}
if (i>list1.length){
  console.log("l'element existe pas");}
  else{
   for(i; i<=(list1.length)-1; i++){
     list1[i]= list1[i+1]; 
   }
  }
 console.log("tableau apres le supression :");
console.log(list1);
//EXO 2
var list2 = [1,1, 18, 12, 84,84, 120];
console.log("exo2");
console.log("tableau avant le supression :");
console.log(list2);
var j=0;
for(j ; j<=(list2.length)-1; j++){
  
  if(list2[j]==list2[j+1]){
    for(i=j ; i<=(list2.length)-1; i++){
     list2[i]= list2[i+1];
   
    }
  }
   }
console.log("tableau apres le supression :");
console.log(list2);
