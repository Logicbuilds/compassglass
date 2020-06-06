import { UserNote, UserNotes } from 'application/models';

export type UserNoteIDs = 'NICE_TOAST' | 'NAUGHTY_TOAST';

export const userNotes: UserNotes = [
  {
    identifier: 'NICE_TOAST',
    appearance: 'success',
    title: 'Title, hos hos',
    content: 'This is my lovely toasty!!',
    subscript: 'Hello from the bottom',
  },
  {
    identifier: 'NAUGHTY_TOAST',
    appearance: 'warning',
    title: 'Booooooooya!!',
    content: 'This is my ****** toasty!!',
    subscript: 'Hello from the unkown',
  },
];

export const notifyService = (identifier: UserNoteIDs): UserNote | null => {
  return userNotes.find((note) => note.identifier === identifier) || null;
};
