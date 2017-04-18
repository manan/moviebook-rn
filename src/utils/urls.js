export const urls = {
  base_url: 'https://themoviebook.herokuapp.com/',
  signup: 'signup/',
  resend_activation_key: 'users/resend-activation-key/',

  token_auth: 'token-auth/',
  token_refrest: 'token-refresh/',
  token_verify: 'token-verify/',

  self_user_details: 'users/self/',
  self_profile_details: 'profiles/self/',

  profile_picture_upload: 'profiles/profilepicture/upload/',

  search_by_username: 'profiles/search/username=',
  search_by_name: 'profiles/search/name=',
  search_by_ids: 'profiles/search/userpids=',

  profile_update: 'profiles/update/',
  user_update: 'users/update/'
}

export const params = {
  token_request: 'JWT ',
  token_response: 'token',

  detail: 'detail',
  signature_expired: 'Signature has expired.',
  non_field_errors: 'non_field_errors',

  user: 'user',
  username: 'username',
  password: 'password',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',

  gender: 'gender',
  bio: 'bio',
  birth_date: 'birth_date',
  profile_picture: 'profile_picture',
  followings: 'followings',
  followers: 'followers',
  blocked: 'blocked',
  blocked_by: 'blocked_by',

  id: 'id'
}
