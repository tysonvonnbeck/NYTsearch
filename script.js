



$("#search").on("click", function search(event){
        // DEFINING VARIABLES
        var articleName = $(this).val();
        var articleCount = $("#records").val();
        var startYear= $("#startYear").val();
        var endYear= $("#endYear").val();
        
        
        var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${articleName}&api-key=zJmGFBn312JNjAca1zHYqrqz41f0DB3i`


        // AJAXXX
        $.ajax({
            url: placeholderURL,
            method: "GET"
        }).then(function(response){
            console.log(response)
        })
    
        //append aritcles to div
        for (let index = 0; index < array.length; index++) {
            articleDiv.append(response.title);
            
        }
})



// keyword: /articlesearch.json?q={query}&fq={filter}
//  https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey