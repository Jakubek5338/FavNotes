interface IAddNoteAction {
  type: 'addnote';
  title: string;
  body: string;
}

interface IRemoveNoteAction {
  type: 'removenote';
  payload: string;
}

interface IAddToDoAction {
  type: 'addtodo';
  payload: string;
}

interface IRemoveToDoAction {
  type: 'removetodo';
  payload: string;
}

interface IAddSideAction {
  type: 'addside';
  payload: string;
}

interface IRemoveSideAction {
  type: 'removeside';
  payload: string;
}

export type Action =
  | IAddNoteAction
  | IRemoveNoteAction
  | IAddToDoAction
  | IRemoveToDoAction
  | IAddSideAction
  | IRemoveSideAction;
