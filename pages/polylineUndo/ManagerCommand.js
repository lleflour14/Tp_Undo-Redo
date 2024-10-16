import Stack from "./stack";


class UndoManager{
    constructor() {
        this.pileUndo = new Stack();
    }

    execute(commande){
        this.pileUndo.push(commande);
        commande.execute();
    };
   
    undo(){  
        let commande = this.pileUndo.pop();
        commande.undo();
        
    };

    redo(){};

    CanUndo(){};
    CanRedo(){};

}

export default UndoManager;

