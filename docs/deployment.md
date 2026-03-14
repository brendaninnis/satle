# Deployment Guide

## Quick Deploy

```bash
npm run deploy
```

This builds the production bundle and rsyncs it to the VPS via the `satle-vps` SSH alias.

## What It Does

1. Runs `vite build --mode production` to build `dist/`
2. Rsyncs `dist/` to `/var/www/satle.ca/` on the VPS
   - `--delete` removes files on the server that are no longer in `dist/`
   - `-z` compresses data during transfer
   - Only changed files are transferred

## Prerequisites

- An SSH alias `satle-vps` configured in `~/.ssh/config` pointing to the VPS
- SSH key-based access (to avoid password prompts)
- Node.js and npm installed locally
- A valid `.env.production` file with `VITE_MAPBOX_TOKEN`

### SSH Setup (one-time)

Add to `~/.ssh/config`:

```
Host satle-vps
  HostName <your-vps-ip>
  User <your-username>
```

Then set up key-based auth:

```bash
# Generate a key if you don't have one
ssh-keygen -t ed25519

# Copy it to the server
ssh-copy-id satle-vps
```

## Deploying with New Puzzles

When releasing new puzzles, run the schedule rebuild right before deploying:

```bash
# Rebuild schedule so new puzzles start today
node scripts/rebuild-schedule.mjs --new-puzzles workspace/new-satles.json

# Review the preview output, re-run until you're happy with the shuffle

# Deploy
npm run deploy
```

See `docs/puzzle-management.md` for full puzzle management workflow.

## Verifying a Deploy

After deploying, verify the live site matches your local build:

```bash
# Check that the live puzzle data is accessible
curl -s -o /dev/null -w "%{http_code}" https://satle.ca/satles-v2.lz

# Compare live vs local file sizes
curl -s https://satle.ca/satles-v2.lz | wc -c
wc -c public/satles-v2.lz
```

## Rollback

SSH into the VPS and restore from a previous build:

```bash
ssh satle-vps
cd ~/satle  # or wherever the repo is
git log --oneline  # find the commit to roll back to
git checkout <commit> -- public/
cp -r public/* /var/www/satle.ca/
```

Or locally, revert and redeploy:

```bash
git revert HEAD
npm run deploy
```
