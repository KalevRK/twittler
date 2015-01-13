$(document).ready(function(){
        
        function getLatestTweetStream() {
          var $body = $('body');
          $body.html('<div id="timeline"><ul>');
          var index = streams.home.length - 1;
          while(index >= 0){
            var tweet = streams.home[index];
            var $tweet = $('<li class="tweet">');
            $tweet.append('<div class="user">@' + tweet.user + '</div>');
            $tweet.append('<div class="timestamp"> - ' + jQuery.timeago(tweet.created_at) + '</div>');
            $tweet.append('<div class="message">' + tweet.message + '</div>');
            $tweet.append('</li>');
            $tweet.appendTo($body);
            index -= 1;
          }
          $body.append('</ul></div>');
        };

        setInterval(getLatestTweetStream, 2000);

      });