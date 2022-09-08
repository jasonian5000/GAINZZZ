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

const listByBodyPart = async () => { 
const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20arms',
  // need to add input field or dropdown to choose body part from the above function
  // replace %7BbodyPart%7D with dropdown request (example: upper%20arms)
  // maybe make multiple routes? will discuss. 
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

const exerciseByID = async () => {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises/exercise/0019',
      // make dropdown menu that selects specific exercise ID and prints it (replace ID at end of URL with dropdown menu)
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

const listOfTargetMuscles = async () => {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises/targetList',
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

const listWorkoutsByTargetMuscle = async () => {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises/name/biceps',
      // make dropdown menu that allows user to choose target muscle (replace biceps at end of url with dropdown options)
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

const listAllWorkouts = async () => {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises',
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

const listOfEquipment = async () => {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises/equipmentList',
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

const listByEquipment = async () => {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises/equipment/barbell',
      // make dropdown menu that allows user to choose by equipment (replace barbell at end of url with dropdown options)
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
  getMuscleGroups,
  listByBodyPart,
  exerciseByID,
  listOfTargetMuscles,
  listWorkoutsByTargetMuscle,
  listAllWorkouts,
  listOfEquipment,
  listByEquipment,
};