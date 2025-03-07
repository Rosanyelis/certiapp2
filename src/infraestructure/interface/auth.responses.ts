

export interface AuthResponse {
    [x: string]: any;
    user:    string[];
    email:   string;
    token:    string;
    token_type: string;
    expires_in: number;
  }