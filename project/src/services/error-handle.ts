import { HTTP_CODE } from './../const';
import { setError } from './../store/action';
import { store } from './../store/index';
import request from 'axios';
import { clearErrorAction } from '../store/api-action';

export const errorHandle = (error: unknown): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message: string) => {
    store.dispatch(setError(message));
    store.dispatch(clearErrorAction());
  };

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        handleError(response.data.error);
        break;
      case HTTP_CODE.UNAUTHORIZED:
        handleError(response.data.error);
        break;
      case HTTP_CODE.NOT_FOUND:
        handleError(response.data.error);
        break;
    }
  }
};
