  document.getElementById('myForm').addEventListener('submit',bookMarkAdd);

  //save bookmark
  function bookMarkAdd(e) {
//Get Details from values
    var siteName = document.getElementById('siteName').value;
     var siteUrl = document.getElementById('siteUrl').value;
     
     if (!siteName || !siteUrl) {
        alert('Please fill in the form');
        return false ;
     }

   var expression = /[-a-zA-Z0-9@:%_\+,~#?&//=]{2,256}\.{a-z}{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//*]*})?/gi;
     var regex = new RegExp(expression);

    if(siteUrl.match(regex)){
       alert('Please use a Valid URL or copy the link and paste here');
       return false;
     }
     

      var bookmark = {
      	name : siteName,
      	url : siteUrl 
      } 

      console.log(bookmark) ;
    
  if (localStorage.getItem('bookmarks') === null) {
  	 // create an array for bookmarks
  	 var bookmarks = [] ;
        // add the new data to the bookmarks array
  	  bookmarks.push(bookmark);
        // store  the bookmarks array as a string in the local storage
  	  localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
       
      
  }
   else {
      // call  the localstorage and set the string as json to the bookmarks variable 
  	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
       //  add the new data to the bookmarks array
  	 bookmarks.push(bookmark);
        //  store  the bookmarks array as a string in the local storage
  	  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
 
    //Reset page bookmark
    getBookmark();
    // Clear Form After Input 
    document.getElementById('myForm').reset();
    //prevent from resubmitting
  	e.preventDefault();
  }

function del(url ){
        
   console.log(url);

   // get bookmarks
     var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      // loop over to find the bookmark to delete
       for (let i = 0; i < bookmarks.length; i++) {
          if (bookmarks[i].url == url) {
            //Remove
            bookmarks.splice(i,1); 
            
          }
          //Reset local storage
          localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

          //Reset Page bookmarks
         getBookmark();

       }

  	} 


 function getBookmark(){
    // get bookmarks from localstorage
  		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        var bookmarksResults = document.getElementById('bookmarksResult');
         bookmarksResult.innerHTML = '';

         for (var i = 0; i < bookmarks.length; i++){

         	var name = bookmarks[i].name ;
         	var url = bookmarks[i].url ;

         	bookmarksResult.innerHTML += '<div class="well">' +
         	                              ' <h3>'+name+'</h3>' +
         	                              '<a class="btn btn-primary" target="_blank" href= "'+url+'">Visit </a>'+
         	                              ' <a onclick="del(\''+url+'\')" class = "btn btn-warning" href= "#">Delete</a>'+ 
        							      '</div>' 

                            }

  }



