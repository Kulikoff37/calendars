import { Observable } from 'rxjs';

export interface UseCase<S, T> {
  execute(param1?: S, param2?: S): Observable<T>;
}