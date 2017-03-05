// Wait for the DOM to be ready
       $(document).ready(function() {
           // Use JQuery promises to make AJAX XMLHttpRequest
           promise = $.ajax({
               type:"GET",
               url:"ftp://webftp.vancouver.ca/opendata/bike_rack/BikeRackData.csv",
               cache:false
           });

           promise.done(function(data){

               //Parse CSV File
               //split on new line
               var dataArr = data.split("\n");

               //for each line in array
               $.each(dataArr,function(){
                   if (this != "") {

                       //split files and create row
                       var row = new String("");
                       valArr = this.split(",");
                           row += "<tr>"

                       $.each(valArr, function(){
                           row += "<td>" + this +"</td>"
                       });

                           row += "</tr>"

                           //Add row to table
                           $('tbody').append(row);

                   }

               });

           });

           // Run script if request fails
           promise.fail(function() {
              console.log('A failure ocurred');
           });

       });
