//DB
const fs = require('node:fs');//import file system.
const db_file="data.json";//data file

const addGuest=(name,address,contact_no,visit_date)=>{
    const guests=loadGuest();
    const length=guests.length;
    let id=1;
    if(length>0){
        id=guests[length-1].id+1;
    }
    guests.push({
        id,
        name,
        address,
        contact_no,
        visit_date
    });
    saveGuest(guests);
    console.log("Data saved!");
};
const updateGuest=(id,name,address,contact_no,visit_date)=>{
    const guests=loadGuest();
    const guestIndex=guests.findIndex((guest)=>{
        return guest.id==id;
    });
    if(guestIndex!=-1){
        const guest=guests[guestIndex];
        guest.name=name?name:guest.name;
        guest.address=address?address:guest.address;
        guest.contact_no=contact_no?contact_no:guest.contact_no;
        guest.visit_date=visit_date?visit_date:guest.visit_date;

        console.log("Update Guest!",id);
        saveGuest(guests);
    }else{
        console.log("Not found Guest!");
    }
};
const deleteGuest=(id)=>{
    const guests=loadGuest();
    const newGuests=guests.filter((guest)=>{
        return guest.id!=id;
    });
   if(guests.length>newGuests.length){
    saveGuest(newGuests);
    console.log("Delete "+id+" guest" );
   }else{
    console.log("Not found Guest!");
   }
};
const readGuest=(id)=>{
    const guests=loadGuest();
    const guest=guests.find((guest)=>{
        return guest.id==id;
    });
    if(guest){
        console.log(guest);
    }else{
        console.log("Not found Guest!")
    }
};
const listGuest=()=>{
    const guests=loadGuest();
    if(guests.length>0){
        guests.forEach((guest)=>{
            console.log(guest);
        })
    }else{
        console.log("No guest list found!");
    }
};

const saveGuest=(guests)=>{
    const dataJson=JSON.stringify(guests);
    fs.writeFileSync(db_file,dataJson);
};

const loadGuest=()=>{
    try{
        const dataBuffer=fs.readFileSync(db_file);
        const dataJson=dataBuffer.toString();
        const data=JSON.parse(dataJson);
        return data;
    }catch(e){
        return [];//some time deleted of the data file creata new data file.
    }
}

module.exports={addGuest,updateGuest,deleteGuest,readGuest,listGuest};