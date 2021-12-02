interface IAddAction {
  type: 'add';
  payload: number;
}

interface ISubtransaction {
  type: 'subtract';
  payload: number;
}

interface IResetAction {
  type: 'reset';
}

interface IAddToDoAction {
  type: 'addtodo';
  payload: string;
}

interface IRemoveToDoAction {
  type: 'removetodo';
  payload: string;
}

export type Action = IAddAction | ISubtransaction | IResetAction | IAddToDoAction | IRemoveToDoAction;
