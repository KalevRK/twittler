$(document).ready(function(){
        
        function getLatestTweetStream() {
          var $body = $('body');
          $body.html('<div id="header"><h1 id="title">twittler</h1><h4 id="tagline">We put the l in twitter</h4></div>');
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
        };

        setInterval(getLatestTweetStream, 5000);

      });