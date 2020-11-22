#! /bin/bash
mongoimport --host mongodb --db microfrontend --collection pays --type json --file /data/pays.json --jsonArray
mongoimport --host mongodb --db microfrontend --collection contracts --type json --file /data/contracts.json --jsonArray
mongoimport --host mongodb --db microfrontend --collection specialites --type json --file /data/specialites.json --jsonArray
mongoimport --host mongodb --db microfrontend --collection users --type json --file /data/users.json --jsonArray
mongoimport --host mongodb --db microfrontend --collection vacancies --type json --file /data/vacancies.json --jsonArray