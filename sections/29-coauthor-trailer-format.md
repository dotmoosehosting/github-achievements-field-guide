# The co-author trailer format, exactly

GitHub recognises co-authors from trailers in the commit message. The rules:

```text
Subject line of the commit

Optional body text explaining the change.

Co-authored-by: Name <email>
```

- The trailer must be at the end of the message, with a blank line before the trailer block.
- The email should be the co-author's GitHub noreply address: `<id>+<username>@users.noreply.github.com`, or an email they have verified on their GitHub account. An unrecognised email produces a grey avatar and no link to their profile.
- Multiple co-authors each get their own line.
- GitHub's web editor has a co-author picker in some flows; in the API and CLI, write the trailer into the message yourself, as this guide's commits do.
