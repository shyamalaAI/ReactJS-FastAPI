import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List


class Employee(BaseModel):
    name: str
    occupation: str


class Employees(BaseModel):
    employees: List[Employee]


app = FastAPI()


##Cross origin resource sharing , to avoid any other applciations
## accessing our resource ,trusted resources
# here we are specifying end point url
# this can be changed who can access ur application
## it could be other API acessing ur application
# you can change like : http://apptest:3000
## list of origns that are allowed
## here i am using react front end
origins = ["http://localhost:3000"]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

inmemory_db = {"employees": []}


@app.get("/employees", response_model=Employees)
def get_employees():
    return Employees(employees=inmemory_db["employees"])


@app.post("/addEmployee", response_model=Employee)
def add_Employee(emp: Employee):
    inmemory_db["employees"].append(emp)
    return emp


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
