					// const function getZipCode

const defaultErrorMessage = "정확한 주소를 입력해주세요. ex. 용종로 97";
function getZipCode(query) {
  const appKey = 'b5a69fd8a74b7fb9e87eb9210d1a8546';
  const host = 'https://dapi.kakao.com';
  const resource = '/v2/local/search/address.json';
  const params = '?query=' + query;

  const headers = {
    'Authorization': 'KakaoAK ' + appKey
  }

  const options = {
    'headers' : headers
  }

	const response = UrlFetchApp.fetch(host + resource + params, options);

  response = JSON.parse(response);
  if (response.documents.length === 0) {
    const errorResult = {
      values: [defaultErrorMessage]
    };
    return JSON.stringify(errorResult);
  }
  const successResult = {
    values: [response.documents[0].road_address.zone_no]
  }
  return JSON.stringify(successResult);
}

					// from here starts kakao skill

const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	  extended: true
}));

app.use('/api', apiRouter);
						// 여기 근처가 문제인데
apiRouter.post('/params', function(req, res) {
	  const responseBody = {
		      version: "2.0",
		      template: {
			            outputs: [
					            {
							              simpleText: {
															text: getZipCode(req.body.query)
									                }
							            }
					          ]
			          }
		    };

	  res.status(200).send(responseBody);
});

app.listen(3000, function() {
	  console.log('Example skill server listening on port 3000!');
});
