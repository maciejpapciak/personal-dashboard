import { Header } from "@/components/layout/Header";
import MainContent from "./components/layout/MainContent";
import React from "react";
import Register from "./Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from "./Login";


export type UserData = {
  email:string,
  profileColor: string
}

export const UserContext = createContext<UserData | null>(null)

function App() {

  const queryClient = new QueryClient()

  const [isLogged, setIsLogged] = React.useState(false)
  const [userData, setUserData] = React.useState<UserData>({email: '', profileColor: ''})

 
   return (
     <UserContext.Provider value={userData}>
      <QueryClientProvider client={queryClient}>
        {isLogged ? <div><Header /> <MainContent /></div> : 
          <Tabs defaultValue="register" className="w-[600px]">
              <TabsList>
                  <TabsTrigger value="register">Register</TabsTrigger>
                  <TabsTrigger value="login">Login</TabsTrigger>
              </TabsList>
              <TabsContent value="register">
                  <Register setIsLogged={setIsLogged} setUserData={setUserData} />
              </TabsContent>
              <TabsContent value="login">
                  <Login setIsLogged={setIsLogged} setUserData={setUserData} />
              </TabsContent>
          </Tabs>
        }
      </QueryClientProvider>
        
     </UserContext.Provider>
   );
}

export default App;
