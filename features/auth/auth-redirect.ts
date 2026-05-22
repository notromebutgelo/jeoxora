const AUTH_ROUTES = ["/login", "/register", "/forgot-password", "/onboarding"];

export function getAuthRedirectPath(isAuthenticated: boolean) {
  return isAuthenticated ? "/workspace/dashboard" : "/login";
}

export function isAuthRoute(pathname: string) {
  return AUTH_ROUTES.some((route) => pathname.startsWith(route));
}
