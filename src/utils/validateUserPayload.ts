interface Payload {
  username?: string;
  age?: number;
  hobbies?: string[];
}

export const validateUserPayload = (
  payload: Payload
): { valid: boolean; message?: string } => {
  if (!payload?.username || typeof payload.username !== "string") {
    return { valid: false, message: "Invalid or missing username" };
  }

  if (!payload?.age || typeof payload.age !== "number") {
    return { valid: false, message: "Invalid or missing age" };
  }

  if (
    !payload?.hobbies ||
    !Array.isArray(payload.hobbies) ||
    !payload?.hobbies?.length
  ) {
    return { valid: false, message: "Invalid or missing hobbies" };
  }

  return { valid: true };
};
