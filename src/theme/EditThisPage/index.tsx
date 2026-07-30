import React from 'react';

function deriveSourceUrl(editUrl: string): string {
  const match = editUrl.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/edit\/([^/]+)\/(.*)$/);
  if (!match) {
    return editUrl.replace('/edit/', '/blob/');
  }
  const [, org, repo, branch, path] = match;
  return `https://raw.githubusercontent.com/${org}/${repo}/${branch}/${path}`;
}

const btnStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 30,
  height: 30,
  borderRadius: 6,
  border: '1px solid var(--ifm-toc-border-color)',
  background: 'var(--ifm-background-surface-color)',
  color: 'var(--ifm-color-content-secondary)',
  transition: 'color 0.15s, border-color 0.15s, background 0.15s',
  textDecoration: 'none',
};

export default function EditThisPage({editUrl}: {editUrl: string}): React.JSX.Element {
  const sourceUrl = deriveSourceUrl(editUrl);

  return (
    <div style={{display: 'flex', gap: 6}}>
      <a href={sourceUrl} target="_blank" rel="noopener noreferrer" title="View source" aria-label="View source" style={btnStyle}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      </a>
      <a href={editUrl} target="_blank" rel="noopener noreferrer" title="Edit this page" aria-label="Edit this page" style={btnStyle}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      </a>
    </div>
  );
}
