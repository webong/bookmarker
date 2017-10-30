  document.getElementById('myForm').addEventListener('submit',bookMarkAdd);

  function bookMarkAdd(e) {

    var siteName = document.getElementById('siteName').value;
     var siteUrl = document.getElementById('siteUrl').value;
     

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
       
       getBookmark();
  }
   else {
      // call  the localstorage and set the string as json to the bookmarks variable 
  	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
       //  add the new data to the bookmarks array
  	 bookmarks.push(bookmark);
        //  store  the bookmarks array as a string in the local storage
  	  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
     
     getBookmark();
  }

  	e.preventDefault();
  }

function del(url ){
        
   console.log(url);

  	} 


 function getBookmark(){
  		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        var bookmarksResults = document.getElementById('bookmarksResult');
         bookmarksResult.innerHTML = '';

         for (var i = 0; i < bookmarks.length; i++){

         	var name = bookmarks[i].name ;
         	var url = bookmarks[i].url ;

         	bookmarksResult.innerHTML += '<div class="well">' +
         	                              ' <h3>'+name+'</h3>' +
         	                              '<a class="btn btn-primary" target="_blank" href= "'+url+'">Visit </a>'+
         	                              ' <a onclick="del(`${url}`)" class = "btn btn-warning" href= "#">Delete</a>'+
        							      '</div>' 

                            }

  }



