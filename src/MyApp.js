import React from "react";
import Table from "./Table";

const characters = [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
];

function MyApp() {
    return (
        <div>
            <h1>Hello, React!</h1>
      
            <div className="container">
                <Table characterData={characters} />
            </div>
        </div>
    );  
}

export default MyApp;