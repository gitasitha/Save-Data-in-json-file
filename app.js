const db = require("./guestdb.js");//get db file
const yargs= require("yargs");//get yargs

//add command
yargs.command({
    command:'add',
    describe:'to add a guest',
    builder:{
        name:{
            describe:'Name',
            demandOption:true,
            type:'string'
        },
        address:{
            describe:'Address',
            demandOption:true,
            type:'string'
        },
        contact_no:{
            describe:'Contact',
            demandOption:true,
            type:'string'

        },
        visit_date:{
            describe:'Visit',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        db.addGuest(yargs.argv.name,yargs.argv.address,yargs.argv.contact_no,yargs.argv.visit_date);
    }
});

//update command
yargs.command({
    command:'update',
    describe:'to add a update',
    builder:{
        id:{
            describe:'ID',
            demandOption:true,
            type:"number"
        },
        name:{
            describe:'Name',
            type:'string'
        },
        address:{
            describe:'Address',
            type:'string'
        },
        contact_no:{
            describe:'Contact',
            type:'string'

        },
        visit_date:{
            describe:'Visit',
            type:'string'
        }
    },
    handler:function(argv){
        db.updateGuest(yargs.argv.id,yargs.argv.name,yargs.argv.address,yargs.argv.contact_no,yargs.argv.visit_date);
    }
});

//delete command
yargs.command({
    command:'delete',
    describe:'to add a delete',
    builder:{
        id:{
            describe:'ID',
            demandOption:true,
            type:"number"
        }
    },
    handler:function(argv){
        db.deleteGuest(yargs.argv.id);
    }
});

//id
yargs.command({
    command:'read',
    describe:'to add a read',
    builder:{
        id:{
            describe:'ID',
            demandOption:true,
            type:"number"
        }
    },
    handler:function(argv){
        db.readGuest(yargs.argv.id);
    }
});

//list
yargs.command({
    command:'list',
    describe:'List All Guest',
    handler:function(){
        db.listGuest();
    }

});

yargs.parse();