$(document).ready(function(){
        
        function getLatestTweetStream() {
          var $body = $('body');
          $body.html('<div id="header"><h1 id="title">twittler</h1><h4 id="tagline">we put the l in twitter</h4></div>');
          $body.append('<div id="timeline">');
          var index = streams.home.length - 1;
          while(index >= 0){
            var tweet = streams.home[index];
            var $tweet = $('<div class="tweet">');
            $tweet.append('<div class="user">@' + tweet.user + '</div>');
            $tweet.append('<div class="timestamp">' + jQuery.timeago(tweet.created_at) + '</div>');
            $tweet.append('<div class="message">' + tweet.message + '</div>');
            $tweet.append('</div>');
            $tweet.appendTo($body);
            index -= 1;
          }
          $body.append('</div>');


          //event handler code for username div
          // NOTE: inserted into the getLatestTweetStream function so that it would be applied
          // each time that the page is automatically refreshed

          // Display a specific user's timeline of their tweets if their username is clicked on
          $('.user').on('click', function() {
          // get the username of the user that was clicked on
          var user = $(this).text();
          user = user.substring(1, user.length);
          var userTweets = streams.users[user];
          // build the HTML to display the list of tweets for that user
          var $body = $('body');
          $body.html('<div id="header"><h1 id="title">twittler</h1><h4 id="tagline">we put the l in twitter</h4></div>');
          $body.append('<div id="timeline">');
          var index = userTweets.length - 1;
          while(index >= 0){
            var tweet = userTweets[index];
            var $tweet = $('<div class="tweet">');
            $tweet.append('<div class="user">@' + tweet.user + '</div>');
            $tweet.append('<div class="timestamp">' + jQuery.timeago(tweet.created_at) + '</div>');
            $tweet.append('<div class="message">' + tweet.message + '</div>');
            $tweet.append('</div>');
            $tweet.appendTo($body);
            index -= 1;
          }
          $body.append('</div>');
        });

        $('.user').on('mouseenter', function() {
          $(this).addClass("highlight");
        });
   
        $('.user').on('mouseleave', function() {
          $(this).removeClass("highlight");
        });


        };
        
        getLatestTweetStream();
        setInterval(getLatestTweetStream, 10000);

});