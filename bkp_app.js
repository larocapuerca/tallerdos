var Twitter = require('twitter');
 
var client = new Twitter({
  //API 1
  // consumer_key: '0koJJXFOFhm830HVXYvjLWO2S',
  // consumer_secret: 'YIty1aj6uKYSRJTgUEkS6w36hKwuyvZdJPLhIq2Pnc7p3PEhI5',
  // access_token_key: '142500277-MNDZxM1moBIWCjvcvCpCfhqNy3Jj0mUYnjsWyFCi',
  // access_token_secret: 'nnieHsh1TzvAVxDC6Z8EQ4Xc4DiWtVBPaQn9CE8rhWLJG'
  //API 2
  // consumer_key: 'uzxEhMcd78wlY6jG8f2A',
  // consumer_secret: 'L1M6cbjXQB69218oJbEi1E2SuD53sIsaGmuO0n2jXk',
  // access_token_key: '762504943-2julQvMq2z22JHWBGGi4EZlOeVnbldq5O1ABlK3e',
  // access_token_secret: 'AFsqwg0a3g9ZXY3vZL5NmhPdLuAdoQt6wWjuk5bAg'
  //API 3
  // consumer_key: 'Lt1THtQDHVUZNmVu1MSnjQ',
  // consumer_secret: '1D2HIJr9mJ45hPC4ZPLI2s3vRv2I3b3Vsh6yDBjhk0',
  // access_token_key: '762504943-CFZ5RECfW6CvqWQlMEKAM6gYd8MOlgs7qQp9zCkl',
  // access_token_secret: 'galU64ISQepz0kZKeOfT9MzFIkVuRxWvwtZLWqdCij4'
  //API 4
  consumer_key: '3NRvOVtfk8jcqwSdflKc2yLiP',
  consumer_secret: 'AlmHcJ5LQi9Ye9zuwHRbvAPNt344hT3w5vuLbL68xVd7FkMnXq',
  access_token_key: '762504943-swMOhfEz0oDFRG9TISMaEhWKoTwlYsSwZYo8quRF',
  access_token_secret: '7lCqO3bUIG5SkP3qhuPVbNimy1P2lOrPtuqgzDDiqYRob'
  //API 5
  // consumer_key: 'qIh0mbXGhkWWyXW6nvymd2AQW',
  // consumer_secret: '6Oe9Kz0eFLnbs1snSEZEyTT1M0vArk8lnFIq7JE6LSxs7kbQzP',
  // access_token_key: '762504943-8TOy7ogygWjIC5VpNonjWyEvuD6Apvdf8Y2S5Gmu',
  // access_token_secret: 'Vs0iz7PowN8wm5OesQFPN32uraKAjCtyNh20yTzL4gneU'
});
 
var limite= 1;
var ejecutar = process.argv[2];


//Parametros para user_timeline
//var params = {screen_name: 'larocapuerca', since_id:568121154617024499};
//var metodo = 'users/show';


switch(ejecutar) {
    case '0':
        //Parametros para user_timeline
	var params = {screen_name: 'larocapuerca', max_id:4};
	var metodo = 'statuses/user_timeline';
	llamaTimeLine(0);
        break;
    case '1':
	//Parametros para search/tweets
	var params = {q: 'hola mundo'};
	var metodo = 'search/tweets';
	llamaSearchTweet(0);
        break;
    case '2':
	//Parametros para users/search
	var params = {q: 'larocapuerca'};
	var metodo = 'users/search';
	llamaUserSearch(0);
        break;
    case '3':
	//Parametros para users/search
	var params = {screen_name: 'larocapuerca'};
	var metodo = 'users/show';
	llamaUserSearch(0);
        break;		
    default:
        console.log("Debe ingresar el nro de accion a ejecutar");
	console.log("0 = statuses/user_timeline");
        console.log("1 = search/tweets");
        console.log("2 = users/search");
	console.log("3 = users/show");
}


function llamaSearchTweet(x){
		client.get(metodo, params, function(error, tweets, response){
		var date = new Date();
		var time = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
		  if (!error) {
			 for(t in tweets.statuses)
				console.log(parseInt(t)+1,tweets.statuses[t].id, tweets.statuses[t].text);
			console.log(x,'Ejecutado correctamente', time);
		  }
		  else{
			console.log(x,'Excedido request ',time);
			x=limite;
			}
			
		x++;
		if(x<limite)
			llama(x);	
		});

}

function llamaTimeLine(x){
		client.get(metodo, params, function(error, tweets, response){
		var date = new Date();
		var time = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
		  if (!error) {
			 if(tweets.length){
				for(t in tweets)
					console.log(parseInt(t)+1,tweets[t].id,tweets[t].text);
				console.log(x,'Ejecutado correctamente', time);
		  }
		  else{
			console.log(x,'Excedido request ',time);
			x=limite;
			}
			
		x++;
		if(x<limite)
			llama(x);	
		});

}

function llamaUserSearch(llamar){
		client.get(metodo, params, function(error, tweets, response){
		var date = new Date();
		var time = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
		  if (!error) {
			console.log(tweets);
			// for(t in tweets)
			//	console.log(parseInt(t)+1,tweets[t].id,tweets[t].text);
			console.log(x,'Ejecutado correctamente', time);
			}
		  else	
			 llamar = false
		  }
		  else{
			console.log(x,'Excedido request ',time);
			x=limite;
			}
			
		x++;
		if(llamar)
			llama(true);	
		});

}

