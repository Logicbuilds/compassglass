import { NotifyProps } from './components/Notify';

export type UserNote = Pick<
  NotifyProps,
  'appearance' | 'content' | 'subscript' | 'title' | 'identifier'
>;

export type UserNotes = Array<UserNote>;
