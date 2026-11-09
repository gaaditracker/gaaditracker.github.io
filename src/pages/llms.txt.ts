// llms.txt is written in src/data/llms.txt with {{SITE}} standing for the site's address.
import type { APIRoute } from 'astro';
import text from '../data/llms.txt?raw';
import { SITE_URL } from '../data/site-url.mjs';

export const GET: APIRoute = () =>
  new Response(text.replaceAll('{{SITE}}', SITE_URL), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
