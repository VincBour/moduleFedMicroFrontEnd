FROM mongo

COPY paysSeed.json /pays.json

CMD mongoimport --host mongodb --db microfrontend --collection pays --type json --file /pays.json --jsonArray


