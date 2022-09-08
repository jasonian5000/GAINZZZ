import { createClient } from '@supabase/supabase-js';
import axios from "axios"
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabase = createClient(
  'https://okgrlcyatgvcsfbsfxnk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rZ3JsY3lhdGd2Y3NmYnNmeG5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI0OTE2NjksImV4cCI6MTk3ODA2NzY2OX0.5Zp1zq0Oj5yYcfw-McM5ZAQSMU110X5lmcu3R-Nzd5c'
);

const findUser = async () => {
    const {data} = await supabase
    .from("userTable")
    .select()
    console.log(data)
}

const getMuscleGroups = async () => {
const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '7555c9e913msh92629e7c5507e7cp1b8026jsna98c340ed373',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};
axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
}

export {
    findUser,
    getMuscleGroups
}