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

export type Action = IAddAction | ISubtransaction | IResetAction;
