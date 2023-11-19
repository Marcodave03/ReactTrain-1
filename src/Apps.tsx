import React from 'react';
import logo from './logo.svg';
import './App.css';

function Apps() {

  //Krisandy Trainer 2
  let value = " hello world";

  const printName = () => {
    return(
      <div>
        pppppp
      </div>
    )
  }

  //Trainer 3
  interface IPatient extends Partial<IMedicine>{ // inheritance 
    nama:string,
    umur:number | null | undefined, //bisa null kalau data kosong 
    symptoms:string
    diagnosis?: string
  }

  interface IMedicine { 
    namaMed : string,
    dosis : number,
    detail : `prescribed` | `not prescribed`
  }

  // menerapkan typescript
  const currentPatient:IPatient = {
    nama:"Shana",
    umur:17,
    symptoms:"Nausea",
    diagnosis:"Influenza",
    namaMed: "Paracetamol",
    dosis: 2,
    detail: 'not prescribed'
  }

  const displayCurrentPatient = (patient:IPatient) => {
    return(
      <>
       <h2>{`Current Patient Name: ${patient.nama}`}</h2>
       <h2>{`Current Patient Umur: ${patient.umur}`}</h2>
       <h2>{`Current Patient Symptoms: ${patient.symptoms}`}</h2>
       <h2>{`Current Patient Diagnosis: ${patient.diagnosis}`}</h2>

       <h2>{`Current Patient Medicine Name: ${patient.namaMed}`}</h2>
       <h2>{`Current Patient Dosis: ${patient.dosis}`}</h2>
       <h2>{`Current Patient Detail: ${patient.detail}`}</h2>
      </>
    )
  }

  const patients:IPatient[] = [
    {nama:"Kuka", umur: 20, symptoms: "Headache"},
    {nama:"Angel", umur: 21, symptoms: "Stomachache"},
    {nama:"Ivan", umur: 20, symptoms: "SakitHati"},
  ]

  const displayQueuedPatient = (patient:IPatient[]) => {
    return(
    patient.map((person,index)=>{
      const diagnosis = person.diagnosis;
      return(
        <>
        <br/>
        <h2>{`Queued Number : ${index+1}`}</h2>
        <h2>{`Patient Name : ${person.nama}`}</h2>
        <h2>{`Patient Age : ${person.umur}`}</h2>
        <h2>{`Patient Symptoms : ${person.symptoms}`}</h2>
        <h2>{`Current Patient Diagnosis: ${diagnosis?diagnosis:"-"}`}</h2>
        <br/>
        </>
      )
    }
    ))
  }

  return (
    <div className="Apps">

      {displayCurrentPatient(currentPatient)}

      {displayQueuedPatient(patients)}

    </div>
  );
}

export default Apps;
