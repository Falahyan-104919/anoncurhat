import * as React from 'react';

import { cn } from '@/lib/utils';

const Post = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
));
Post.displayName = 'Post';

const PostHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
PostHeader.displayName = 'PostHeader';

const PostTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
PostTitle.displayName = 'PostTitle';

const PostDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
PostDescription.displayName = 'PostDescription';

const PostContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
PostContent.displayName = 'PostContent';

const PostFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center h-14 px-4 pt-0', className)}
    {...props}
  />
));
PostFooter.displayName = 'PostFooter';

export {
  Post,
  PostHeader,
  PostFooter,
  PostTitle,
  PostDescription,
  PostContent,
};