import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

export default function MarkdownContent({ file }) {
  const [content, setContent] = useState('Loading...');
  useEffect(() => {
    fetch(`/${file}`)
      .then(res => res.text())
      .then(md => setContent(marked.parse(md)));
  }, [file]);
  return <div><div dangerouslySetInnerHTML={{ __html: content }} /></div>;
}
