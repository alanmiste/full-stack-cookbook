import { Switch, Route } from "react-router";
import MainLayout from "./MainLayout";
import Home from "../components/Pages/home";
import Pizza from "../components/Pages/pizza";
import Dessert from "../components/Pages/dessert";
import Noodle from "../components/Pages/noodle";
import NotFound from '../components/Pages/NotFound'
import OneRecipe from '../components/Pages/oneRecipe'
import { useEffect, useContext } from 'react'
import {RecipeContext} from '../components/Context/context'
import AddRecipe from '../components/Pages/addRecipe'
import LoginPage from "../components/Pages/loginPage";
 
export default function Routes() {

  const {pullRecipes} = useContext(RecipeContext)
  useEffect(()=> pullRecipes(),[])

    return (
       
        <Switch>
          <Route path='/' exact>
            <MainLayout>
              <Route component={Home} />
            </MainLayout>
          </Route>

          <Route path='/pizza' exact >
            <MainLayout>
              <Route component={Pizza} />
            </MainLayout>
          </Route>

          <Route path='/oneRecipe/:id' exact >
            <MainLayout>
              <Route component={OneRecipe} />
            </MainLayout>
          </Route>

          <Route path='/dessert' exact >
            <MainLayout>
              <Route component={Dessert} />
            </MainLayout>
          </Route>
          <Route path='/noodle' exact >
            <MainLayout>
              <Route component={Noodle} />
            </MainLayout>
          </Route>

          <Route path='/loginPage' exact >
            <MainLayout>
              <Route component={LoginPage} />
            </MainLayout>
          </Route>

          <Route exact>
            <MainLayout>
              <Route component={NotFound} />
            </MainLayout>
          </Route>

          {/* <Route path='/users' exact >
            <SimpleLayout>
              <Route component={Users} />
            </SimpleLayout>
          </Route>
          <Route path='/user:id' exact component={User}>
            <SimpleLayout>
              <Route component={Users} />
            </SimpleLayout>
          </Route>

          <Redirect from='/login' to='/users' /> 

         */}
        </Switch>

        )
}