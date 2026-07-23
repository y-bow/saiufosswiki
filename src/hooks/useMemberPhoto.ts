import { useState, useEffect } from 'react';

function getGitHubAvatar(githubUsername: string): string {
  return `https://github.com/${githubUsername}.png`;
}

async function fetchFossUnitedAvatar(fossunitedUsername: string): Promise<string | null> {
  try {
    const res = await fetch(`https://fossunited.org/u/${fossunitedUsername}`, {
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;
    const html = await res.text();

    // Try og:image first
    const ogMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i);
    if (ogMatch?.[1]) return ogMatch[1];

    // Try profile img tag
    const imgMatch = html.match(/<img[^>]*class=["'][^"']*profile[^"']*["'][^>]*src=["']([^"']+)["']/i);
    if (imgMatch?.[1]) return imgMatch[1];

    return null;
  } catch {
    return null;
  }
}

export function useMemberPhoto(
  fossunitedUsername: string | undefined,
  githubUsername: string,
): { photoUrl: string; loading: boolean } {
  const [photoUrl, setPhotoUrl] = useState(getGitHubAvatar(githubUsername));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (fossunitedUsername) {
        const url = await fetchFossUnitedAvatar(fossunitedUsername);
        if (!cancelled && url) {
          setPhotoUrl(url);
        }
      }
      if (!cancelled) setLoading(false);
    }

    load();
    return () => { cancelled = true; };
  }, [fossunitedUsername, githubUsername]);

  return { photoUrl, loading };
}
