export type UserPayload = {
  usrId: number;
  usrFirstname: string;
  usrLastname: string;
  usrUsername: string;
  usrStatus: string;
  usrCdate: string;
  usrMdate: string | null;
  usrSessionExpiry: string | null;
  usrInputter: number;
  usrAuthoriser: number | null;
  byUserRolesList: any[] | null;
};

export type SignInData = {
  username: string;
  password: string;
};
