(function(){
    "use strict";

    const detailsForm= document.getElementById("destination_details_form");

    detailsForm.addEventListener('submit', handleFormSubmit);
    
    function handleFormSubmit(event){
        event.preventDefault();
        const destName= event.target.elements["name"].value;//event.target>>>> form and form.elements>>> name elements in array
        const destLocation= event.target.elements["location"].value;//event.target>>>> form and form.elements>>> location elements in array
        const destPhoto= event.target.elements["photo"].value;//ملاحظة ال e قبل التارت لازم تكون نفسها الي فوق بالفانكشن ولا يجب ان نكتب event بدالها
        const destDescription= event.target.elements["description"].value;
    
    //*******************clearing the fields of the form********************
    //بعد ان اخذت القيم التي تم ادخالها ووضعتها في مصفوفة لكل عنصر فيها انديكس 
    //الان سأقوم بحذف هذه العناصر واجعل الحقول فارغة حتى يتمكن المستخدم من ادخال قيم اخرى اذا كان يريد
    /*So we're going to go through the detailsForm and I starts at 0. And first time to the form, it's going 
    to say, okay, get element 0 from that form and sets its value to empty.*/
    for(let i=0 ; i < detailsForm.length; i++){
        detailsForm.elements[i].value="";
    }
    //**********create card here..**************
    const destCard= createDestinationCard (destName, destLocation, destPhoto, destDescription );
    
    /*سنقوم بتغيير العنوان الذي فوق الكارت فقط اذا كان الكارت يخلق لاول مرة ولم يتم قبله خلق اي كرت اخر  */
    //هنا سنرى اذا كان قسم الكارت فيه تشيلدرن من قبل او لا يوجد فيه نشيلدرن
    const wishListContainer= document.querySelector("#destinations_container");
    if(wishListContainer.children.length===0){
        document.querySelector("title").innerHTML="My Wish List";//the text change from (enter destination details to my wish list)
    }
    //**********add the card */
    const divContainerCard =document.querySelector("#destinations_container");
    divContainerCard.appendChild(destCard);
    }
    //*********create the card without passing values of input in it */
    function createDestinationCard (name, location, photo, description){
        console.log(photo);
        const card = document.createElement("div");
        card.className="card";
        
        const imgTag = document.createElement("img");
        imgTag.setAttribute('src', name);
        imgTag.setAttribute('width', '100%');
        const constantPhotoUrl= "images/signpost.jpg";
    if(photo.length==0){
        imgTag.setAttribute('src', constantPhotoUrl);
    }
    else{
        imgTag.setAttribute('src', photo);
    }
       card.appendChild(imgTag);
    
       const cardBody=document.createElement("div");
       cardBody.className="cardBody";
    
       const cardTitle=document.createElement("h3");
       cardTitle.innerText=name;
       cardBody.appendChild(cardTitle);
        
       const cardLocation=document.createElement("h4");
        cardLocation.innerText=location;
        cardBody.appendChild(cardLocation);
    
    if(description.length>0){//here the condition that the tutor used it is (description.length!==0), i'll check if that's the same
        const cardText=document.createElement("p");
       cardText.className="card_text";
       cardText.innerText=description;
       cardBody.appendChild(cardText);
    }
    
    const removeBtn=document.createElement("button");
       removeBtn.innerText="Remove";
       removeBtn.addEventListener('click', removeDestination);
       cardBody.appendChild(removeBtn);
    
       card.appendChild(cardBody);
    
       return card;
    }
    
    function removeDestination(event){
        const cardToRemove=event.target.parentElement.parentElement;
         cardToRemove.remove();
    }
    /*اذا كنت اريد ان احدد عنصر من ايفينت معين استخدم تارغت بعد التارغت اذهب للعنصر الذي اريد*/ 
    //target=cibler اي توجه للعنصر الفلاني الذي احدده بعد التارغت عندما يتم الحدث المطلوب
    
})();

