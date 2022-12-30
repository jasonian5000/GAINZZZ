import { Home } from "./Main";
import LoginPage from "./Login/LoginPage";
import SignUpPage from "./SignUp/SignUpPage";
import { AccountInformation } from "./Account Info";
import PersonalTrainers from "./PT/PersonalTrainers";
import Workout from "./Exercises/Workout";
import Exercise from "./Exercises/Exercise";
import ErrorPage from "./Main/ErrorPage";
import {Footer} from "./Main";
import NavBar from "./NavBar/NavBar";
import supabase from "../actions/supabaseClient";

export {
    Home,
    LoginPage,
    SignUpPage,
    AccountInformation,
    PersonalTrainers,
    Workout,
    Exercise,
    ErrorPage,
    Footer,
    NavBar,
    supabase
}