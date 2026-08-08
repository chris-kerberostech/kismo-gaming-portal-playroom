import https from 'node:https';
import fs from 'node:fs';


function loadEnvFile(filePath = '.env') {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separator = trimmed.indexOf('=');
    if (separator <= 0) {
      continue;
    }

    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadEnvFile();
loadEnvFile('.dev.vars');

const PROD_URL =
  process.env.PROD_URL ||
  process.env.AWS_FETCHANDUPDATE_KISMOUSER_LAMBDA_URL ||
  'https://z33gfeaoxf.execute-api.eu-north-1.amazonaws.com/production/fetchAndUpdateKismoUser';
const TEST_USER_ID = process.env.TEST_USER_ID || '50bcf99c-f0b1-7089-9ab5-8557f062c9a0';
const TARGET_SCORE = Number(process.env.TARGET_SCORE || 13);
const API_ACCESS_KEY =
  process.env.API_ACCESS_KEY ||
  process.env.AWS_FETCHANDUPDATE_KISMOUSER_LAMBDA_API_KEY;

if (!API_ACCESS_KEY) {
  throw new Error('Missing API_ACCESS_KEY environment variable.');
}

function parseJsonSafe(text) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function requestJson(method, urlString, payload) {
  const url = new URL(urlString);
  const upperMethod = method.toUpperCase();
  const canHaveBody = upperMethod !== 'GET' && upperMethod !== 'HEAD';
  const body = canHaveBody && payload ? JSON.stringify(payload) : '';

  return new Promise((resolve, reject) => {
    const headers = {
      Accept: 'application/json',
      'x-api-key': API_ACCESS_KEY,
    };

    if (canHaveBody) {
      headers['Content-Type'] = 'application/json';
      headers['Content-Length'] = Buffer.byteLength(body);
    }

    const req = https.request(
      {
        protocol: url.protocol,
        hostname: url.hostname,
        port: url.port || 443,
        path: `${url.pathname}${url.search}`,
        method,
        headers,
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            bodyRaw: data,
            body: parseJsonSafe(data),
          });
        });
      },
    );

    req.on('error', reject);

    if (body) {
      req.write(body);
    }

    req.end();
  });
}

const getUrl = `${PROD_URL}?id=${encodeURIComponent(TEST_USER_ID)}`;

console.log('Running production GET (before update)...');
const getBefore = await requestJson('GET', getUrl);
console.log('GET before status:', getBefore.statusCode);
console.log('GET before body:', getBefore.body);

console.log('Running production PUT (update score)...');
const putRes = await requestJson('PUT', PROD_URL, {
  id: TEST_USER_ID,
  updates: {
    score: TARGET_SCORE,
  },
});
console.log('PUT status:', putRes.statusCode);
console.log('PUT body:', putRes.body);

console.log('Running production GET (after update)...');
const getAfter = await requestJson('GET', getUrl);
console.log('GET after status:', getAfter.statusCode);
console.log('GET after body:', getAfter.body);

const getAfterBody = typeof getAfter.body === 'string' ? parseJsonSafe(getAfter.body) : getAfter.body;
if (Number(getAfterBody?.score) !== TARGET_SCORE) {
  throw new Error(`Verification failed. Expected score ${TARGET_SCORE}, got ${getAfterBody?.score}`);
}

console.log(`Verification passed: production score is ${TARGET_SCORE}.`);
