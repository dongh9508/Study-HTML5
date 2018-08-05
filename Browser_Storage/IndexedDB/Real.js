
$(document).ready(function () {  
  // windowwindow.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;  
  var request, db;  


  // Code for declare database and check browser capibility  
  if (!window.indexedDB) {  
      console.log("Your Browser does not support IndexedDB");  
  }  
  else {  
      request = window.indexedDB.open("MemoDB", 25);  
      request.onerror = function (event) {  
          console.log("Error opening DB", event);  
      }  
      request.onupgradeneeded = function (event) {  
          console.log("Upgrading");  
          db = event.target.result;  
          var objectStore = db.createObjectStore("MemoTextField", { keyPath: "textNo", autoIncrement: true });  
           
      }  
      request.onsuccess = function (event) {  
          console.log("Success opening DB");  
          db = event.target.result;  

      }  
  }  

  // Code for Add New Record in IndexedDB  
  $("#addBtn").click(function () {  
      var title = $('#title').val();  
      var content = $('#content').val();  
       

      var transaction = db.transaction(["MemoTextField"], "readwrite");  

      var objectStore = transaction.objectStore("MemoTextField");  
      objectStore.add({ Title: title, Content: content });  

      transaction.oncomplete = function (event) {  
          console.log("Success :)");  
          $('#result').html("Add: Successfully");  

      };  

      transaction.onerror = function (event) {  
          console.log("Error :)");  
          $('#result').html("Add: Error occurs in inserting");  
      };  


      ClearTextBox();  
      showAllDataMethod();  

  });  


  // Code for Read Data from Indexed on for edit(Single Record)  
  $('#btnShow').click(function () {  
      
      var id = parseInt($('#txtSearch').val());  
      var request = db.transaction(["MemoTextField"], "readonly").objectStore("MemoTextField").get(id);  
      request.onsuccess = function (event) {  
          var r = request.result;  
          if (r != null) {  
              $('#title').val(r.Title);  
              $('#content').val(r.Content);   
          } else {  
              ClearTextBox();  
              alert('Record Does not exist');  
          }  

      };  
  });  


  // Code for Clear text Box  
  $('#clearBtn').click(function () {  
      ClearTextBox();  

  });  


  function ClearTextBox() {  
      $('#title').val('');  
      $('#content').val('');    
      $('#txtSearch').val('');  
  }  

  // Code for Update record on IndexedDB  
  $('#updateBtn').click(function () {  

      var rollNo = parseInt($('#txtSearch').val());  
      var title = $('#title').val();  
      var content = $('#content').val();    

      var transaction = db.transaction(["MemoTextField"], "readwrite");  
      var objectStore = transaction.objectStore("MemoTextField");  
      var request = objectStore.get(rollNo);  
      request.onsuccess = function (event) {  

          request.result.Title = title;  
          request.result.Content = content;   
          objectStore.put(request.result);  
          alert('Recored Updated Successfully !!!');  
      };  

  });  


  //Code for Deleting record from indexedDB  
  $('#deleteBtn').click(function () {  
      var id = parseInt($('#txtSearch').val());  
      db.transaction(["MemoTextField"], "readwrite").objectStore("MemoTextField").delete(id);  
      alert(' Recored No. ' + id + ' Deleted Successfully !!!');  
      showAllDataMethod();  
  });  

  $('#btnShowAll').click(function () {  
      //Calling funtin for show all data from IndexedDB  
      showAllDataMethod();  
  });  


  // Code for Show All Data From IndexedDB  
  function showAllDataMethod() {  
      var request = db.transaction(["MemoTextField"], "readonly").objectStore("MemoTextField").getAll();  
      request.onsuccess = function (event) {  
          var obj = request.result  
          var table = '<table><thead> <th>ID</th> <th>Title</th> <th>Content</th>   </thead><tbody>';  
          $.each(obj, function () {  
              table += '<tr><td>' + this['textNo'] + '</td> <td>' + this['Title'] + '</td>  <td>' + this['Content'] + '</td></tr>';  
          });  
          table += '</tbody></table>';  
          $("#datalist").html(table);  
      };  
  }  
});  

