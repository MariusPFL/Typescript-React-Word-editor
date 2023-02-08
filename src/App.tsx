import logo from './logo.svg';
import React from 'react';
import './App.css';
import {DocumentEditorContainerComponent, Toolbar, Inject} from "@syncfusion/ej2-react-documenteditor"
import {registerLicense} from "@syncfusion/ej2-base"

function App() {
  registerLicense("Mgo+DSMBaFt/QHRqVVhkVFpHaVZdX2NLfUN3RWlYelRyc0U3HVdTRHRcQl9jTn9Td0BhXnZbdH0=;Mgo+DSMBPh8sVXJ0S0J+XE9AflRBQmpWfFN0RnNYf1RxcV9EZ0wgOX1dQl9gSXxTcURjWHpcd31SRWQ=;ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxAYVF2R2BJfl56dVBMYltBNQtUQF1hSn5RdkJiWX5bcnxVRmFY;MTA4MTQ5M0AzMjMwMmUzNDJlMzBYSVA4S1U4Zzl3dDJISDNSRVdkb0hua055RVQ2TUEwTTBGMUYwUEdSSkJjPQ==;MTA4MTQ5NEAzMjMwMmUzNDJlMzBoVldIRGJJVmIzSzAzWlB3L0E1aXpmcUkyeE4wUDcycGVsWEZqN3hlb0pRPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmBWd0x0RWFab19wflRDal5WVAciSV9jS31TdEVkWH9fdXZdRmhdVQ==;MTA4MTQ5NkAzMjMwMmUzNDJlMzBqSzE1cnpRempzRUI3b0FJRDFNd2JpUlFDZVZMc0xnU29qYVYvVjF1aDJJPQ==;MTA4MTQ5N0AzMjMwMmUzNDJlMzBObFZUN2NINmNUa3JGNEpra0JDbTdybS85NUhBbU5yZ1RUczJCU3g1cUZnPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXnxAYVF2R2BJfl56dVBMYltBNQtUQF1hSn5RdkJiWX5bcnxUQGNY;MTA4MTQ5OUAzMjMwMmUzNDJlMzBNVnh4UGJYN281SDYvREwydlYvZTF0Z0JrbG1CMlRLYnQxNEd2YjZoYjFvPQ==;MTA4MTUwMEAzMjMwMmUzNDJlMzBVdis4aTRoVURZSjcrS2ZmdFJpUnVRYzVIanJrZEFNNEFuTThqMWVVTWY0PQ==;MTA4MTUwMUAzMjMwMmUzNDJlMzBqSzE1cnpRempzRUI3b0FJRDFNd2JpUlFDZVZMc0xnU29qYVYvVjF1aDJJPQ==")
  console.warn('App starts')
  console.warn('Starts building syncfusion ej2 DocumentEditorContainer');
  let editorObj: DocumentEditorContainerComponent | null;
  const DEFAULTFILENAME = "MariusWriterOnline"
  const [documentName, setDocumentName] = React.useState(DEFAULTFILENAME);

  function saveAsDocx() {
    console.warn('Starts saving as docx')
    editorObj?.documentEditor.save(documentName, "Docx");
  }
  return (
    <div className="App">
      <DocumentEditorContainerComponent ref={(ins=>editorObj=ins)} height='590' enableToolbar={true}>
        <Inject services={[Toolbar]}></Inject>
      </DocumentEditorContainerComponent>
      <input id="tbDocumentName" name="tbDocumentName" placeholder='Give Filename directly' type="text" onChange={(event) => event.target.value == "" ? setDocumentName(DEFAULTFILENAME) :  setDocumentName(event.target.value)} />
      <button onClick={saveAsDocx}>Save as docx</button>
    </div>
  );
}
export default App;