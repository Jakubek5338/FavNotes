interface IAddNoteAction {
  type: 'addnote';
  _id: string;
  title: string;
  body: string;
}

interface IRemoveNoteAction {
  type: 'removenote';
  id: string;
}

interface IFetchItemsAction {
  type: 'fetchitems';
  items: Array<{ _id: string; title: string; body: string; creator: string; type: string; _v: string }>;
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
  | IRemoveSideAction
  | IFetchItemsAction;
