import { ApiError } from "../errors/apiError.js";

const errorHandlingMiddleware = (error, request, responce, nextMiddleware) => {
  if (error instanceof ApiError) {
    return responce.status(error.status).json({ message: error.message });
  }
  return responce.status(500).json({ message: "ОШИБКА 500 - Непредвиденная" });
};

export { errorHandlingMiddleware };
