export enum AppRoute {
  Login = '/login',
  Main = '/',
  Room = '/property/:offer/:id',
  Favorities = '/favorities',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
