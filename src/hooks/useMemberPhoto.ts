export function useMemberPhoto(
  _fossunitedUsername: string | undefined,
  githubUsername: string,
): { photoUrl: string; loading: boolean } {
  const photoUrl = githubUsername
    ? `https://github.com/${githubUsername}.png`
    : '/img/default-avatar.png';
  return { photoUrl, loading: false };
}
