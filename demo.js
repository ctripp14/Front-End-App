function query() {
    var apiUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=*&limit=10&offset=0&order=release_dates.date%3Adesc&search=";
    var criteria = $("#keywords").val();
	var encoded = encodeURIComponent(criteria);
	var coverURL = "";
	apiUrl = apiUrl + encoded;
	var key = "dxK6M0nyr9mshvVjxr9d1wQWT2iMp1tkD5Jjsn3GEdhtLA297F";
    if (criteria.length > 0) {
        $("#results").empty();
        
		$.ajax({
          url: apiUrl,
          type: 'GET',
          dataType: 'json',
          success: function() { alert(apiUrl); },
          error: function() { alert('boo!'); },
          beforeSend: setHeader
        }).done(function(data) {
            $("#rawData").val(JSON.stringify(data));
            $("<table>").attr("id", "resultsTable").appendTo("#results");
            console.log(data);
			$.each(data, function(i, item) {
				if (item.cover != null){
					coverURL = item.cover.url;
				}
				else{
					coverURL = "//placehold.it/90x100";
				}
				$("<tr>").append(
					$("<td>").html(item.name),
					$("<td>").html(item.first_release_date),
					$("<td>").append("<img src=http:" + coverURL + "></img>")

				).appendTo("#resultsTable");
				
             });
        });
		
    }

      function setHeader(xhr) {
        xhr.setRequestHeader("X-Mashape-Key", key);
        xhr.setRequestHeader("Accept", "application/json");

      }
}
